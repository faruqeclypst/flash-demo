/**
 * ====================================================================
 * FLAPPY BIRD PIXEL EDITION - LEVEL NGESELIN (SCORE > 10)
 * Fitur Tambahan:
 * 1. Mode Ngeselin Aktif saat Skor > 10 (Langit berubah, tantangan ekstrem).
 * 2. Burung Lawan Menantang (Rival Red Bird dengan warning, speech bubble, & gerakan menukik/bergelombang).
 * 3. Pipa Miring (Tilted Slanted Pipes) & Pipa Bergerak Naik-Turun (Oscillating Pipes).
 * 4. Interaktivitas Tinggi: Screen shake, floating score text, efek keringat panik, audio alarm 8-bit, taunt banner.
 * ====================================================================
 */

// 1. Inisialisasi Canvas & Konfigurasi
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const keyBadge = document.querySelector('.key-badge');

// Matikan image smoothing agar grafis pixel art tetap tajam (crisp pixelated)
ctx.imageSmoothingEnabled = false;

// Dimensi Internal Canvas
const CANVAS_WIDTH = canvas.width;    // 288 px
const CANVAS_HEIGHT = canvas.height;  // 512 px
const GROUND_Y = 430;                 // Garis permukaan tanah

// 2. State Game
const STATES = {
  START: 'START',
  PLAYING: 'PLAYING',
  GAMEOVER: 'GAMEOVER'
};
let currentState = STATES.START;

// Efek Screen Shake
let screenShake = {
  intensity: 0,
  decay: 0.9
};

function triggerShake(amount = 6) {
  screenShake.intensity = amount;
}

// 3. Audio Generator 8-Bit (Web Audio API)
class RetroAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // SFX Lompat / Flap
  playJump() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(720, now + 0.1);

    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  // SFX Poin / Score (Chime 2 nada)
  playScore() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.08);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now + 0.08); // A5
    gain2.gain.setValueAtTime(0.18, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.2);
  }

  // SFX Bonus Menghindari Burung Lawan (+2 Poin)
  playDodgeBonus() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [659.25, 880, 1174.66]; // E5, A5, D6
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      gain.gain.setValueAtTime(0.14, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.12);
    });
  }

  // SFX Peringatan Burung Lawan Datang (Warning Beep Siren)
  playWarning() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.linearRampToValueAtTime(400, now + 0.15);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // SFX Mode Ngeselin Terbuka (Alarm Horn)
  playNgeselinAlert() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.setValueAtTime(360, now + 0.15);
    osc.frequency.setValueAtTime(520, now + 0.3);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  // SFX Tabrakan / Game Over
  playHit() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.3);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }
}
const sfx = new RetroAudio();

// 4. Objek Burung Pemain (Player Bird)
const bird = {
  x: 55,
  y: 220,
  width: 24,
  height: 18,
  velocity: 0,
  gravity: 0.32,
  jumpStrength: -5.8,
  rotation: 0,
  frame: 0,
  animationTimer: 0,
  isSweating: false, // Animasi keringat panik saat bahaya

  reset() {
    this.x = 55;
    this.y = 220;
    this.velocity = 0;
    this.rotation = 0;
    this.frame = 0;
    this.animationTimer = 0;
    this.isSweating = false;
  },

  flap() {
    this.velocity = this.jumpStrength;
    sfx.playJump();
    createParticles(this.x + 4, this.y + this.height - 2, '#fff', 3);
  },

  update() {
    if (currentState === STATES.PLAYING) {
      this.velocity += this.gravity;
      this.y += this.velocity;

      // Rotasi berdasarkan kecepatan jatuh
      if (this.velocity < 0) {
        this.rotation = Math.max(-0.45, (this.velocity / 7) * 0.45);
      } else {
        this.rotation = Math.min(Math.PI / 2.2, (this.velocity / 9) * (Math.PI / 2.2));
      }

      // Keringat panik saat skor > 10 (Level Ngeselin)
      this.isSweating = score >= 10;
    } else if (currentState === STATES.START) {
      this.y = 220 + Math.sin(Date.now() / 200) * 6;
      this.rotation = 0;
      this.isSweating = false;
    }

    // Animasi sayap
    this.animationTimer++;
    if (this.animationTimer % 6 === 0) {
      this.frame = (this.frame + 1) % 3;
    }
  },

  draw() {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);

    const px = -this.width / 2;
    const py = -this.height / 2;

    // Tubuh Utama Kuning Pixel
    ctx.fillStyle = '#f6b93b';
    ctx.fillRect(px + 4, py + 2, 16, 14);
    ctx.fillStyle = '#f8c291';
    ctx.fillRect(px + 2, py + 6, 4, 8);

    // Border Hitam
    ctx.fillStyle = '#1e272e';
    ctx.fillRect(px + 4, py, 14, 2);
    ctx.fillRect(px + 4, py + 16, 14, 2);
    ctx.fillRect(px + 2, py + 2, 2, 4);
    ctx.fillRect(px, py + 6, 2, 8);
    ctx.fillRect(px + 2, py + 14, 2, 2);
    ctx.fillRect(px + 18, py + 2, 2, 14);

    // Perut Putih
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 4, py + 11, 8, 4);

    // Mata
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 12, py + 2, 6, 6);
    ctx.fillStyle = '#1e272e';
    ctx.fillRect(px + 15, py + 4, 3, 4);

    // Paruh Oranye
    ctx.fillStyle = '#e55039';
    ctx.fillRect(px + 18, py + 7, 6, 6);
    ctx.fillStyle = '#fa983a';
    ctx.fillRect(px + 18, py + 8, 4, 2);
    ctx.fillStyle = '#1e272e';
    ctx.fillRect(px + 18, py + 10, 6, 1);

    // Sayap (3 Frame)
    ctx.fillStyle = '#ffffff';
    if (this.frame === 0) {
      ctx.fillRect(px + 4, py + 8, 8, 5);
      ctx.strokeStyle = '#1e272e';
      ctx.strokeRect(px + 4, py + 8, 8, 5);
    } else if (this.frame === 1) {
      ctx.fillRect(px + 4, py + 4, 8, 6);
      ctx.strokeStyle = '#1e272e';
      ctx.strokeRect(px + 4, py + 4, 8, 6);
    } else {
      ctx.fillRect(px + 4, py + 10, 8, 5);
      ctx.strokeStyle = '#1e272e';
      ctx.strokeRect(px + 4, py + 10, 8, 5);
    }

    // Efek Butiran Keringat Panik saat Level Ngeselin
    if (this.isSweating && (Math.floor(Date.now() / 200) % 2 === 0)) {
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(px + 2, py - 4, 3, 4);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px + 3, py - 3, 1, 2);
    }

    ctx.restore();
  }
};

// 5. BURUNG LAWAN MENANTANG (RIVAL ENEMY BIRDS)
let rivalBirds = [];
let rivalSpawnTimer = 0;
const RIVAL_TAUNTS = [
  'AWAS!',
  'MINGGIR!',
  'NABRAK NIH!',
  'SINI KAU!',
  'KABUR KAU!'
];

class RivalBird {
  constructor(y, type = 'wave') {
    this.x = CANVAS_WIDTH + 40;
    this.baseY = y;
    this.y = y;
    this.width = 26;
    this.height = 20;
    this.speed = 3.2; // Lebih cepat dari pipa!
    this.type = type; // 'wave' (sinusoidal) atau 'swoop' (menukik ke arah burung)
    this.time = Math.random() * 10;
    this.frame = 0;
    this.animTimer = 0;
    this.passed = false;
    this.taunt = RIVAL_TAUNTS[Math.floor(Math.random() * RIVAL_TAUNTS.length)];
    this.tauntTimer = 70; // Durasi balon obrolan
  }

  update() {
    this.x -= this.speed;
    this.time += 0.08;

    if (this.type === 'wave') {
      // Gerakan bergelombang naik-turun menantang
      this.y = this.baseY + Math.sin(this.time) * 32;
    } else {
      // Gerakan perlahan mengejar ketinggian burung pemain
      this.y += (bird.y - this.y) * 0.035;
    }

    // Batasi di atas tanah
    if (this.y > GROUND_Y - this.height - 10) {
      this.y = GROUND_Y - this.height - 10;
    }

    // Animasi sayap rival
    this.animTimer++;
    if (this.animTimer % 5 === 0) {
      this.frame = (this.frame + 1) % 3;
    }

    // Partikel asap merah di belakang rival
    if (Math.random() > 0.4) {
      createParticles(this.x + this.width, this.y + this.height / 2, '#ef4444', 1);
    }

    // Cek jika pemain berhasil menghindari burung lawan (DODGE BONUS)
    if (!this.passed && this.x + this.width < bird.x) {
      this.passed = true;
      score += 2; // Bonus 2 Poin!
      sfx.playDodgeBonus();
      triggerShake(4);
      addFloatingText(bird.x, bird.y - 15, 'DODGE! +2', '#22d3ee');
    }
  }

  draw() {
    // Balon Kata Taunt
    if (this.tauntTimer > 0 && this.x < CANVAS_WIDTH - 20) {
      this.tauntTimer--;
      ctx.save();
      ctx.fillStyle = '#0f172a';
      ctx.font = '8px "Press Start 2P", monospace';
      const tw = ctx.measureText(this.taunt).width;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(this.x - tw / 2, this.y - 20, tw + 8, 14);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(this.x - tw / 2, this.y - 20, tw + 8, 14);
      ctx.fillStyle = '#e55039';
      ctx.fillText(this.taunt, this.x - tw / 2 + 4, this.y - 10);
      ctx.restore();
    }

    // Gambar Sprite Burung Rival Merah Berbahaya
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    const px = -this.width / 2;
    const py = -this.height / 2;

    // Tubuh Merah Menyala
    ctx.fillStyle = '#e55039';
    ctx.fillRect(px + 4, py + 2, 18, 16);
    ctx.fillStyle = '#b71540';
    ctx.fillRect(px + 4, py + 12, 18, 6); // Bayangan bawah

    // Border Hitam
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 4, py, 16, 2);
    ctx.fillRect(px + 4, py + 18, 16, 2);
    ctx.fillRect(px, py + 4, 4, 12);
    ctx.fillRect(px + 20, py + 2, 4, 16);

    // Alis Jahat Menukik Tajam
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 6, py + 4, 10, 3);

    // Mata Merah/Putih Seram
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 6, py + 7, 7, 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 6, py + 8, 4, 4); // Pupil melotot ke depan

    // Paruh Hitam / Tajam
    ctx.fillStyle = '#f39c12';
    ctx.fillRect(px - 6, py + 9, 8, 6);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px - 6, py + 12, 8, 2);

    // Sayap Hitam Keunguan
    ctx.fillStyle = '#2c3e50';
    if (this.frame === 0) {
      ctx.fillRect(px + 12, py + 6, 8, 7);
    } else if (this.frame === 1) {
      ctx.fillRect(px + 12, py + 2, 8, 8);
    } else {
      ctx.fillRect(px + 12, py + 10, 8, 7);
    }

    ctx.restore();
  }
}

// 6. PIPA: PIPA BIASA, PIPA MIRING, & PIPA BERGERAK (LEVEL NGESELIN)
const PIPE_WIDTH = 48;
const PIPE_GAP = 96;          // Celah celah standar
const PIPE_SPEED = 1.9;       // Kecepatan gerak ke kiri
let pipes = [];
let pipeSpawnTimer = 0;

function resetPipes() {
  pipes = [];
  pipeSpawnTimer = 0;
  rivalBirds = [];
  rivalSpawnTimer = 0;
}

function spawnPipe() {
  const minTop = 45;
  const maxTop = GROUND_Y - PIPE_GAP - 60;
  const topHeight = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
  const bottomY = topHeight + PIPE_GAP;
  const bottomHeight = GROUND_Y - bottomY;

  // Fitur Level Ngeselin saat skor > 10:
  // 1. Pipa Miring (Slanted Pipe)
  // 2. Pipa Bergerak Naik-Turun (Oscillating Pipe)
  let isTilted = false;
  let tiltAngle = 0;
  let isOscillating = false;
  let oscDir = 1;
  let oscSpeed = 0;

  if (score >= 10) {
    const roll = Math.random();
    if (roll < 0.45) {
      // 45% kemungkinan pipa miring (±12 derajat)
      isTilted = true;
      tiltAngle = (Math.random() > 0.5 ? 1 : -1) * (0.16 + Math.random() * 0.08);
    } else if (roll < 0.8) {
      // 35% kemungkinan pipa bergerak naik-turun secara ngeselin
      isOscillating = true;
      oscSpeed = 0.9 + Math.random() * 0.8;
      oscDir = Math.random() > 0.5 ? 1 : -1;
    }
  }

  pipes.push({
    x: CANVAS_WIDTH + 15,
    topHeight: topHeight,
    bottomY: bottomY,
    bottomHeight: bottomHeight,
    width: PIPE_WIDTH,
    passed: false,
    isTilted: isTilted,
    tiltAngle: tiltAngle,
    isOscillating: isOscillating,
    oscSpeed: oscSpeed,
    oscDir: oscDir,
    minY: Math.max(30, topHeight - 40),
    maxY: Math.min(GROUND_Y - PIPE_GAP - 30, topHeight + 40)
  });
}

function updatePipes() {
  if (currentState !== STATES.PLAYING) return;

  // 1. Spawn Pipa
  pipeSpawnTimer++;
  if (pipeSpawnTimer >= 92) {
    spawnPipe();
    pipeSpawnTimer = 0;
  }

  // 2. Spawn Burung Lawan saat Skor >= 10
  if (score >= 10) {
    rivalSpawnTimer++;
    // Spawn tiap ~140 frame
    if (rivalSpawnTimer >= 140) {
      const rivalY = 70 + Math.random() * (GROUND_Y - 140);
      const rivalType = Math.random() > 0.4 ? 'wave' : 'swoop';
      rivalBirds.push(new RivalBird(rivalY, rivalType));
      rivalSpawnTimer = 0;
      sfx.playWarning(); // Alarm peringatan
      addFloatingText(CANVAS_WIDTH - 50, rivalY, '⚠️ AWAS!', '#ef4444');
    }
  }

  // 3. Update Pipa
  for (let i = pipes.length - 1; i >= 0; i--) {
    const p = pipes[i];
    p.x -= PIPE_SPEED;

    // Gerakan naik turun untuk pipa oscillating
    if (p.isOscillating) {
      p.topHeight += p.oscSpeed * p.oscDir;
      if (p.topHeight > p.maxY) {
        p.topHeight = p.maxY;
        p.oscDir = -1;
      } else if (p.topHeight < p.minY) {
        p.topHeight = p.minY;
        p.oscDir = 1;
      }
      p.bottomY = p.topHeight + PIPE_GAP;
      p.bottomHeight = GROUND_Y - p.bottomY;
    }

    // Skor saat melewati pipa
    if (!p.passed && p.x + p.width < bird.x) {
      p.passed = true;
      score++;
      sfx.playScore();

      // Trigger peringatan saat tepat mencapai skor 10
      if (score === 10) {
        sfx.playNgeselinAlert();
        triggerShake(8);
      } else {
        addFloatingText(bird.x + 10, bird.y - 10, '+1', '#f9ca24');
      }

      if (score > highScore) {
        highScore = score;
        localStorage.setItem('flappy_pixel_highscore', highScore);
      }
    }

    // Hapus pipa yang keluar layar
    if (p.x + p.width < -30) {
      pipes.splice(i, 1);
    }
  }

  // 4. Update Burung Lawan
  for (let i = rivalBirds.length - 1; i >= 0; i--) {
    const rb = rivalBirds[i];
    rb.update();
    if (rb.x + rb.width < -30) {
      rivalBirds.splice(i, 1);
    }
  }
}

// Menggambar Pipa (Mendukung Pipa Lurus & Pipa Miring)
function drawPixelPipe(x, y, width, height, isTop) {
  const rimHeight = 22;
  const rimExtra = 4;

  let bodyY = isTop ? y : y + rimHeight;
  let bodyHeight = isTop ? height - rimHeight : height - rimHeight;

  ctx.fillStyle = '#74b816';
  ctx.fillRect(x, bodyY, width, bodyHeight);

  ctx.fillStyle = '#a9e34b';
  ctx.fillRect(x + 4, bodyY, 6, bodyHeight);

  ctx.fillStyle = '#5c940d';
  ctx.fillRect(x + width - 10, bodyY, 8, bodyHeight);

  ctx.fillStyle = '#1e272e';
  ctx.fillRect(x, bodyY, 2, bodyHeight);
  ctx.fillRect(x + width - 2, bodyY, 2, bodyHeight);

  let rimY = isTop ? y + height - rimHeight : y;
  let rimX = x - rimExtra / 2;
  let rimW = width + rimExtra;

  ctx.fillStyle = '#74b816';
  ctx.fillRect(rimX, rimY, rimW, rimHeight);

  ctx.fillStyle = '#a9e34b';
  ctx.fillRect(rimX + 4, rimY, 6, rimHeight);

  ctx.fillStyle = '#5c940d';
  ctx.fillRect(rimX + rimW - 10, rimY, 8, rimHeight);

  ctx.fillStyle = '#1e272e';
  ctx.fillRect(rimX, rimY, rimW, 2);
  ctx.fillRect(rimX, rimY + rimHeight - 2, rimW, 2);
  ctx.fillRect(rimX, rimY, 2, rimHeight);
  ctx.fillRect(rimX + rimW - 2, rimY, 2, rimHeight);
}

function drawPipes() {
  for (let p of pipes) {
    if (p.isTilted) {
      // Gambar Pipa Miring dengan rotasi Canvas
      ctx.save();
      const pivotX = p.x + p.width / 2;
      const pivotY = p.topHeight + PIPE_GAP / 2;
      ctx.translate(pivotX, pivotY);
      ctx.rotate(p.tiltAngle);

      // Gambar Pipa Atas Miring
      drawPixelPipe(-p.width / 2, -pivotY, p.width, p.topHeight, true);
      // Gambar Pipa Bawah Miring
      drawPixelPipe(-p.width / 2, p.bottomY - pivotY, p.width, p.bottomHeight, false);

      ctx.restore();
    } else {
      // Gambar Pipa Lurus
      drawPixelPipe(p.x, 0, p.width, p.topHeight, true);
      drawPixelPipe(p.x, p.bottomY, p.width, p.bottomHeight, false);

      // Jika pipa bergerak naik-turun, beri tanda panah
      if (p.isOscillating) {
        ctx.fillStyle = '#f9ca24';
        ctx.font = '8px "Press Start 2P", monospace';
        ctx.fillText(p.oscDir > 0 ? '▼' : '▲', p.x + p.width / 2 - 4, p.topHeight + PIPE_GAP / 2 + 3);
      }
    }
  }

  // Gambar seluruh Burung Lawan
  for (let rb of rivalBirds) {
    rb.draw();
  }
}

// 7. DETEKSI TABRAKAN (AABB + ROTATED TILTED COLLISION)
function checkCollision() {
  if (currentState !== STATES.PLAYING) return;

  // 1. Tabrakan Tanah / Atap
  if (bird.y + bird.height >= GROUND_Y) {
    triggerGameOver();
    return;
  }
  if (bird.y <= 0) {
    bird.y = 0;
    bird.velocity = 0;
  }

  const pad = 3;
  const bBox = {
    left: bird.x + pad,
    right: bird.x + bird.width - pad,
    top: bird.y + pad,
    bottom: bird.y + bird.height - pad,
    cx: bird.x + bird.width / 2,
    cy: bird.y + bird.height / 2
  };

  // 2. Tabrakan dengan Pipa
  for (let p of pipes) {
    if (p.isTilted) {
      // Transform koordinat burung ke ruang lokal pipa miring (Inverse Rotation)
      const pivotX = p.x + p.width / 2;
      const pivotY = p.topHeight + PIPE_GAP / 2;
      const dx = bBox.cx - pivotX;
      const dy = bBox.cy - pivotY;
      const angle = -p.tiltAngle;

      const localX = Math.cos(angle) * dx - Math.sin(angle) * dy + pivotX;
      const localY = Math.sin(angle) * dx + Math.cos(angle) * dy + pivotY;

      const halfW = (bird.width - pad * 2) / 2;
      const halfH = (bird.height - pad * 2) / 2;

      // Cek apakah posisi transform burung menabrak pipa atas atau pipa bawah
      if (localX + halfW > p.x && localX - halfW < p.x + p.width) {
        if (localY - halfH < p.topHeight || localY + halfH > p.bottomY) {
          triggerGameOver();
          return;
        }
      }
    } else {
      // Pipa Normal AABB
      if (bBox.right > p.x && bBox.left < p.x + p.width) {
        if (bBox.top < p.topHeight || bBox.bottom > p.bottomY) {
          triggerGameOver();
          return;
        }
      }
    }
  }

  // 3. Tabrakan dengan Burung Lawan (Rival Birds)
  for (let rb of rivalBirds) {
    if (
      bBox.right > rb.x + 3 &&
      bBox.left < rb.x + rb.width - 3 &&
      bBox.bottom > rb.y + 3 &&
      bBox.top < rb.y + rb.height - 3
    ) {
      triggerGameOver();
      return;
    }
  }
}

function triggerGameOver() {
  currentState = STATES.GAMEOVER;
  sfx.playHit();
  triggerShake(12); // Getaran layar kuat saat kalah
  createParticles(bird.x + bird.width / 2, bird.y + bird.height / 2, '#fa983a', 18);
  createParticles(bird.x + bird.width / 2, bird.y + bird.height / 2, '#ef4444', 12);
  createParticles(bird.x + bird.width / 2, bird.y + bird.height / 2, '#ffffff', 8);
}

// 8. TEKS MELAYANG INTERAKTIF (FLOATING TEXTS)
let floatingTexts = [];

function addFloatingText(x, y, text, color = '#f9ca24') {
  floatingTexts.push({
    x: x,
    y: y,
    text: text,
    color: color,
    life: 40,
    maxLife: 40
  });
}

function updateFloatingTexts() {
  for (let i = floatingTexts.length - 1; i >= 0; i--) {
    const ft = floatingTexts[i];
    ft.y -= 0.8;
    ft.life--;
    if (ft.life <= 0) {
      floatingTexts.splice(i, 1);
    }
  }
}

function drawFloatingTexts() {
  for (let ft of floatingTexts) {
    ctx.save();
    ctx.font = '10px "Press Start 2P", monospace';
    ctx.fillStyle = '#000000';
    ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
    ctx.fillStyle = ft.color;
    ctx.fillText(ft.text, ft.x, ft.y);
    ctx.restore();
  }
}

// 9. SISTEM PARTIKEL PIXEL
let particles = [];

function createParticles(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x: x,
      y: y,
      size: Math.floor(Math.random() * 3) + 2,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      life: 25,
      color: color
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.life--;
    if (pt.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

function drawParticles() {
  for (let pt of particles) {
    ctx.fillStyle = pt.color;
    ctx.fillRect(Math.floor(pt.x), Math.floor(pt.y), pt.size, pt.size);
  }
}

// 10. LATAR BELAKANG PIXEL DINAMIS (BERUBAH MERAH SAAT LEVEL NGESELIN)
let groundOffset = 0;
let cloudOffset = 0;

function updateBackground() {
  cloudOffset = (cloudOffset + 0.3) % CANVAS_WIDTH;
  if (currentState === STATES.PLAYING) {
    groundOffset = (groundOffset + PIPE_SPEED) % 18;
  }
}

function drawBackground() {
  // Warna Langit Berubah Saat Level Ngeselin (Skor >= 10)
  if (score >= 10) {
    // Langit Senja Merah Menyala Berbahaya (Twilight Chaos)
    ctx.fillStyle = '#7a1b38';
    ctx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y);

    // Gradasi langit merah gelap
    const grad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
    grad.addColorStop(0, '#4a0e17');
    grad.addColorStop(0.7, '#831843');
    grad.addColorStop(1, '#db2777');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y);
  } else {
    // Langit Siang Cerah Normal
    ctx.fillStyle = '#4bcffa';
    ctx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y);
  }

  // Awan Bergerak
  ctx.fillStyle = score >= 10 ? 'rgba(255, 200, 220, 0.6)' : '#ffffff';
  drawPixelCloud(60 - cloudOffset, 60, 48);
  drawPixelCloud(220 - cloudOffset, 90, 60);
  drawPixelCloud(CANVAS_WIDTH + 60 - cloudOffset, 60, 48);

  // Siluet Gedung
  ctx.fillStyle = score >= 10 ? '#500724' : '#80dfe9';
  const buildings = [
    { x: 0, w: 32, h: 90 }, { x: 34, w: 26, h: 120 }, { x: 62, w: 40, h: 70 },
    { x: 104, w: 30, h: 100 }, { x: 136, w: 45, h: 130 }, { x: 183, w: 28, h: 80 },
    { x: 213, w: 36, h: 110 }, { x: 251, w: 38, h: 85 }
  ];
  for (let b of buildings) {
    ctx.fillRect(b.x, GROUND_Y - b.h, b.w, b.h);
    // Jendela
    ctx.fillStyle = score >= 10 ? '#f43f5e' : '#4bcffa';
    for (let wy = GROUND_Y - b.h + 10; wy < GROUND_Y - 10; wy += 14) {
      for (let wx = b.x + 6; wx < b.x + b.w - 6; wx += 10) {
        ctx.fillRect(wx, wy, 4, 6);
      }
    }
    ctx.fillStyle = score >= 10 ? '#500724' : '#80dfe9';
  }

  ctx.fillStyle = '#2ed573';
  ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, 14);
  ctx.fillStyle = '#1e272e';
  ctx.fillRect(0, GROUND_Y + 14, CANVAS_WIDTH, 2);

  ctx.fillStyle = '#d2a679';
  ctx.fillRect(0, GROUND_Y + 16, CANVAS_WIDTH, CANVAS_HEIGHT - (GROUND_Y + 16));

  ctx.fillStyle = '#26af5f';
  for (let x = -groundOffset; x < CANVAS_WIDTH + 18; x += 18) {
    ctx.fillRect(x, GROUND_Y + 4, 10, 6);
    ctx.fillRect(x + 4, GROUND_Y + 10, 6, 4);
  }

  ctx.fillStyle = '#b88b5d';
  for (let x = -groundOffset * 1.5; x < CANVAS_WIDTH + 30; x += 30) {
    ctx.fillRect(x + 10, GROUND_Y + 28, 8, 4);
    ctx.fillRect(x + 22, GROUND_Y + 45, 6, 3);
  }
}

function drawPixelCloud(x, y, width) {
  ctx.fillRect(x, y + 10, width, 18);
  ctx.fillRect(x + 10, y + 2, width - 20, 10);
  ctx.fillRect(x + 18, y - 4, width - 36, 8);
}

// 11. TAMPILAN ANTARMUKA (UI TEXT, HUD, & OVERLAYS)
let score = 0;
let highScore = parseInt(localStorage.getItem('flappy_pixel_highscore')) || 0;

function drawUI() {
  ctx.textAlign = 'center';

  if (currentState === STATES.START) {
    ctx.fillStyle = '#1e272e';
    ctx.font = '14px "Press Start 2P", monospace';
    ctx.fillText('FLAPPY PIXEL', CANVAS_WIDTH / 2 + 2, 132);
    ctx.fillStyle = '#f9ca24';
    ctx.fillText('FLAPPY PIXEL', CANVAS_WIDTH / 2, 130);

    ctx.fillStyle = '#ffffff';
    ctx.fillText('TEKAN SPACE', CANVAS_WIDTH / 2, 330);
    ctx.fillText('UNTUK TERBANG', CANVAS_WIDTH / 2, 350);

    ctx.fillStyle = '#0f172a';
    ctx.fillText(`TERBAIK: ${highScore}`, CANVAS_WIDTH / 2, 400);

  } else if (currentState === STATES.PLAYING) {
    // Skor Utama
    ctx.font = '22px "Press Start 2P", monospace';
    ctx.fillStyle = '#1e272e';
    ctx.fillText(score, CANVAS_WIDTH / 2 + 2, 52);
    ctx.fillStyle = score >= 10 ? '#f43f5e' : '#ffffff';
    ctx.fillText(score, CANVAS_WIDTH / 2, 50);

  } else if (currentState === STATES.GAMEOVER) {
    const boxX = 20;
    const boxY = 120;
    const boxW = CANVAS_WIDTH - 40;
    const boxH = 210;

    // Panel Game Over
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(boxX + 4, boxY + 4, boxW, boxH);

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 4;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    ctx.fillStyle = '#e55039';
    ctx.font = '14px "Press Start 2P", monospace';
    ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, boxY + 34);

    ctx.fillStyle = '#334155';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText('SKOR AKHIR', CANVAS_WIDTH / 2, boxY + 65);
    ctx.fillStyle = '#0f172a';
    ctx.font = '16px "Press Start 2P", monospace';
    ctx.fillText(score, CANVAS_WIDTH / 2, boxY + 88);

    ctx.fillStyle = '#334155';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText(`TERBAIK: ${highScore}`, CANVAS_WIDTH / 2, boxY + 115);

    // Keterangan Mode
    ctx.fillStyle = score >= 10 ? '#22d3ee' : '#64748b';
    ctx.font = '7px "Press Start 2P", monospace';
    const evalText = score >= 10 ? 'Pencapaian Luar Biasa!' : 'Terus Berlatih!';
    ctx.fillText(evalText, CANVAS_WIDTH / 2, boxY + 140);

    ctx.fillStyle = '#f9ca24';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillText('TEKAN SPACE', CANVAS_WIDTH / 2, boxY + 175);
    ctx.fillText('UNTUK MAIN LAGI', CANVAS_WIDTH / 2, 192);
  }
}

// 12. PENANGANAN INPUT (TOMBOL SPACE)
function handleAction() {
  sfx.init();

  if (currentState === STATES.START) {
    currentState = STATES.PLAYING;
    bird.flap();
  } else if (currentState === STATES.PLAYING) {
    bird.flap();
  } else if (currentState === STATES.GAMEOVER) {
    score = 0;
    bird.reset();
    resetPipes();
    particles = [];
    floatingTexts = [];
    currentState = STATES.PLAYING;
    bird.flap();
  }
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (keyBadge) keyBadge.classList.add('pressed');
    handleAction();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    if (keyBadge) keyBadge.classList.remove('pressed');
  }
});

// Fullscreen Toggle (Tekan F atau Double-Click)
function toggleStandaloneFullscreen() {
  const target = document.querySelector('.arcade-container') || canvas;
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (target.requestFullscreen) {
      target.requestFullscreen().catch(() => {});
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyF') {
    e.preventDefault();
    toggleStandaloneFullscreen();
  }
});

canvas.addEventListener('dblclick', (e) => {
  e.preventDefault();
  toggleStandaloneFullscreen();
});

canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  handleAction();
});

// 13. FIXED TIMESTEP 60 FPS GAME LOOP (STABIL DI SEMUA MONITOR & BROWSER)
let lastTimestamp = 0;
const FIXED_STEP = 1000 / 60; // 16.6667ms per frame
let logicAccumulator = 0;

function updateAllGameLogic() {
  bird.update();
  updatePipes();
  checkCollision();
  updateParticles();
  updateFloatingTexts();
  updateBackground();

  // Screen shake decay pada 60 ticks per detik
  if (screenShake.intensity > 0) {
    screenShake.intensity *= screenShake.decay;
    if (screenShake.intensity < 0.2) screenShake.intensity = 0;
  }
}

function gameLoop(timestamp) {
  if (!lastTimestamp) lastTimestamp = timestamp;
  let elapsed = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  // Batasi akumulasi jika lag spike atau tab tidak aktif (maks 100ms)
  if (elapsed > 100) elapsed = 100;

  logicAccumulator += elapsed;

  // Update fisika dan logika pada fixed 60 FPS
  while (logicAccumulator >= FIXED_STEP) {
    updateAllGameLogic();
    logicAccumulator -= FIXED_STEP;
  }

  // Render Grafis
  ctx.save();
  if (screenShake.intensity > 0) {
    const rx = (Math.random() - 0.5) * screenShake.intensity;
    const ry = (Math.random() - 0.5) * screenShake.intensity;
    ctx.translate(rx, ry);
  }

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawBackground();
  drawPipes();
  bird.draw();
  drawParticles();
  drawFloatingTexts();
  drawUI();

  ctx.restore();

  requestAnimationFrame(gameLoop);
}

// Memulai Game Loop
requestAnimationFrame(gameLoop);
