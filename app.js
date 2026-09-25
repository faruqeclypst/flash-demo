/**
 * ==============================================================================
 * FLASH XXV PERSEVERANCE 2026 - SMA NEGERI MODAL BANGSA
 * Main JavaScript: Competitions Data, Modal Engine, Mini-Game, & 8-Bit Audio
 * ==============================================================================
 */

// 1. DATA RESMI 21 CABANG LOMBA FLASH XXV PERSEVERANCE
const COMPETITIONS = [
  // --- KATEGORI 01: SD / MI ---
  {
    name: 'Spelling Bee',
    code: 'SPELL-BEE',
    abbr: 'MSB',
    category: 'SD',
    pj: { name: 'Khansa Illona', role: 'PJ Spelling Bee SD', phone: '0812-6070-2062' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSc6Uke--OmJVW1_n9j8BB7M0zbNZWOk8dMwTQjgZMRdr_-BGQ/viewform',
    juknis: 'https://drive.google.com/file/d/14KBFNG2RPylwim95L4allGdTF0reSYG_/view?usp=drive_link'
  },
  {
    name: 'Ranking 1 SD',
    code: 'RANK-1',
    abbr: 'MBB',
    category: 'SD',
    pj: { name: 'Jihan Faradiba', role: 'PJ Ranking 1 SD', phone: '0853-2333-5244' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSf5ZJWJgSbMKzQKWvu9V3ZzX2U9AMqCxdcFB8oVy50H5bnxQA/viewform',
    juknis: 'https://drive.google.com/file/d/1XP3H7r6FbVz_F1ErEW82zQF7n96XdQPq/view?usp=drive_link'
  },

  // --- KATEGORI 02: SMP / MTs ---
  {
    name: 'Speech Contest',
    code: 'SPEECH',
    abbr: 'MSC',
    category: 'SMP',
    pj: { name: 'Teuku Muda Laksamana', role: 'PJ Speech', phone: '0813-7013-5347' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScUDFW1qlnV5syOGuzWhiYXYQZtES1QGih43zPIQkycon_BTQ/viewform',
    juknis: 'https://drive.google.com/file/d/1XuVey_OfiHUnnuOcrENClSWqL1rZdgq1/view?usp=drive_link'
  },
  {
    name: 'Story Telling',
    code: 'STORY',
    abbr: 'MST',
    category: 'SMP',
    pj: { name: 'Naily Azriya', role: 'PJ Story Telling', phone: '0822-1507-3132' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSd8qTs9Ophkkk444qCCiUd54zty7OO8bTq6-CCkIMc4rz0GbQ/viewform',
    juknis: 'https://drive.google.com/file/d/1CVZymQj64sZ8jpyv_zPnrencIJgGLRRJ/view?usp=drive_link'
  },
  {
    name: 'Baca Puisi',
    code: 'PUISI',
    abbr: 'MPC',
    category: 'SMP',
    pj: { name: 'Sarwa Mazida A.', role: 'PJ Puisi', phone: '0812-6282-3983' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScpJ4JNBREjj93yyL1BIyxl3d9kUn_DD60koUbJNDKIVX_m3Q/viewform',
    juknis: 'https://drive.google.com/file/d/1lekRXfjtBm3zerDsHHmjgfexgxxo7JAL/view?usp=drive_link'
  },
  {
    name: 'Vokal Solo SMP',
    code: 'SOLO',
    abbr: 'MVS',
    category: 'SMP',
    pj: { name: 'Raihanna Syahla', role: 'PJ Vokal Solo', phone: '0812-8534-8288' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSfrALjkPBt9JtKvEe9QHj2B7ECmysehvzXPwMsiD2Wkv1G7pw/viewform',
    juknis: 'https://drive.google.com/file/d/1LpSqQfcyLUm3FUIERi71qsRejuUuWUZ0/view?usp=drive_link'
  },
  {
    name: 'Musabaqah Tilawatil Quran',
    code: 'Tilawah',
    abbr: 'MTQ',
    category: 'SMP',
    pj: { name: 'Aghnia Altafunnisa', role: 'PJ MTQ', phone: '0821-3065-7939' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdT9CWhyhfkWgFPKexNiAmO7APM6Ln4b9dQQVFLtuNA9BhLlg/viewform',
    juknis: 'https://drive.google.com/file/d/1rm5bArgSYPx2HvZ7YnA2jBRh49-arJyg/view?usp=drive_link'
  },
  {
    name: 'Tahfidzul Quran',
    code: 'Tahfidz',
    abbr: 'MHQ',
    category: 'SMP',
    pj: { name: 'Naifa Fathin A.', role: 'PJ Tahfidz', phone: '0822-4617-5242' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdbidcvERN7uUBV8XRXHB3Wf5sJ2-V6EvyUF55p1TZB1JQq5w/viewform',
    juknis: 'https://drive.google.com/file/d/1eLfTmXYm47ooBoBqAP1AHS2mxYXTwdLF/view?usp=drive_link'
  },
  {
    name: 'Syarhil Quran',
    code: 'SYARHIL',
    abbr: 'MSQ',
    category: 'SMP',
    pj: { name: 'Rezkika Giza', role: 'PJ Syarhil Quran', phone: '0821-2990-8881' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSexCBFmDZ1cRkpENqQEenkU7gUf9_vJERHYN1EXhbCOKqgoOg/viewform',
    juknis: 'https://drive.google.com/file/d/1qSW9a6qWDBKALbZZJL1zVMYQ3IIckjcX/view?usp=drive_link'
  },
  {
    name: 'Mosa Counting Contest (MCC)',
    code: 'MCC',
    abbr: 'MCC SMP',
    category: 'SMP',
    pj: { name: 'M. Thaifur', role: 'PJ MCC', phone: '0852-5739-0708' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSePJcsWoy5ONbkGzD7H90yQqNqKG0etHVnAMLiYbjzkpkdTDw/viewform',
    juknis: 'https://drive.google.com/file/d/1zkkYPEuJDE2m5W8FelI7RXF_oVsJENU_/view?usp=drive_link'
  },
  {
    name: 'Cerdas Cermat A-MIPA-ING',
    code: 'CC SMP',
    abbr: 'MLCC SMP',
    category: 'SMP',
    pj: { name: 'Rafif Juhaidi', role: 'PJ Cerdas Cermat', phone: '0853-3704-7755' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSfL6UO1AjEIqEeug_b7qGGwtVUA1DYGjV6CW-J3RceJorduTg/viewform',
    juknis: 'https://drive.google.com/file/d/1YgHT99fk4UstmfDgkg9hJAMjDZQ9HB7u/view?usp=drive_link'
  },
  {
    name: 'Mosa Olympiad Competition',
    code: 'MOC',
    abbr: 'MOC',
    category: 'SMP',
    pj: { name: 'M. Sulthan Dzaky', role: 'PJ MOC', phone: '0853-6196-6582' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSfUYA5VmwvdcqyFjXlm1MCjBe0rX7fH7fH39alKGCGN8Z1E-A/viewform',
    juknis: 'https://drive.google.com/file/d/1H1fmtI7FyN38fL0Uit9mebFXRDTnU6FP/view?usp=drive_link'
  },

  // --- KATEGORI 03: SMA / MA / SMK ---
  {
    name: 'Mosa School Debating Championship',
    code: 'MSDC',
    abbr: 'MSDC',
    category: 'SMA',
    pj: { name: 'Ratu Najiba Rania', role: 'PJ MSDC', phone: '0812-6901-5626' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScqoEhdml7nvVdnEuz3DRXtSWG98Jsbu0R2ql0XKpKIYyFzJw/viewform',
    juknis: 'https://drive.google.com/file/d/16X8B9PlTWsenluHhPBETblMUPWbLxUJx/view?usp=drive_link'
  },
  {
    name: 'Mosa Counting Contest (SMA)',
    code: 'MCC-SMA',
    abbr: 'MCC SMA',
    category: 'SMA',
    pj: { name: 'M. Thaifur', role: 'PJ MCC', phone: '0852-5739-0708' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdOtTlSoBa2-R_jaTOkMpZsB3e3TKU4dV0m_WbQG31t9hlUdw/viewform',
    juknis: 'https://drive.google.com/file/d/1zkkYPEuJDE2m5W8FelI7RXF_oVsJENU_/view?usp=drive_link'
  },
  {
    name: 'Cerdas Cermat MIPA-ING (SMA)',
    code: 'CC SMA',
    abbr: 'MLCC SMA',
    category: 'SMA',
    pj: { name: 'Rafif Juhaidi', role: 'PJ Cerdas Cermat', phone: '0853-3704-7755' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSewnnB9QyBf699P2DZTmO1k4uEkUk9j4Da9Pr0ZB3v9HNF07g/viewform',
    juknis: 'https://drive.google.com/file/d/1YgHT99fk4UstmfDgkg9hJAMjDZQ9HB7u/view?usp=drive_link'
  },
  {
    name: 'Vokal Solo SMA',
    code: 'VOKSOL SMA',
    abbr: 'MVS SMA',
    category: 'SMA',
    pj: { name: 'Raihanna Syahla', role: 'PJ Vokal Solo', phone: '0812-8534-8288' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScA3mDED5br5gzI75oWeUZoc-_Gal2tJFGiaJbnOSA_k_tlsA/viewform',
    juknis: 'https://drive.google.com/file/d/1khMsLzTo2HzT_QVnkPFyHdhPL2-G52Hb/view?usp=drive_link'
  },
  {
    name: 'Tari Kreasi Nusantara',
    code: 'TARI KREASI',
    abbr: 'MDC',
    category: 'SMA',
    pj: { name: 'Fadila Khairani', role: 'PJ Tari Kreasi', phone: '0852-1645-9865' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdbMEAV_Zgn2DNz1fjI4rPqjS69l5BER4Ctx7AMQ1E-vsqC9Q/viewform',
    juknis: 'https://drive.google.com/file/d/1lxUxJ_Rig1XgXtjXqNHeZTRswL8qeMuj/view?usp=drive_link'
  },

  // --- KATEGORI 04: UMUM ---
  {
    name: 'Kompetisi Esai Nasional',
    code: 'ESAI',
    abbr: 'MEC',
    category: 'Umum',
    pj: { name: 'Fioni Zahira', role: 'PJ Esai', phone: '0821-8360-8485' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdyszA6B079n9ynnhe1IfC_Fp7kRcCo97g6YEHkw3gNWA39Vg/viewform',
    juknis: 'https://drive.google.com/file/d/1zr2VMe-dn2XWTy7gUaXfLTzVW3R1nU1R/view?usp=drive_link'
  },
  {
    name: 'Festival Band Akustik',
    code: 'BAND',
    abbr: 'MBC',
    category: 'Umum',
    pj: { name: 'Lia Nadila', role: 'PJ Band', phone: '0813-6157-4157' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScLgwI6myC4xPYzmhoMrLKy40ODM5n_pOkZFGOWsz_ejO2kEQ/viewform',
    juknis: 'https://drive.google.com/file/d/105QqCS8KVnHDZpD9-sB11_gi9EV57THm/view?usp=drive_link'
  },
  {
    name: 'Lomba Fotografi',
    code: 'FOTO',
    abbr: 'MPhC',
    category: 'Umum',
    pj: { name: 'Teuku Faris Arkan', role: 'PJ Fotografi', phone: '0812-6004-2087' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSfndtQGxlW7LdFRHzzGKTg2-9tzfkRpEhfEIcvKYaqRo5RMAg/viewform',
    juknis: 'https://drive.google.com/file/d/1Piidt827iFOjl6ZBDKaffAKG40giK4wh/view?usp=drive_link'
  },
  {
    name: 'Ranking 1 Umum',
    code: 'RANK-UMUM',
    abbr: 'MBBU',
    category: 'Umum',
    pj: { name: 'Jihan Faradiba', role: 'PJ Ranking Umum', phone: '0853-2333-5244' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSe2N2zdxaY6mI9Azw-uUU89_mBkHYPszbYY1dwj9WOv9z2qPw/viewform',
    juknis: 'https://drive.google.com/file/d/1SexBKO4Yzl3ri-sBz9Jnm-_pd2bJNw0i/view?usp=drive_link'
  },
  {
    name: 'Desain Poster Digital',
    code: 'POSTER',
    abbr: 'MPC',
    category: 'Umum',
    pj: { name: 'M. Raditya Al Farisi', role: 'PJ Desain Poster', phone: '0812-6591-4358' },
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSfBjH9B8K0JaZ41eIyhuBbbwSYkm5pgxd_nIg3x4SXvFFBDyg/viewform',
    juknis: 'https://drive.google.com/file/d/1hLDJMy0OxxM9Gr6oVIeSYFp3smbuax0d/view?usp=drive_link'
  }
];

// 2. 8-BIT AUDIO SYNTHESIZER (WEB AUDIO API)
class RetroAudioEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
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

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  playBeep(freq = 440, duration = 0.08, type = 'square') {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  playJump() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(750, now + 0.1);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playCoin() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(659.25, now); // E5
    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.08);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(987.77, now + 0.08); // B5
    gain2.gain.setValueAtTime(0.18, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.22);
  }

  playWarning() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.linearRampToValueAtTime(380, now + 0.14);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  playDodgeBonus() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [659.25, 880, 1174.66].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      gain.gain.setValueAtTime(0.12, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.1);
    });
  }

  playNgeselinAlert() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.setValueAtTime(380, now + 0.15);
    osc.frequency.setValueAtTime(520, now + 0.3);
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  playHit() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playStomp() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  playPowerup() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [440, 554.37, 659.25, 880].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(f, now + idx * 0.05);
      gain.gain.setValueAtTime(0.12, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.05 + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.08);
    });
  }

  playCheckpoint() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.08);
      gain.gain.setValueAtTime(0.16, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.15);
    });
  }

  playShieldPop() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playModeSwitch() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [330, 440, 550, 660, 880].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(f, now + idx * 0.05);
      gain.gain.setValueAtTime(0.14, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.05 + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.1);
    });
  }

  playHeart() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      gain.gain.setValueAtTime(0.18, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.1);
    });
  }

  playFallDeath() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.6);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  }

  playCrash() {
    if (!this.soundEnabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(20, now + 0.25);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  }
}
const retroAudio = new RetroAudioEngine();

// 3. COMPETITION GRID RENDERING & FILTERING
const compGrid = document.getElementById('competitionsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('competitionSearch');

let currentCategoryFilter = 'ALL';
let currentSearchQuery = '';

function renderCompetitions() {
  if (!compGrid) return;

  const filtered = COMPETITIONS.filter(item => {
    const matchCat = currentCategoryFilter === 'ALL' || item.category === currentCategoryFilter;
    const matchQuery = item.name.toLowerCase().includes(currentSearchQuery) ||
                       item.abbr.toLowerCase().includes(currentSearchQuery) ||
                       item.category.toLowerCase().includes(currentSearchQuery);
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    compGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: #1b2230; border: 3px dashed #334155; border-radius: 8px;">
        <p style="font-family: 'Press Start 2P'; font-size: 11px; color: #f9ca24;">LOMBA TIDAK DITEMUKAN</p>
        <p style="font-size: 13px; color: #94a3b8; margin-top: 8px;">Coba gunakan kata kunci pencarian yang lain.</p>
      </div>
    `;
    return;
  }

  compGrid.innerHTML = filtered.map(item => {
    return `
      <div class="comp-card" data-code="${item.code}">
        <div class="comp-card-top">
          <span class="comp-code-badge">${item.abbr}</span>
          <span class="comp-cat-tag cat-${item.category}">${item.category}</span>
        </div>

        <h3 class="comp-title">${item.name}</h3>

        <div class="comp-pj-preview">
          <span>PJ: <strong>${item.pj.name}</strong></span>
        </div>

        <button class="pixel-btn pixel-btn-green w-full open-comp-btn" data-code="${item.code}">
          <span>RINCIAN & DAFTAR</span>
        </button>
      </div>
    `;
  }).join('');

  // Event listener untuk tombol pada setiap kartu
  compGrid.querySelectorAll('.open-comp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      retroAudio.init();
      retroAudio.playCoin();
      openCompetitionModal(btn.dataset.code);
    });
  });

  compGrid.querySelectorAll('.comp-card').forEach(card => {
    card.addEventListener('click', () => {
      retroAudio.init();
      retroAudio.playCoin();
      openCompetitionModal(card.dataset.code);
    });
  });
}

// Handler Filter Tabs
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    retroAudio.init();
    retroAudio.playBeep(520, 0.05);

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategoryFilter = btn.dataset.category;
    renderCompetitions();
  });
});

// Handler Pencarian
searchInput?.addEventListener('input', (e) => {
  currentSearchQuery = e.target.value.toLowerCase().trim();
  renderCompetitions();
});

// 4. MODAL POPUP LOGIC
const modal = document.getElementById('competitionModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalAbbr = document.getElementById('modalAbbr');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPjName = document.getElementById('modalPjName');
const modalPjPhoneLink = document.getElementById('modalPjPhoneLink');
const modalFormBtn = document.getElementById('modalFormBtn');
const modalJuknisBtn = document.getElementById('modalJuknisBtn');

function openCompetitionModal(code) {
  const item = COMPETITIONS.find(c => c.code === code);
  if (!item || !modal) return;

  modalAbbr.textContent = item.abbr;
  modalCategory.textContent = `KATEGORI: ${item.category}`;
  modalCategory.className = `modal-category cat-${item.category}`;
  modalTitle.textContent = item.name;
  modalPjName.textContent = `${item.pj.name} (${item.pj.role})`;
  
  // Format nomor telepon untuk link WhatsApp
  const cleanPhone = item.pj.phone.replace(/[^0-9]/g, '');
  const waPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
  modalPjPhoneLink.textContent = item.pj.phone;
  modalPjPhoneLink.href = `https://wa.me/${waPhone}?text=Halo%20${encodeURIComponent(item.pj.name)},%20saya%20ingin%20bertanya%20mengenai%20lomba%20${encodeURIComponent(item.name)}%20FLASH%20XXV%20PERSEVERANCE.`;

  modalFormBtn.href = item.form;
  modalJuknisBtn.href = item.juknis;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCompetitionModal() {
  if (!modal) return;
  retroAudio.playBeep(320, 0.05);
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalCloseBtn?.addEventListener('click', closeCompetitionModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeCompetitionModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal?.classList.contains('active')) {
    closeCompetitionModal();
  }
});

// 5. NAVBAR MOBILE MENU & SOUND TOGGLE
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDropdown = document.getElementById('mobileDropdown');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');

mobileMenuBtn?.addEventListener('click', () => {
  retroAudio.init();
  retroAudio.playBeep(480, 0.05);
  mobileDropdown.classList.toggle('active');
});

document.querySelectorAll('.mob-item').forEach(link => {
  link.addEventListener('click', () => {
    mobileDropdown.classList.remove('active');
  });
});

soundToggleBtn?.addEventListener('click', () => {
  retroAudio.init();
  const enabled = retroAudio.toggleSound();
  soundIcon.textContent = enabled ? '🔊' : '🔇';
  if (enabled) retroAudio.playCoin();
});

// 6. EMBEDDED ARCADE MINI-GAME (MULTI-MODE, BIOMES, SKINS, POWER-UPS, LIVES & LEADERBOARD)
const canvas = document.getElementById('landingGameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const arcadeOverlay = document.getElementById('arcadeOverlay');
const spaceKeyCap = document.getElementById('spaceKeyCap');
const miniCurrentScore = document.getElementById('miniCurrentScore');
const miniHighScore = document.getElementById('miniHighScore');
const hudLives = document.getElementById('hudLives');
const hudModeBadge = document.getElementById('hudModeBadge');
const hudBiomeBadge = document.getElementById('hudBiomeBadge');
const leaderboardList = document.getElementById('leaderboardList');
const shareWaBtn = document.getElementById('shareWaBtn');
const skinSelector = document.getElementById('skinSelector');

if (ctx) {
  ctx.imageSmoothingEnabled = false;
}

const MINI_WIDTH = 288;
const MINI_HEIGHT = 480;
const MINI_GROUND_Y = 410;

// Game States (Includes comic FALLING_DEATH animation)
const MINI_STATES = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  FALLING_DEATH: 'FALLING_DEATH',
  GAMEOVER: 'GAMEOVER'
};
let miniState = MINI_STATES.IDLE;

// Score & High Score
let miniScore = 0;
let savedMiniHighScore = parseInt(localStorage.getItem('flash_flappy_high_score')) || 0;
if (miniHighScore) miniHighScore.textContent = savedMiniHighScore;

// Collectible Lives System (Starts at 3, can collect up to 5)
const DEFAULT_LIVES = 3;
const MAX_LIVES = 5;
let playerLives = DEFAULT_LIVES;
let invulnerableTimer = 0; // Invulnerability frames on damage
let lastHeartSpawnScore = 0; // For guaranteed heart spawns
let stompStreak = 0; // For stomp combo bonus heart

// Checkpoint System (Every 20 points)
let lastCheckpointScore = 0;

// Skins (classic, cowboy, student, cyber)
let currentSkin = localStorage.getItem('flash_selected_skin') || 'classic';

// Rank Titles
function getRankTitle(score) {
  if (score < 10) return 'Peserta Nyasar';
  if (score < 20) return 'Pejuang Juknis';
  if (score < 35) return 'Penjelajah Perseverance';
  return 'Sang Legenda FLASH';
}

// Top 5 Local Leaderboard
const DEFAULT_LEADERBOARD = [
  { name: 'NSA', score: 32, title: 'Penjelajah Perseverance' },
  { name: 'MOS', score: 24, title: 'Pejuang Juknis' },
  { name: 'FLA', score: 18, title: 'Pejuang Juknis' },
  { name: 'ACE', score: 12, title: 'Pejuang Juknis' },
  { name: 'SMN', score: 7, title: 'Peserta Nyasar' }
];

function getLeaderboard() {
  try {
    const raw = localStorage.getItem('flash_arcade_top5');
    if (!raw) return DEFAULT_LEADERBOARD;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_LEADERBOARD;
  } catch (e) {
    return DEFAULT_LEADERBOARD;
  }
}

function saveToLeaderboard(name, score) {
  const cleanName = (name || 'USR').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3) || 'USR';
  const list = getLeaderboard();
  list.push({
    name: cleanName,
    score: score,
    title: getRankTitle(score)
  });
  list.sort((a, b) => b.score - a.score);
  const top5 = list.slice(0, 5);
  localStorage.setItem('flash_arcade_top5', JSON.stringify(top5));
  renderLeaderboard();
}

function renderLeaderboard() {
  if (!leaderboardList) return;
  const list = getLeaderboard();
  const medals = ['🥇', '🥈', '🥉', '4.', '5.'];
  leaderboardList.innerHTML = list.map((item, idx) => `
    <div class="lb-row rank-${idx + 1}">
      <div class="lb-left">
        <span class="lb-rank">${medals[idx] || (idx + 1) + '.'}</span>
        <div class="lb-player">
          <span class="lb-name">${item.name}</span>
          <span class="lb-title">${item.title}</span>
        </div>
      </div>
      <div class="lb-score">${item.score} PTS</div>
    </div>
  `).join('');
}
renderLeaderboard();

// WhatsApp Share Handler
shareWaBtn?.addEventListener('click', () => {
  const title = getRankTitle(miniScore);
  const message = encodeURIComponent(
    `🔥 Saya mencetak skor ${miniScore} (${title}) di Game Arcade FLASH XXV Perseverance SMAN Modal Bangsa! 🎮\n` +
    `Bisa kalahkan rekor saya? Mainkan sekarang di:\n` +
    `https://flash.perseverance.my.id/`
  );
  window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
});

// Skin Selector Event Handlers
function initSkinSelector() {
  if (!skinSelector) return;
  const buttons = skinSelector.querySelectorAll('.skin-btn');
  buttons.forEach(btn => {
    if (btn.dataset.skin === currentSkin) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      retroAudio.init();
      retroAudio.playBeep(520, 0.05);
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSkin = btn.dataset.skin;
      localStorage.setItem('flash_selected_skin', currentSkin);
      addMiniFloatingText(miniBird.x, miniBird.y - 12, `SKIN: ${currentSkin.toUpperCase()}`, '#f9ca24');
    });
  });
}
initSkinSelector();

// Update HUD Lives Icons
function updateLivesDisplay() {
  if (!hudLives) return;
  let html = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    if (i < playerLives) {
      html += '<span class="heart-icon">❤️</span>';
    } else {
      html += '<span class="heart-icon heart-dead">🖤</span>';
    }
  }
  hudLives.innerHTML = html;
}
updateLivesDisplay();

// Modes & Biomes
const GAME_MODES = {
  FLAPPY: 'FLAPPY',   // 0-14: Classic Flight
  DARAT: 'DARAT',     // 15-24: Runner & Jumping / Stomping
  RAYMAN: 'RAYMAN'    // 25-34: Floaty Glide / Helicopter
};

const BIOMES = {
  CITY: 'CITY',           // 0-14
  MOUNTAIN: 'MOUNTAIN',   // 15-24
  LAVA: 'LAVA'            // 25-34
};

function getModeAndBiome(score) {
  const cycle = score % 35;
  if (cycle < 15) {
    return { mode: GAME_MODES.FLAPPY, biome: BIOMES.CITY };
  } else if (cycle < 25) {
    return { mode: GAME_MODES.DARAT, biome: BIOMES.MOUNTAIN };
  } else {
    return { mode: GAME_MODES.RAYMAN, biome: BIOMES.LAVA };
  }
}

let currentMode = GAME_MODES.FLAPPY;
let currentBiome = BIOMES.CITY;

function updateHUDModeAndBiome() {
  const mb = getModeAndBiome(miniScore);
  if (mb.mode !== currentMode) {
    currentMode = mb.mode;
    retroAudio.playModeSwitch();
    miniShake.intensity = 8;
    if (currentMode === GAME_MODES.DARAT) {
      showModeBanner('🏃 MODE DARAT AKTIF!', '#22d3ee');
      miniBird.y = MINI_GROUND_Y - miniBird.h;
      miniBird.vy = 0;
    } else if (currentMode === GAME_MODES.RAYMAN) {
      showModeBanner('🚁 MODE RAYMAN AKTIF!', '#f43f5e');
    } else {
      showModeBanner('🕊️ MODE FLAPPY AKTIF!', '#fbbf24');
    }
  }
  currentBiome = mb.biome;

  if (hudModeBadge) {
    if (currentMode === GAME_MODES.DARAT) {
      hudModeBadge.textContent = '🏃 DARAT';
      hudModeBadge.style.background = '#0284c7';
    } else if (currentMode === GAME_MODES.RAYMAN) {
      hudModeBadge.textContent = '🚁 RAYMAN';
      hudModeBadge.style.background = '#dc2626';
    } else {
      hudModeBadge.textContent = '🕊️ FLAPPY';
      hudModeBadge.style.background = '#7c3aed';
    }
  }

  if (hudBiomeBadge) {
    if (currentBiome === BIOMES.MOUNTAIN) {
      hudBiomeBadge.textContent = '🏔️ GUNUNG';
      hudBiomeBadge.style.background = '#15803d';
    } else if (currentBiome === BIOMES.LAVA) {
      hudBiomeBadge.textContent = '🌋 LAVA';
      hudBiomeBadge.style.background = '#b91c1c';
    } else {
      hudBiomeBadge.textContent = '🏙️ KOTA';
      hudBiomeBadge.style.background = '#0284c7';
    }
  }
}

// Mode / Checkpoint Announcement Banner
let bannerText = '';
let bannerColor = '#f9ca24';
let bannerTimer = 0;

function showModeBanner(text, color = '#f9ca24') {
  bannerText = text;
  bannerColor = color;
  bannerTimer = 90;
}

// Visual Effects: Screen Shake & Floating Texts
let miniShake = { intensity: 0, decay: 0.9 };
let miniFloatingTexts = [];

function addMiniFloatingText(x, y, text, color = '#f9ca24') {
  miniFloatingTexts.push({ x, y, text, color, life: 35 });
}

// Power-Ups System (Includes Collectible Hearts)
const POWERUP_TYPES = {
  HEART:  { type: 'HEART',  emoji: '❤️', color: '#ef4444', label: '+1 NYAWA!' },
  SHIELD: { type: 'SHIELD', emoji: '🛡️', color: '#38bdf8', label: 'SHIELD AKTIF!' },
  SLOWMO: { type: 'SLOWMO', emoji: '⏳', color: '#fbbf24', label: 'SLOW-MO 4s!' },
  MINI:   { type: 'MINI',   emoji: '💨', color: '#a855f7', label: 'MINI BIRD!' },
  COIN:   { type: 'COIN',   emoji: '🪙', color: '#eab308', label: '+3 KOIN!' }
};

let activeShield = false;
let slowMoTimer = 0;
let miniSizeTimer = 0;
let powerUps = [];
let powerUpTimer = 0;

class PowerUpItem {
  constructor(y, typeObj) {
    this.x = MINI_WIDTH + 20;
    this.baseY = y;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.type = typeObj.type;
    this.emoji = typeObj.emoji;
    this.color = typeObj.color;
    this.label = typeObj.label;
    this.time = Math.random() * 10;
  }

  update(speed) {
    this.x -= speed;
    this.time += 0.08;
    this.y = this.baseY + Math.sin(this.time) * 12;
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    // Glowing aura
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.35 + Math.sin(this.time * 2) * 0.2;
    ctx.beginPath();
    ctx.arc(this.x + this.w / 2, this.y + this.h / 2, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Emoji icon
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.emoji, this.x + this.w / 2, this.y + this.h / 2);
    ctx.restore();
  }
}

// Monsters & Obstacles
// 1. Rival Bird (City Biome)
class MiniRivalBird {
  constructor(y) {
    this.x = MINI_WIDTH + 30;
    this.baseY = y;
    this.y = y;
    this.w = 24;
    this.h = 18;
    this.speed = 2.8;
    this.time = Math.random() * 10;
    this.frame = 0;
    this.animTimer = 0;
    this.passed = false;
    this.taunt = Math.random() > 0.5 ? 'AWAS!' : 'MINGGIR!';
    this.tauntTimer = 45;
  }

  update(worldSpeed) {
    this.x -= (this.speed + worldSpeed * 0.4);
    this.time += 0.08;
    this.y = this.baseY + Math.sin(this.time) * 26;
    if (this.y > MINI_GROUND_Y - this.h - 10) this.y = MINI_GROUND_Y - this.h - 10;

    this.animTimer++;
    if (this.animTimer % 5 === 0) {
      this.frame = (this.frame + 1) % 3;
    }

    if (!this.passed && this.x + this.w < miniBird.x) {
      this.passed = true;
      miniScore += 1;
      retroAudio.playDodgeBonus();
      miniShake.intensity = 4;
      addMiniFloatingText(miniBird.x, miniBird.y - 12, 'DODGE! +1', '#22d3ee');
      handleScoreIncrease();
    }
  }

  draw() {
    if (!ctx) return;
    if (this.tauntTimer > 0 && this.x < MINI_WIDTH - 15) {
      this.tauntTimer--;
      ctx.save();
      ctx.font = '7px "Press Start 2P", monospace';
      const tw = ctx.measureText(this.taunt).width;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(this.x - tw / 2, this.y - 16, tw + 6, 12);
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.strokeRect(this.x - tw / 2, this.y - 16, tw + 6, 12);
      ctx.fillStyle = '#e55039';
      ctx.fillText(this.taunt, this.x - tw / 2 + 3, this.y - 7);
      ctx.restore();
    }

    ctx.save();
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    const px = -this.w / 2;
    const py = -this.h / 2;

    ctx.fillStyle = '#e55039';
    ctx.fillRect(px + 4, py + 2, 16, 14);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 4, py, 14, 2);
    ctx.fillRect(px + 4, py + 16, 14, 2);
    ctx.fillRect(px, py + 4, 4, 12);
    ctx.fillRect(px + 18, py + 2, 4, 14);
    ctx.fillRect(px + 5, py + 4, 8, 2);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 5, py + 6, 6, 4);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 5, py + 7, 3, 3);

    ctx.fillStyle = '#f39c12';
    ctx.fillRect(px - 5, py + 7, 6, 5);

    ctx.fillStyle = '#2c3e50';
    if (this.frame === 0) ctx.fillRect(px + 10, py + 6, 6, 5);
    else if (this.frame === 1) ctx.fillRect(px + 10, py + 3, 6, 6);
    else ctx.fillRect(px + 10, py + 8, 6, 5);

    ctx.restore();
  }
}

// 2. Ground Monster (Zombie Tsunami style - Mountain Biome)
class GroundMonster {
  constructor() {
    this.w = 26;
    this.h = 24;
    this.x = MINI_WIDTH + 20;
    this.y = MINI_GROUND_Y - this.h;
    this.speed = 2.4;
    this.animTick = 0;
    this.isDead = false;
    this.deadTimer = 0;
  }

  update(worldSpeed) {
    if (this.isDead) {
      this.deadTimer++;
      return;
    }
    this.x -= (this.speed + worldSpeed * 0.4);
    this.animTick++;
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    if (this.isDead) {
      // Squished flat sprite
      ctx.fillStyle = '#16a34a';
      ctx.fillRect(this.x, MINI_GROUND_Y - 6, this.w + 4, 6);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(this.x + 8, MINI_GROUND_Y - 4, 4, 2);
      ctx.restore();
      return;
    }

    const bob = Math.sin(this.animTick * 0.25) * 3;
    const px = this.x;
    const py = this.y + bob;

    // Green Zombie Body
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(px + 3, py + 3, 20, 18);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 3, py + 1, 20, 2);
    ctx.fillRect(px + 3, py + 21, 20, 2);
    ctx.fillRect(px + 1, py + 3, 2, 18);
    ctx.fillRect(px + 23, py + 3, 2, 18);

    // Glowing Single Cyclops Eye
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 6, py + 6, 8, 8);
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(px + 8, py + 8, 4, 4);

    // Zombie Teeth
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(px + 6, py + 16, 3, 3);
    ctx.fillRect(px + 12, py + 16, 3, 3);

    // Running legs
    ctx.fillStyle = '#15803d';
    if (Math.sin(this.animTick * 0.3) > 0) {
      ctx.fillRect(px + 5, MINI_GROUND_Y - 4, 4, 4);
      ctx.fillRect(px + 16, MINI_GROUND_Y - 7, 4, 4);
    } else {
      ctx.fillRect(px + 5, MINI_GROUND_Y - 7, 4, 4);
      ctx.fillRect(px + 16, MINI_GROUND_Y - 4, 4, 4);
    }

    ctx.restore();
  }
}

// 3. Ground Boulder / Spike (Mountain Biome)
class GroundObstacle {
  constructor() {
    this.w = 22;
    this.h = 24;
    this.x = MINI_WIDTH + 20;
    this.y = MINI_GROUND_Y - this.h;
    this.passed = false;
  }

  update(worldSpeed) {
    this.x -= worldSpeed;
    if (!this.passed && this.x + this.w < miniBird.x) {
      this.passed = true;
      miniScore++;
      retroAudio.playCoin();
      handleScoreIncrease();
    }
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    // Jagged Mountain Rock
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(this.x + 3, this.y + this.h);
    ctx.lineTo(this.x + this.w / 2, this.y);
    ctx.lineTo(this.x + this.w - 2, this.y + this.h);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Rock highlight
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(this.x + 7, this.y + 7, 4, 6);
    ctx.restore();
  }
}

// 4. Flying Fire-Bat (Lava Biome)
class FireBat {
  constructor(y) {
    this.w = 24;
    this.h = 16;
    this.x = MINI_WIDTH + 20;
    this.baseY = y;
    this.y = y;
    this.speed = 2.7;
    this.time = Math.random() * 10;
    this.passed = false;
  }

  update(worldSpeed) {
    this.x -= (this.speed + worldSpeed * 0.3);
    this.time += 0.1;
    this.y = this.baseY + Math.sin(this.time) * 35;
    if (this.y > MINI_GROUND_Y - this.h - 10) this.y = MINI_GROUND_Y - this.h - 10;
    if (this.y < 20) this.y = 20;

    if (!this.passed && this.x + this.w < miniBird.x) {
      this.passed = true;
      miniScore++;
      retroAudio.playCoin();
      handleScoreIncrease();
    }
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    const px = -this.w / 2;
    const py = -this.h / 2;

    // Body
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(px + 6, py + 3, 12, 10);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 6, py + 1, 12, 2);
    ctx.fillRect(px + 6, py + 13, 12, 2);

    // Glowing Yellow Eyes
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(px + 8, py + 5, 3, 3);
    ctx.fillRect(px + 13, py + 5, 3, 3);

    // Fire Wings (Animated flap)
    const flap = Math.sin(this.time * 2);
    ctx.fillStyle = '#f97316';
    if (flap > 0) {
      ctx.fillRect(px, py, 6, 7);
      ctx.fillRect(px + 18, py, 6, 7);
    } else {
      ctx.fillRect(px, py + 6, 6, 7);
      ctx.fillRect(px + 18, py + 6, 6, 7);
    }
    ctx.restore();
  }
}

// 5. Lava Stalactites (Ceiling & Floor in Lava Biome)
class LavaStalactite {
  constructor() {
    this.w = 40;
    this.x = MINI_WIDTH + 15;
    const gap = 110;
    this.topHeight = 50 + Math.random() * 90;
    this.bottomY = this.topHeight + gap;
    this.bottomHeight = MINI_GROUND_Y - this.bottomY;
    this.passed = false;
  }

  update(worldSpeed) {
    this.x -= worldSpeed;
    if (!this.passed && this.x + this.w < miniBird.x) {
      this.passed = true;
      miniScore++;
      retroAudio.playCoin();
      handleScoreIncrease();
    }
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    // Top stalactite hanging from ceiling
    ctx.fillStyle = '#450a0a';
    ctx.beginPath();
    ctx.moveTo(this.x, 0);
    ctx.lineTo(this.x + this.w, 0);
    ctx.lineTo(this.x + this.w / 2, this.topHeight);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Lava dripping tip
    ctx.fillStyle = '#ff4757';
    ctx.fillRect(this.x + this.w / 2 - 2, this.topHeight - 6, 4, 8);

    // Bottom stalagmite rising from lava
    ctx.fillStyle = '#450a0a';
    ctx.beginPath();
    ctx.moveTo(this.x, MINI_GROUND_Y);
    ctx.lineTo(this.x + this.w, MINI_GROUND_Y);
    ctx.lineTo(this.x + this.w / 2, this.bottomY);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#ff4757';
    ctx.fillRect(this.x + this.w / 2 - 2, this.bottomY, 4, 8);

    ctx.restore();
  }
}

// Active Obstacle Arrays
let miniPipes = [];
let miniRivalBirds = [];
let groundMonsters = [];
let groundObstacles = [];
let fireBats = [];
let lavaStalactites = [];
let obstacleSpawnTimer = 0;

// Mini Bird Object
const miniBird = {
  x: 55,
  y: 200,
  baseW: 24,
  baseH: 18,
  w: 24,
  h: 18,
  vy: 0,
  rotation: 0,
  frame: 0,
  animTick: 0,
  doubleJumpAvailable: true,
  raymanGlideTicks: 0,

  reset(startFromCheckpoint = false) {
    this.x = 55;
    this.w = this.baseW;
    this.h = this.baseH;
    this.vy = 0;
    this.rotation = 0;
    this.frame = 0;
    this.doubleJumpAvailable = true;
    this.raymanGlideTicks = 0;

    if (startFromCheckpoint && lastCheckpointScore > 0) {
      miniScore = lastCheckpointScore;
    } else {
      miniScore = 0;
      lastCheckpointScore = 0;
    }
    playerLives = MAX_LIVES;
    updateLivesDisplay();
    invulnerableTimer = 60; // 1s grace period on start

    activeShield = false;
    slowMoTimer = 0;
    miniSizeTimer = 0;

    const mb = getModeAndBiome(miniScore);
    currentMode = mb.mode;
    currentBiome = mb.biome;
    updateHUDModeAndBiome();

    if (currentMode === GAME_MODES.DARAT) {
      this.y = MINI_GROUND_Y - this.h;
    } else {
      this.y = 200;
    }
  },

  jump() {
    if (currentMode === GAME_MODES.FLAPPY) {
      this.vy = -5.4;
      retroAudio.playJump();
    } else if (currentMode === GAME_MODES.DARAT) {
      const onGround = (this.y >= MINI_GROUND_Y - this.h - 2);
      if (onGround) {
        this.vy = -6.6;
        this.doubleJumpAvailable = true;
        retroAudio.playJump();
      } else if (this.doubleJumpAvailable) {
        this.vy = -5.8;
        this.doubleJumpAvailable = false;
        retroAudio.playJump();
        addMiniFloatingText(this.x, this.y - 8, 'DOUBLE JUMP!', '#38bdf8');
      }
    } else if (currentMode === GAME_MODES.RAYMAN) {
      // Helicopter gliding boost
      this.vy = -2.8;
      this.raymanGlideTicks = 25;
      retroAudio.playBeep(640, 0.06);
    }
  },

  update() {
    // Mini Size Power-up
    if (miniSizeTimer > 0) {
      miniSizeTimer--;
      this.w = Math.floor(this.baseW * 0.65);
      this.h = Math.floor(this.baseH * 0.65);
    } else {
      this.w = this.baseW;
      this.h = this.baseH;
    }

    if (invulnerableTimer > 0) {
      invulnerableTimer--;
    }

    if (slowMoTimer > 0) {
      slowMoTimer--;
    }

    if (miniState === MINI_STATES.PLAYING) {
      if (currentMode === GAME_MODES.FLAPPY) {
        this.vy += 0.30;
        this.y += this.vy;
        if (this.vy < 0) {
          this.rotation = Math.max(-0.4, (this.vy / 7) * 0.4);
        } else {
          this.rotation = Math.min(Math.PI / 2.2, (this.vy / 9) * (Math.PI / 2.2));
        }
      } else if (currentMode === GAME_MODES.DARAT) {
        this.vy += 0.38;
        this.y += this.vy;
        if (this.y >= MINI_GROUND_Y - this.h) {
          this.y = MINI_GROUND_Y - this.h;
          this.vy = 0;
          this.doubleJumpAvailable = true;
        }
        this.rotation = 0;
      } else if (currentMode === GAME_MODES.RAYMAN) {
        // Low floaty gravity
        this.vy += 0.14;
        if (this.raymanGlideTicks > 0) {
          this.raymanGlideTicks--;
          if (this.vy > 0.4) this.vy = 0.4;
        }
        this.y += this.vy;
        this.rotation = Math.sin(Date.now() / 200) * 0.12;
      }
    } else {
      this.y = 200 + Math.sin(Date.now() / 250) * 6;
      this.rotation = 0;
    }

    this.animTick++;
    if (this.animTick % 5 === 0) {
      this.frame = (this.frame + 1) % 3;
    }
  },

  draw() {
    if (!ctx) return;

    // Invulnerability flashing effect (blinks when damaged)
    if (invulnerableTimer > 0 && Math.floor(invulnerableTimer / 4) % 2 === 0) {
      return;
    }

    ctx.save();
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    ctx.rotate(this.rotation);

    const px = -this.w / 2;
    const py = -this.h / 2;
    const scale = this.w / this.baseW;

    // SHIELD BUBBLE EFFECT
    if (activeShield) {
      ctx.save();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.beginPath();
      ctx.arc(0, 0, this.w * 0.9 + Math.sin(Date.now() / 150) * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // RAYMAN HELICOPTER PROPELLER
    if (currentMode === GAME_MODES.RAYMAN && (this.raymanGlideTicks > 0 || this.vy < 0)) {
      ctx.save();
      ctx.fillStyle = '#f59e0b';
      const propOffset = (Math.floor(Date.now() / 40) % 2 === 0) ? -10 : 10;
      ctx.fillRect(px + 4, py - 6 * scale, 16 * scale, 2 * scale);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(px + 4 + propOffset * scale * 0.5, py - 8 * scale, 6 * scale, 3 * scale);
      ctx.restore();
    }

    // BASE BIRD BODY (Adapted to Skin)
    if (currentSkin === 'cyber') {
      // Cyberpunk Gold / Chrome Body
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(px + 4 * scale, py + 2 * scale, 16 * scale, 14 * scale);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(px + 4 * scale, py, 14 * scale, 2 * scale);
      ctx.fillRect(px + 4 * scale, py + 16 * scale, 14 * scale, 2 * scale);
      ctx.fillRect(px, py + 6 * scale, 2 * scale, 8 * scale);
      ctx.fillRect(px + 18 * scale, py + 2 * scale, 2 * scale, 14 * scale);

      // Glowing Cyan Cyber Visor
      ctx.fillStyle = '#00f2fe';
      ctx.fillRect(px + 10 * scale, py + 4 * scale, 10 * scale, 4 * scale);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px + 13 * scale, py + 5 * scale, 3 * scale, 2 * scale);

      // Chrome Wing
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(px + 4 * scale, py + 7 * scale, 7 * scale, 5 * scale);
    } else {
      // Classic Yellow Chick Body
      ctx.fillStyle = '#f6b93b';
      ctx.fillRect(px + 4 * scale, py + 2 * scale, 16 * scale, 14 * scale);

      // Black Outline
      ctx.fillStyle = '#000000';
      ctx.fillRect(px + 4 * scale, py, 14 * scale, 2 * scale);
      ctx.fillRect(px + 4 * scale, py + 16 * scale, 14 * scale, 2 * scale);
      ctx.fillRect(px, py + 6 * scale, 2 * scale, 8 * scale);
      ctx.fillRect(px + 18 * scale, py + 2 * scale, 2 * scale, 14 * scale);

      // White Belly
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px + 4 * scale, py + 11 * scale, 8 * scale, 4 * scale);

      // Big Eye
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(px + 12 * scale, py + 2 * scale, 6 * scale, 6 * scale);
      ctx.fillStyle = '#000000';
      ctx.fillRect(px + 15 * scale, py + 4 * scale, 3 * scale, 4 * scale);

      // Orange Beak
      ctx.fillStyle = '#e55039';
      ctx.fillRect(px + 18 * scale, py + 7 * scale, 6 * scale, 6 * scale);

      // White Flapping Wing
      ctx.fillStyle = '#ffffff';
      if (this.frame === 0) {
        ctx.fillRect(px + 4 * scale, py + 7 * scale, 7 * scale, 5 * scale);
      } else if (this.frame === 1) {
        ctx.fillRect(px + 4 * scale, py + 4 * scale, 7 * scale, 6 * scale);
      } else {
        ctx.fillRect(px + 4 * scale, py + 9 * scale, 7 * scale, 5 * scale);
      }
    }

    // ACCESSORIES PER SKIN
    if (currentSkin === 'cowboy') {
      // Brown Stetson Cowboy Hat
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(px + 6 * scale, py - 6 * scale, 12 * scale, 7 * scale);
      ctx.fillStyle = '#713f12';
      ctx.fillRect(px, py - 1 * scale, 22 * scale, 3 * scale);
      ctx.fillStyle = '#f59e0b'; // Gold buckle
      ctx.fillRect(px + 10 * scale, py - 3 * scale, 4 * scale, 2 * scale);

      // Red Bandana
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(px + 10 * scale, py + 11 * scale, 7 * scale, 4 * scale);
    } else if (currentSkin === 'student') {
      // MOSA Student Navy Peci / Cap
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(px + 6 * scale, py - 5 * scale, 13 * scale, 6 * scale);
      ctx.fillStyle = '#eab308'; // Gold badge
      ctx.fillRect(px + 11 * scale, py - 3 * scale, 3 * scale, 3 * scale);

      // MOSA Red Tie
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(px + 14 * scale, py + 12 * scale, 3 * scale, 7 * scale);
    }

    ctx.restore();
  }
};

// Handle Score, Checkpoints, & Guaranteed Heart Spawns
function handleScoreIncrease() {
  if (miniCurrentScore) miniCurrentScore.textContent = miniScore;

  if (miniScore > savedMiniHighScore) {
    savedMiniHighScore = miniScore;
    localStorage.setItem('flash_flappy_high_score', savedMiniHighScore);
    if (miniHighScore) miniHighScore.textContent = savedMiniHighScore;
  }

  // Guaranteed Heart Drop every 10 points!
  if (miniScore > 0 && miniScore % 10 === 0 && miniScore !== lastHeartSpawnScore) {
    lastHeartSpawnScore = miniScore;
    const spawnY = 80 + Math.random() * (MINI_GROUND_Y - 170);
    powerUps.push(new PowerUpItem(spawnY, POWERUP_TYPES.HEART));
    addMiniFloatingText(MINI_WIDTH - 50, spawnY, '❤️ EXTRA LIFE!', '#ef4444');
  }

  // Checkpoint Every 20 points + 1 Life bonus!
  if (miniScore > 0 && miniScore % 20 === 0 && miniScore !== lastCheckpointScore) {
    lastCheckpointScore = miniScore;
    if (playerLives < MAX_LIVES) {
      playerLives++;
      updateLivesDisplay();
    }
    retroAudio.playCheckpoint();
    miniShake.intensity = 8;
    showModeBanner(`🚩 CHECKPOINT ${miniScore}! (+1 NYAWA ❤️)`, '#10b981');
    addMiniFloatingText(miniBird.x, miniBird.y - 18, 'CHECKPOINT +1 NYAWA!', '#10b981');
  }

  updateHUDModeAndBiome();
}

// Spawner Logic for Mode-Specific Obstacles
function updateObstacles() {
  if (miniState !== MINI_STATES.PLAYING) return;

  const worldSpeed = slowMoTimer > 0 ? 0.9 : 1.8;

  // Power-Ups Spawner (Appears in all modes)
  powerUpTimer++;
  if (powerUpTimer >= 220) {
    const pKeys = Object.keys(POWERUP_TYPES);
    const chosenType = POWERUP_TYPES[pKeys[Math.floor(Math.random() * pKeys.length)]];
    const spawnY = 70 + Math.random() * (MINI_GROUND_Y - 140);
    powerUps.push(new PowerUpItem(spawnY, chosenType));
    powerUpTimer = 0;
  }

  // Update & Collect Power-Ups
  for (let i = powerUps.length - 1; i >= 0; i--) {
    const pu = powerUps[i];
    pu.update(worldSpeed);

    // Collision with miniBird
    if (
      miniBird.x + miniBird.w > pu.x &&
      miniBird.x < pu.x + pu.w &&
      miniBird.y + miniBird.h > pu.y &&
      miniBird.y < pu.y + pu.h
    ) {
      retroAudio.playPowerup();
      addMiniFloatingText(miniBird.x, miniBird.y - 14, pu.label, pu.color);
      if (pu.type === 'HEART') {
        if (playerLives < MAX_LIVES) {
          playerLives++;
          updateLivesDisplay();
        }
        retroAudio.playHeart();
        addMiniFloatingText(miniBird.x, miniBird.y - 14, `❤️ +1 NYAWA! [${playerLives}]`, '#ef4444');
      } else if (pu.type === 'SHIELD') {
        activeShield = true;
      } else if (pu.type === 'SLOWMO') {
        slowMoTimer = 240; // 4 seconds slow-mo
      } else if (pu.type === 'MINI') {
        miniSizeTimer = 300; // 5 seconds mini bird
      } else if (pu.type === 'COIN') {
        miniScore += 3;
        handleScoreIncrease();
      }
      powerUps.splice(i, 1);
      continue;
    }

    if (pu.x + pu.w < -30) {
      powerUps.splice(i, 1);
    }
  }

  // Obstacle Spawners by Mode
  obstacleSpawnTimer++;

  if (currentMode === GAME_MODES.FLAPPY) {
    // Mode 1: Classic Green Pipes
    if (obstacleSpawnTimer >= 100) {
      const minTop = 40;
      const maxTop = MINI_GROUND_Y - 96 - 50;
      const topHeight = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
      const bottomY = topHeight + 96;
      const bottomHeight = MINI_GROUND_Y - bottomY;

      let isTilted = false;
      let tiltAngle = 0;
      let isOscillating = false;
      let oscSpeed = 0;
      let oscDir = 1;

      if (miniScore >= 8) {
        if (Math.random() < 0.4) {
          isTilted = true;
          tiltAngle = (Math.random() > 0.5 ? 1 : -1) * (0.15 + Math.random() * 0.08);
        } else if (Math.random() < 0.7) {
          isOscillating = true;
          oscSpeed = 0.9 + Math.random() * 0.7;
          oscDir = Math.random() > 0.5 ? 1 : -1;
        }
      }

      miniPipes.push({
        x: MINI_WIDTH + 10,
        topHeight,
        bottomY,
        bottomHeight,
        width: 46,
        passed: false,
        isTilted,
        tiltAngle,
        isOscillating,
        oscSpeed,
        oscDir,
        minY: Math.max(30, topHeight - 35),
        maxY: Math.min(MINI_GROUND_Y - 96 - 25, topHeight + 35)
      });
      obstacleSpawnTimer = 0;
    }

    // Occasional Rival Birds
    if (miniScore >= 8 && Math.random() < 0.008 && miniRivalBirds.length === 0) {
      const ry = 60 + Math.random() * (MINI_GROUND_Y - 140);
      miniRivalBirds.push(new MiniRivalBird(ry));
      retroAudio.playWarning();
    }
  } else if (currentMode === GAME_MODES.DARAT) {
    // Mode 2: Zombie Tsunami style Ground Runner
    if (obstacleSpawnTimer >= 80) {
      if (Math.random() < 0.6) {
        groundMonsters.push(new GroundMonster());
      } else {
        groundObstacles.push(new GroundObstacle());
      }
      obstacleSpawnTimer = 0;
    }
  } else if (currentMode === GAME_MODES.RAYMAN) {
    // Mode 3: Lava Cave Stalactites & Fire Bats
    if (obstacleSpawnTimer >= 110) {
      if (Math.random() < 0.65) {
        lavaStalactites.push(new LavaStalactite());
      } else {
        const fy = 60 + Math.random() * (MINI_GROUND_Y - 140);
        fireBats.push(new FireBat(fy));
      }
      obstacleSpawnTimer = 0;
    }
  }

  // Update Mode 1 Pipes
  for (let i = miniPipes.length - 1; i >= 0; i--) {
    const p = miniPipes[i];
    p.x -= worldSpeed;

    if (p.isOscillating) {
      p.topHeight += p.oscSpeed * p.oscDir;
      if (p.topHeight > p.maxY) { p.topHeight = p.maxY; p.oscDir = -1; }
      else if (p.topHeight < p.minY) { p.topHeight = p.minY; p.oscDir = 1; }
      p.bottomY = p.topHeight + 96;
      p.bottomHeight = MINI_GROUND_Y - p.bottomY;
    }

    if (!p.passed && p.x + p.width < miniBird.x) {
      p.passed = true;
      miniScore++;
      retroAudio.playCoin();
      handleScoreIncrease();
    }

    if (p.x + p.width < -30) {
      miniPipes.splice(i, 1);
    }
  }

  // Update Rival Birds
  for (let i = miniRivalBirds.length - 1; i >= 0; i--) {
    const rb = miniRivalBirds[i];
    rb.update(worldSpeed);
    if (rb.x + rb.w < -30) miniRivalBirds.splice(i, 1);
  }

  // Update Ground Monsters
  for (let i = groundMonsters.length - 1; i >= 0; i--) {
    const gm = groundMonsters[i];
    gm.update(worldSpeed);
    if (gm.deadTimer > 25 || gm.x + gm.w < -30) {
      groundMonsters.splice(i, 1);
    }
  }

  // Update Ground Obstacles
  for (let i = groundObstacles.length - 1; i >= 0; i--) {
    const go = groundObstacles[i];
    go.update(worldSpeed);
    if (go.x + go.w < -30) groundObstacles.splice(i, 1);
  }

  // Update Fire Bats
  for (let i = fireBats.length - 1; i >= 0; i--) {
    const fb = fireBats[i];
    fb.update(worldSpeed);
    if (fb.x + fb.w < -30) fireBats.splice(i, 1);
  }

  // Update Lava Stalactites
  for (let i = lavaStalactites.length - 1; i >= 0; i--) {
    const ls = lavaStalactites[i];
    ls.update(worldSpeed);
    if (ls.x + ls.w < -30) lavaStalactites.splice(i, 1);
  }
}

// Comic Falling Death Phase (When lives reach 0)
function startDeathFalling() {
  miniState = MINI_STATES.FALLING_DEATH;
  miniBird.vy = -3.8; // Comic upward pop before dropping
  miniBird.rotation = 0;
  retroAudio.playFallDeath();
  miniShake.intensity = 10;
  addMiniFloatingText(miniBird.x, miniBird.y - 12, '💀 GUGUR!', '#ef4444');
}

// Collision Handling
function takeDamage() {
  if (invulnerableTimer > 0) return;

  if (activeShield) {
    activeShield = false;
    invulnerableTimer = 80;
    retroAudio.playShieldPop();
    miniShake.intensity = 8;
    addMiniFloatingText(miniBird.x, miniBird.y - 12, 'SHIELD BROKEN!', '#38bdf8');
    return;
  }

  playerLives--;
  updateLivesDisplay();
  retroAudio.playHit();
  miniShake.intensity = 12;

  if (playerLives <= 0) {
    startDeathFalling();
  } else {
    invulnerableTimer = 90;
    miniBird.vy = -4.5;
    addMiniFloatingText(miniBird.x, miniBird.y - 12, '-1 NYAWA!', '#ef4444');
  }
}

function checkMiniCollision() {
  if (miniState !== MINI_STATES.PLAYING) return;

  // Floor / Ceiling checks
  if (currentMode !== GAME_MODES.DARAT && miniBird.y + miniBird.h >= MINI_GROUND_Y) {
    takeDamage();
    return;
  }
  if (miniBird.y <= 0) {
    miniBird.y = 0;
    miniBird.vy = 0;
  }

  const bBox = {
    left: miniBird.x + 3,
    right: miniBird.x + miniBird.w - 3,
    top: miniBird.y + 3,
    bottom: miniBird.y + miniBird.h - 3
  };

  // Pipes Collision
  for (let p of miniPipes) {
    if (bBox.right > p.x && bBox.left < p.x + p.width) {
      if (bBox.top < p.topHeight || bBox.bottom > p.bottomY) {
        takeDamage();
        return;
      }
    }
  }

  // Rival Birds Collision
  for (let rb of miniRivalBirds) {
    if (
      bBox.right > rb.x + 3 &&
      bBox.left < rb.x + rb.w - 3 &&
      bBox.bottom > rb.y + 3 &&
      bBox.top < rb.y + rb.h - 3
    ) {
      takeDamage();
      return;
    }
  }

  // Ground Monsters Collision (With Zombie Stomp Mechanic!)
  for (let gm of groundMonsters) {
    if (gm.isDead) continue;
    if (
      bBox.right > gm.x + 2 &&
      bBox.left < gm.x + gm.w - 2 &&
      bBox.bottom > gm.y &&
      bBox.top < gm.y + gm.h
    ) {
      // Check if stomping from above!
      if (miniBird.vy > 0 && bBox.bottom <= gm.y + 12) {
        // MONSTER STOMPED!
        gm.isDead = true;
        miniBird.vy = -5.8; // Bounce upward
        miniScore += 2;
        retroAudio.playStomp();
        addMiniFloatingText(gm.x, gm.y - 12, 'STOMP! +2', '#22d3ee');
        miniShake.intensity = 5;

        // Stomp streak combo bonus heart
        stompStreak++;
        if (stompStreak % 3 === 0) {
          const heartY = Math.max(80, gm.y - 45);
          powerUps.push(new PowerUpItem(heartY, POWERUP_TYPES.HEART));
          addMiniFloatingText(gm.x, heartY - 10, '3x STOMP! ❤️ NYAWA', '#ef4444');
        }

        handleScoreIncrease();
      } else {
        takeDamage();
        return;
      }
    }
  }

  // Ground Obstacles Collision
  for (let go of groundObstacles) {
    if (
      bBox.right > go.x + 4 &&
      bBox.left < go.x + go.w - 4 &&
      bBox.bottom > go.y + 4
    ) {
      takeDamage();
      return;
    }
  }

  // Fire Bats Collision
  for (let fb of fireBats) {
    if (
      bBox.right > fb.x + 3 &&
      bBox.left < fb.x + fb.w - 3 &&
      bBox.bottom > fb.y + 3 &&
      bBox.top < fb.y + fb.h - 3
    ) {
      takeDamage();
      return;
    }
  }

  // Lava Stalactites Collision
  for (let ls of lavaStalactites) {
    if (bBox.right > ls.x + 6 && bBox.left < ls.x + ls.w - 6) {
      if (bBox.top < ls.topHeight || bBox.bottom > ls.bottomY) {
        takeDamage();
        return;
      }
    }
  }
}

// Hilarious Roasting Quotes Tailored to Current Mode
function getRoastQuote(mode, score) {
  const roasts = {
    FLAPPY: [
      "Hahaha noob! Nabrak tiang mulu, install Mobel Wijen aja gk cocok ni game untuk kaw yang noob :3",
      "Belajar lagi dek, burung tetangga aja bisa terbang lewatin tiang! 😂",
      "Lawwwaak! Baru terbang bentar udah nyungsep wkwk 💀",
      "Install Mobel Wijen aja bro, di sini burungnya butuh skill beneran :3",
      "Hahaha noob! Matanya kemana dek, ada tiang kok malah dicium wkwk!"
    ],
    DARAT: [
      "Hahaha noob! Malah diinjak monster kan, install Mobel Wijen aja gk cocok ni game untuk kaw yang noob :3",
      "Belajar lagi dek, zombie aja ngakak liat lompatanmu wkwk! 😂",
      "Lawwwaak! Kesandung batu segede gaban langsung KO 💀",
      "Install Mobel Wijen aja dek, lompat rintangan darat aja kagak becus :3",
      "Hahaha noob! Monster daratnya kenyang makan burung noob wkwk!"
    ],
    RAYMAN: [
      "Hahaha noob! Baling-baling meleleh di lava, install Mobel Wijen aja gk cocok ni game untuk kaw yang noob :3",
      "Belajar lagi dek, kena magma langsung jadi ayam bakar krispi! 😂",
      "Lawwwaak! Nyemplung ke lahar panas wkwk 💀",
      "Install Mobel Wijen aja dek, glider Rayman butuh timing bukan nafsu :3",
      "Hahaha noob! Gosong jadi arang di dunia lava wkwk!"
    ]
  };
  const list = roasts[mode] || roasts.FLAPPY;
  return list[Math.floor(Math.random() * list.length)];
}

// Game Over Screen with Roasting Dialogue, Checkpoint, & Leaderboard Name Prompt
function triggerMiniGameOver() {
  miniState = MINI_STATES.GAMEOVER;
  const title = getRankTitle(miniScore);
  const isTopScore = (miniScore > 0);
  const roastQuote = getRoastQuote(currentMode, miniScore);

  if (arcadeOverlay) {
    arcadeOverlay.classList.remove('hidden');
    arcadeOverlay.innerHTML = `
      <div class="screen-instructions" style="max-width: 260px; padding: 12px 14px;">
        <p style="font-family: 'Press Start 2P'; font-size: 11px; color: #ef4444; margin-bottom: 6px;">GAME OVER</p>
        <p style="font-family: 'Press Start 2P'; font-size: 9px; color: #f9ca24; margin-bottom: 4px;">SKOR: ${miniScore}</p>
        <p style="font-size: 7.5px; color: #38bdf8; font-family: 'Press Start 2P'; margin-bottom: 8px;">"${title}"</p>

        <!-- Hilarious Roasting Dialogue Bubble -->
        <div style="background: rgba(239, 68, 68, 0.16); border: 2px dashed #ef4444; border-radius: 6px; padding: 8px 10px; margin: 8px 0; text-align: center; box-shadow: 0 0 10px rgba(239, 68, 68, 0.35);">
          <div style="font-size: 14px; margin-bottom: 3px;">💀🗯️</div>
          <p style="font-family: 'Press Start 2P', monospace; font-size: 7px; color: #fecaca; line-height: 1.5; margin: 0;">
            "${roastQuote}"
          </p>
        </div>

        ${isTopScore ? `
          <div style="margin-bottom: 8px; background: rgba(0,0,0,0.5); padding: 6px; border: 1px solid #334155; border-radius: 4px;">
            <label style="font-size: 7px; color: #cbd5e1; display: block; margin-bottom: 4px;">SIMPAN INISIAL (3 HURUF):</label>
            <div style="display: flex; gap: 4px; justify-content: center;">
              <input type="text" id="arcadeInitialsInput" maxlength="3" value="YOU" style="width: 60px; text-transform: uppercase; font-family: 'Press Start 2P'; font-size: 9px; text-align: center; background: #0f172a; color: #f9ca24; border: 1px solid #eab308; border-radius: 3px; padding: 2px 4px;" />
              <button id="saveInitialsBtn" style="font-family: 'Press Start 2P'; font-size: 7px; background: #10b981; color: #000; border: none; padding: 3px 6px; border-radius: 3px; cursor: pointer;">SIMPAN</button>
            </div>
          </div>
        ` : ''}

        <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
          ${lastCheckpointScore > 0 ? `
            <button id="respawnCheckpointBtn" style="font-family: 'Press Start 2P'; font-size: 7px; background: #0284c7; color: #fff; border: 2px solid #000; padding: 6px 8px; border-radius: 4px; cursor: pointer;">
              🚩 RESPAWN CHECKPOINT (${lastCheckpointScore} PTS)
            </button>
          ` : ''}
          <button id="restartFromZeroBtn" style="font-family: 'Press Start 2P'; font-size: 7px; background: #f59e0b; color: #000; border: 2px solid #000; padding: 6px 8px; border-radius: 4px; cursor: pointer;">
            🔄 MAIN DARI AWAL
          </button>
        </div>
      </div>
    `;

    // Hook up Game Over Buttons
    const saveInitialsBtn = document.getElementById('saveInitialsBtn');
    const arcadeInitialsInput = document.getElementById('arcadeInitialsInput');
    saveInitialsBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = (arcadeInitialsInput?.value || 'YOU').toUpperCase();
      saveToLeaderboard(val, miniScore);
      saveInitialsBtn.textContent = 'TERSIMPAN!';
      saveInitialsBtn.style.background = '#64748b';
      saveInitialsBtn.disabled = true;
    });

    const respawnCheckpointBtn = document.getElementById('respawnCheckpointBtn');
    respawnCheckpointBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      startNewRun(true);
    });

    const restartFromZeroBtn = document.getElementById('restartFromZeroBtn');
    restartFromZeroBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      startNewRun(false);
    });
  }
}

function startNewRun(fromCheckpoint = false) {
  miniState = MINI_STATES.PLAYING;
  miniBird.reset(fromCheckpoint);
  miniPipes = [];
  miniRivalBirds = [];
  groundMonsters = [];
  groundObstacles = [];
  fireBats = [];
  lavaStalactites = [];
  powerUps = [];
  miniFloatingTexts = [];
  obstacleSpawnTimer = 0;
  powerUpTimer = 0;

  if (miniCurrentScore) miniCurrentScore.textContent = miniScore;
  if (arcadeOverlay) arcadeOverlay.classList.add('hidden');
  miniBird.jump();
}

function handleMiniAction() {
  retroAudio.init();

  if (miniState === MINI_STATES.IDLE) {
    startNewRun(false);
  } else if (miniState === MINI_STATES.GAMEOVER) {
    // Default: respawn at checkpoint if available, else zero
    startNewRun(lastCheckpointScore > 0);
  } else if (miniState === MINI_STATES.PLAYING) {
    miniBird.jump();
  }
}

// Biome-Specific Background Rendering
function drawMiniBackground() {
  if (!ctx) return;

  if (currentBiome === BIOMES.LAVA) {
    // 🌋 BIOME 3: LAVA WORLD
    ctx.fillStyle = '#1c0707';
    ctx.fillRect(0, 0, MINI_WIDTH, MINI_GROUND_Y);

    // Glowing Magma Cloud Atmosphere
    const glowY = MINI_GROUND_Y - 120;
    const grad = ctx.createLinearGradient(0, glowY, 0, MINI_GROUND_Y);
    grad.addColorStop(0, 'rgba(239, 68, 68, 0)');
    grad.addColorStop(1, 'rgba(239, 68, 68, 0.45)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, glowY, MINI_WIDTH, 120);

    // Cavern Rock Formations
    ctx.fillStyle = '#2d0a0a';
    ctx.fillRect(15, 0, 30, 45);
    ctx.fillRect(75, 0, 45, 60);
    ctx.fillRect(160, 0, 50, 40);
    ctx.fillRect(235, 0, 35, 55);

    // Rising Lava Sparks
    ctx.fillStyle = '#fbbf24';
    for (let i = 0; i < 6; i++) {
      const sx = ((Date.now() / 15 + i * 48) % MINI_WIDTH);
      const sy = MINI_GROUND_Y - ((Date.now() / 12 + i * 25) % 150);
      ctx.fillRect(sx, sy, 2, 3);
    }

    // Molten Lava River Ground
    ctx.fillStyle = '#ff4757';
    ctx.fillRect(0, MINI_GROUND_Y, MINI_WIDTH, 14);
    ctx.fillStyle = '#ffa502';
    ctx.fillRect(0, MINI_GROUND_Y + 14, MINI_WIDTH, MINI_HEIGHT - (MINI_GROUND_Y + 14));

    // Lava bubbles
    ctx.fillStyle = '#ffffff';
    const bubbleX = (Date.now() / 20) % MINI_WIDTH;
    ctx.fillRect(bubbleX, MINI_GROUND_Y + 4, 6, 4);

  } else if (currentBiome === BIOMES.MOUNTAIN) {
    // 🏔️ BIOME 2: MOUNTAIN WORLD
    const skyGrad = ctx.createLinearGradient(0, 0, 0, MINI_GROUND_Y);
    skyGrad.addColorStop(0, '#0284c7');
    skyGrad.addColorStop(1, '#bae6fd');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, MINI_WIDTH, MINI_GROUND_Y);

    // Distant Alpine Peaks
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(0, MINI_GROUND_Y - 50);
    ctx.lineTo(60, MINI_GROUND_Y - 140);
    ctx.lineTo(130, MINI_GROUND_Y - 60);
    ctx.lineTo(210, MINI_GROUND_Y - 170);
    ctx.lineTo(288, MINI_GROUND_Y - 80);
    ctx.lineTo(288, MINI_GROUND_Y);
    ctx.lineTo(0, MINI_GROUND_Y);
    ctx.closePath();
    ctx.fill();

    // Snow Caps
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(50, MINI_GROUND_Y - 125);
    ctx.lineTo(60, MINI_GROUND_Y - 140);
    ctx.lineTo(75, MINI_GROUND_Y - 120);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(195, MINI_GROUND_Y - 150);
    ctx.lineTo(210, MINI_GROUND_Y - 170);
    ctx.lineTo(228, MINI_GROUND_Y - 145);
    ctx.closePath();
    ctx.fill();

    // Pine Trees
    ctx.fillStyle = '#166534';
    for (let tx = 10; tx < MINI_WIDTH; tx += 45) {
      ctx.fillRect(tx + 6, MINI_GROUND_Y - 26, 4, 26);
      ctx.fillRect(tx, MINI_GROUND_Y - 45, 16, 20);
      ctx.fillRect(tx + 3, MINI_GROUND_Y - 56, 10, 14);
    }

    // Mountain Grassy Dirt Ground
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, MINI_GROUND_Y, MINI_WIDTH, 14);
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, MINI_GROUND_Y + 14, MINI_WIDTH, MINI_HEIGHT - (MINI_GROUND_Y + 14));

  } else {
    // 🏙️ BIOME 1: CITY WORLD (Flappy Classic)
    ctx.fillStyle = '#4bcffa';
    ctx.fillRect(0, 0, MINI_WIDTH, MINI_GROUND_Y);

    // Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.fillRect(40, 60, 48, 16);
    ctx.fillRect(50, 52, 28, 10);
    ctx.fillRect(180, 90, 56, 18);
    ctx.fillRect(194, 80, 32, 12);

    // City Skyline
    ctx.fillStyle = '#80dfe9';
    ctx.fillRect(10, MINI_GROUND_Y - 70, 34, 70);
    ctx.fillRect(52, MINI_GROUND_Y - 100, 42, 100);
    ctx.fillRect(104, MINI_GROUND_Y - 60, 36, 60);
    ctx.fillRect(148, MINI_GROUND_Y - 110, 48, 110);
    ctx.fillRect(206, MINI_GROUND_Y - 80, 40, 80);

    // City Sidewalk & Ground
    ctx.fillStyle = '#2ed573';
    ctx.fillRect(0, MINI_GROUND_Y, MINI_WIDTH, 14);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, MINI_GROUND_Y + 14, MINI_WIDTH, 2);
    ctx.fillStyle = '#d2a679';
    ctx.fillRect(0, MINI_GROUND_Y + 16, MINI_WIDTH, MINI_HEIGHT - (MINI_GROUND_Y + 16));
  }
}

function drawSingleMiniPipe(x, y, width, height, isTop) {
  ctx.fillStyle = '#2ed573';
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = '#7bed9f';
  ctx.fillRect(x + 3, y, 5, height);
  ctx.fillStyle = '#000000';
  ctx.fillRect(x, y, 2, height);
  ctx.fillRect(x + width - 2, y, 2, height);

  const rimY = isTop ? y + height - 16 : y;
  ctx.fillRect(x - 2, rimY, width + 4, 16);
  ctx.fillStyle = '#2ed573';
  ctx.fillRect(x - 1, rimY + 1, width + 2, 14);
}

function drawAllObstacles() {
  if (!ctx) return;

  // Draw Mode 1 Pipes
  for (let p of miniPipes) {
    if (p.isTilted) {
      ctx.save();
      const pivotX = p.x + p.width / 2;
      const pivotY = p.topHeight + 48;
      ctx.translate(pivotX, pivotY);
      ctx.rotate(p.tiltAngle);
      drawSingleMiniPipe(-p.width / 2, -pivotY, p.width, p.topHeight, true);
      drawSingleMiniPipe(-p.width / 2, p.bottomY - pivotY, p.width, p.bottomHeight, false);
      ctx.restore();
    } else {
      drawSingleMiniPipe(p.x, 0, p.width, p.topHeight, true);
      drawSingleMiniPipe(p.x, p.bottomY, p.width, p.bottomHeight, false);
      if (p.isOscillating) {
        ctx.fillStyle = '#f9ca24';
        ctx.font = '8px "Press Start 2P", monospace';
        ctx.fillText(p.oscDir > 0 ? '▼' : '▲', p.x + p.width / 2 - 4, p.topHeight + 50);
      }
    }
  }

  // Draw Rival Birds
  for (let rb of miniRivalBirds) rb.draw();

  // Draw Ground Obstacles & Monsters
  for (let go of groundObstacles) go.draw();
  for (let gm of groundMonsters) gm.draw();

  // Draw Lava Stalactites & Fire Bats
  for (let ls of lavaStalactites) ls.draw();
  for (let fb of fireBats) fb.draw();

  // Draw Power-Ups
  for (let pu of powerUps) pu.draw();
}

function updateMiniFloatingTexts() {
  for (let i = miniFloatingTexts.length - 1; i >= 0; i--) {
    const ft = miniFloatingTexts[i];
    ft.y -= 0.8;
    ft.life--;
    if (ft.life <= 0) miniFloatingTexts.splice(i, 1);
  }
}

function drawMiniFloatingTexts() {
  for (let ft of miniFloatingTexts) {
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.fillStyle = '#000000';
    ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
    ctx.fillStyle = ft.color;
    ctx.fillText(ft.text, ft.x, ft.y);
  }
}

function drawModeBannerOverlay() {
  if (bannerTimer <= 0 || !ctx) return;
  bannerTimer--;
  ctx.save();
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.fillRect(10, 80, MINI_WIDTH - 20, 26);
  ctx.strokeStyle = bannerColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 80, MINI_WIDTH - 20, 26);

  ctx.font = '8px "Press Start 2P", monospace';
  ctx.fillStyle = bannerColor;
  ctx.textAlign = 'center';
  ctx.fillText(bannerText, MINI_WIDTH / 2, 97);
  ctx.restore();
}

// FULLSCREEN HANDLERS FOR ARCADE CABINET
const arcadeCabinet = document.getElementById('arcadeCabinet');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenToggleBtn = document.getElementById('fullscreenToggleBtn');
const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');
const fullscreenIcon = document.getElementById('fullscreenIcon');

function isFullscreenActive() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || arcadeCabinet?.classList.contains('is-fullscreen'));
}

function enterFullscreenMode() {
  retroAudio.init();
  retroAudio.playBeep(600, 0.06);

  if (arcadeCabinet) {
    if (arcadeCabinet.requestFullscreen) {
      arcadeCabinet.requestFullscreen().catch(() => {
        arcadeCabinet.classList.add('is-fullscreen');
      });
    } else if (arcadeCabinet.webkitRequestFullscreen) {
      arcadeCabinet.webkitRequestFullscreen();
    } else {
      arcadeCabinet.classList.add('is-fullscreen');
    }
    if (fullscreenIcon) fullscreenIcon.textContent = '🗗';
  }
}

function exitFullscreenMode() {
  retroAudio.init();
  retroAudio.playBeep(400, 0.06);

  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  arcadeCabinet?.classList.remove('is-fullscreen');
  if (fullscreenIcon) fullscreenIcon.textContent = '⛶';
}

function toggleArcadeFullscreen() {
  if (isFullscreenActive()) {
    exitFullscreenMode();
  } else {
    enterFullscreenMode();
  }
}

fullscreenBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleArcadeFullscreen();
});

fullscreenToggleBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleArcadeFullscreen();
});

exitFullscreenBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  exitFullscreenMode();
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    arcadeCabinet?.classList.remove('is-fullscreen');
    if (fullscreenIcon) fullscreenIcon.textContent = '⛶';
  } else {
    if (fullscreenIcon) fullscreenIcon.textContent = '🗗';
  }
});

document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitFullscreenElement) {
    arcadeCabinet?.classList.remove('is-fullscreen');
    if (fullscreenIcon) fullscreenIcon.textContent = '⛶';
  } else {
    if (fullscreenIcon) fullscreenIcon.textContent = '🗗';
  }
});

// Key & Pointer Input Listeners
window.addEventListener('keydown', (e) => {
  if (document.activeElement === searchInput) return;
  const initialsInput = document.getElementById('arcadeInitialsInput');
  if (document.activeElement === initialsInput) return;

  if (e.code === 'Space') {
    e.preventDefault();
    if (spaceKeyCap) spaceKeyCap.classList.add('pressed');
    handleMiniAction();
  } else if (e.code === 'KeyF') {
    e.preventDefault();
    toggleArcadeFullscreen();
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    if (spaceKeyCap) spaceKeyCap.classList.remove('pressed');
  }
});

canvas?.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  handleMiniAction();
});

arcadeOverlay?.addEventListener('pointerdown', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
  e.preventDefault();
  handleMiniAction();
});

// FIXED TIMESTEP 60 FPS GAME LOOP
let miniLastTimestamp = 0;
const MINI_FIXED_STEP = 1000 / 60;
let miniAccumulator = 0;

function updateMiniAllLogic() {
  // If in Falling Death state, simulate tumbling downwards until hitting ground
  if (miniState === MINI_STATES.FALLING_DEATH) {
    miniBird.vy += 0.44;
    miniBird.y += miniBird.vy;
    miniBird.rotation += 0.35; // Fast comical spin

    if (miniBird.y >= MINI_GROUND_Y - miniBird.h) {
      miniBird.y = MINI_GROUND_Y - miniBird.h;
      miniBird.vy = 0;
      retroAudio.playCrash();
      miniShake.intensity = 18;
      addMiniFloatingText(miniBird.x, miniBird.y - 12, 'CRASH! 💥', '#ef4444');
      triggerMiniGameOver();
    }
    updateMiniFloatingTexts();
    return;
  }

  miniBird.update();
  updateObstacles();
  checkMiniCollision();
  updateMiniFloatingTexts();

  if (miniShake.intensity > 0) {
    miniShake.intensity *= miniShake.decay;
    if (miniShake.intensity < 0.2) miniShake.intensity = 0;
  }
}

function miniGameLoop(timestamp) {
  if (ctx) {
    if (!miniLastTimestamp) miniLastTimestamp = timestamp;
    let elapsed = timestamp - miniLastTimestamp;
    miniLastTimestamp = timestamp;

    if (elapsed > 100) elapsed = 100;
    miniAccumulator += elapsed;

    while (miniAccumulator >= MINI_FIXED_STEP) {
      updateMiniAllLogic();
      miniAccumulator -= MINI_FIXED_STEP;
    }

    ctx.save();
    if (miniShake.intensity > 0) {
      const rx = (Math.random() - 0.5) * miniShake.intensity;
      const ry = (Math.random() - 0.5) * miniShake.intensity;
      ctx.translate(rx, ry);
    }

    ctx.clearRect(0, 0, MINI_WIDTH, MINI_HEIGHT);
    drawMiniBackground();
    drawAllObstacles();
    miniBird.draw();
    drawMiniFloatingTexts();
    drawModeBannerOverlay();

    if (miniState === MINI_STATES.PLAYING) {
      // Score in top center
      ctx.font = '16px "Press Start 2P", monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#000000';
      ctx.fillText(miniScore, MINI_WIDTH / 2 + 2, 42);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(miniScore, MINI_WIDTH / 2, 40);

      // Power-up active badges in corner
      let buffX = 10;
      if (activeShield) {
        ctx.font = '12px sans-serif';
        ctx.fillText('🛡️', buffX, 40);
        buffX += 18;
      }
      if (slowMoTimer > 0) {
        ctx.font = '12px sans-serif';
        ctx.fillText('⏳', buffX, 40);
        buffX += 18;
      }
      if (miniSizeTimer > 0) {
        ctx.font = '12px sans-serif';
        ctx.fillText('💨', buffX, 40);
      }
    }

    ctx.restore();
  }
  requestAnimationFrame(miniGameLoop);
}

// Inisialisasi awal saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  renderCompetitions();
  if (ctx) requestAnimationFrame(miniGameLoop);
});
