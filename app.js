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

// 6. EMBEDDED ARCADE MINI-GAME (FLAPPY FLASH)
const canvas = document.getElementById('landingGameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const arcadeOverlay = document.getElementById('arcadeOverlay');
const spaceKeyCap = document.getElementById('spaceKeyCap');
const miniCurrentScore = document.getElementById('miniCurrentScore');
const miniHighScore = document.getElementById('miniHighScore');

if (ctx) {
  ctx.imageSmoothingEnabled = false;
}

const MINI_WIDTH = 288;
const MINI_HEIGHT = 480;
const MINI_GROUND_Y = 410;

const MINI_STATES = {
  IDLE: 'IDLE',
  PLAYING: 'PLAYING',
  GAMEOVER: 'GAMEOVER'
};
let miniState = MINI_STATES.IDLE;

let miniScore = 0;
let savedMiniHighScore = parseInt(localStorage.getItem('flash_flappy_high_score')) || 0;
if (miniHighScore) miniHighScore.textContent = savedMiniHighScore;

// Objek Burung Mini
let miniShake = { intensity: 0, decay: 0.9 };
let miniFloatingTexts = [];
let miniRivalBirds = [];
let miniRivalSpawnTimer = 0;

function addMiniFloatingText(x, y, text, color = '#f9ca24') {
  miniFloatingTexts.push({ x, y, text, color, life: 35 });
}

class MiniRivalBird {
  constructor(y) {
    this.x = MINI_WIDTH + 30;
    this.baseY = y;
    this.y = y;
    this.w = 24;
    this.h = 18;
    this.speed = 3.0;
    this.time = Math.random() * 10;
    this.frame = 0;
    this.animTimer = 0;
    this.passed = false;
    this.taunt = Math.random() > 0.5 ? 'AWAS!' : 'MINGGIR!';
    this.tauntTimer = 50;
  }

  update() {
    this.x -= this.speed;
    this.time += 0.08;
    this.y = this.baseY + Math.sin(this.time) * 28;
    if (this.y > MINI_GROUND_Y - this.h - 10) this.y = MINI_GROUND_Y - this.h - 10;

    this.animTimer++;
    if (this.animTimer % 5 === 0) {
      this.frame = (this.frame + 1) % 3;
    }

    if (!this.passed && this.x + this.w < miniBird.x) {
      this.passed = true;
      miniScore += 2;
      retroAudio.playDodgeBonus();
      miniShake.intensity = 4;
      addMiniFloatingText(miniBird.x, miniBird.y - 12, 'DODGE! +2', '#22d3ee');
      if (miniCurrentScore) miniCurrentScore.textContent = miniScore;
      if (miniScore > savedMiniHighScore) {
        savedMiniHighScore = miniScore;
        localStorage.setItem('flash_flappy_high_score', savedMiniHighScore);
        if (miniHighScore) miniHighScore.textContent = savedMiniHighScore;
      }
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
    ctx.fillRect(px + 5, py + 4, 8, 2); // Alis jahat

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 5, py + 6, 6, 4);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 5, py + 7, 3, 3); // Pupil

    ctx.fillStyle = '#f39c12';
    ctx.fillRect(px - 5, py + 7, 6, 5); // Paruh

    ctx.fillStyle = '#2c3e50';
    if (this.frame === 0) ctx.fillRect(px + 10, py + 6, 6, 5);
    else if (this.frame === 1) ctx.fillRect(px + 10, py + 3, 6, 6);
    else ctx.fillRect(px + 10, py + 8, 6, 5);

    ctx.restore();
  }
}

const miniBird = {
  x: 55,
  y: 200,
  w: 24,
  h: 18,
  vy: 0,
  gravity: 0.32,
  jumpStrength: -5.6,
  rotation: 0,
  frame: 0,
  animTick: 0,

  reset() {
    this.x = 55;
    this.y = 200;
    this.vy = 0;
    this.rotation = 0;
    this.frame = 0;
  },

  flap() {
    this.vy = this.jumpStrength;
    retroAudio.playJump();
  },

  update() {
    if (miniState === MINI_STATES.PLAYING) {
      this.vy += this.gravity;
      this.y += this.vy;

      if (this.vy < 0) {
        this.rotation = Math.max(-0.4, (this.vy / 7) * 0.4);
      } else {
        this.rotation = Math.min(Math.PI / 2.2, (this.vy / 9) * (Math.PI / 2.2));
      }
    } else {
      this.y = 200 + Math.sin(Date.now() / 250) * 6;
      this.rotation = 0;
    }

    this.animTick++;
    if (this.animTick % 6 === 0) {
      this.frame = (this.frame + 1) % 3;
    }
  },

  draw() {
    if (!ctx) return;
    ctx.save();
    ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
    ctx.rotate(this.rotation);

    const px = -this.w / 2;
    const py = -this.h / 2;

    // Tubuh Kuning
    ctx.fillStyle = '#f6b93b';
    ctx.fillRect(px + 4, py + 2, 16, 14);

    // Border Hitam
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 4, py, 14, 2);
    ctx.fillRect(px + 4, py + 16, 14, 2);
    ctx.fillRect(px, py + 6, 2, 8);
    ctx.fillRect(px + 18, py + 2, 2, 14);

    // Perut Putih
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 4, py + 11, 8, 4);

    // Mata
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(px + 12, py + 2, 6, 6);
    ctx.fillStyle = '#000000';
    ctx.fillRect(px + 15, py + 4, 3, 4);

    // Paruh
    ctx.fillStyle = '#e55039';
    ctx.fillRect(px + 18, py + 7, 6, 6);

    // Sayap
    ctx.fillStyle = '#ffffff';
    if (this.frame === 0) {
      ctx.fillRect(px + 4, py + 7, 7, 5);
    } else if (this.frame === 1) {
      ctx.fillRect(px + 4, py + 4, 7, 6);
    } else {
      ctx.fillRect(px + 4, py + 9, 7, 5);
    }

    // Efek Keringat Panik saat skor >= 10
    if (miniScore >= 10 && (Math.floor(Date.now() / 200) % 2 === 0)) {
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(px + 2, py - 4, 3, 4);
    }

    ctx.restore();
  }
};

// Pengelolaan Pipa Mini Game
let miniPipes = [];
let miniPipeTimer = 0;
const MINI_PIPE_GAP = 96;
const MINI_PIPE_WIDTH = 46;

function spawnMiniPipe() {
  const minTop = 40;
  const maxTop = MINI_GROUND_Y - MINI_PIPE_GAP - 50;
  const topHeight = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
  const bottomY = topHeight + MINI_PIPE_GAP;
  const bottomHeight = MINI_GROUND_Y - bottomY;

  let isTilted = false;
  let tiltAngle = 0;
  let isOscillating = false;
  let oscDir = 1;
  let oscSpeed = 0;

  if (miniScore >= 10) {
    const roll = Math.random();
    if (roll < 0.45) {
      isTilted = true;
      tiltAngle = (Math.random() > 0.5 ? 1 : -1) * (0.16 + Math.random() * 0.08);
    } else if (roll < 0.8) {
      isOscillating = true;
      oscSpeed = 0.9 + Math.random() * 0.7;
      oscDir = Math.random() > 0.5 ? 1 : -1;
    }
  }

  miniPipes.push({
    x: MINI_WIDTH + 10,
    topHeight: topHeight,
    bottomY: bottomY,
    bottomHeight: bottomHeight,
    width: MINI_PIPE_WIDTH,
    passed: false,
    isTilted: isTilted,
    tiltAngle: tiltAngle,
    isOscillating: isOscillating,
    oscDir: oscDir,
    oscSpeed: oscSpeed,
    minY: Math.max(30, topHeight - 35),
    maxY: Math.min(MINI_GROUND_Y - MINI_PIPE_GAP - 25, topHeight + 35)
  });
}

function updateMiniPipes() {
  if (miniState !== MINI_STATES.PLAYING) return;

  miniPipeTimer++;
  if (miniPipeTimer >= 95) {
    spawnMiniPipe();
    miniPipeTimer = 0;
  }

  // Spawn Rival Bird saat skor >= 10
  if (miniScore >= 10) {
    miniRivalSpawnTimer++;
    if (miniRivalSpawnTimer >= 140) {
      const rivalY = 60 + Math.random() * (MINI_GROUND_Y - 120);
      miniRivalBirds.push(new MiniRivalBird(rivalY));
      miniRivalSpawnTimer = 0;
      retroAudio.playWarning();
      addMiniFloatingText(MINI_WIDTH - 45, rivalY, '⚠️ AWAS!', '#ef4444');
    }
  }

  for (let i = miniPipes.length - 1; i >= 0; i--) {
    const p = miniPipes[i];
    p.x -= 1.8;

    if (p.isOscillating) {
      p.topHeight += p.oscSpeed * p.oscDir;
      if (p.topHeight > p.maxY) { p.topHeight = p.maxY; p.oscDir = -1; }
      else if (p.topHeight < p.minY) { p.topHeight = p.minY; p.oscDir = 1; }
      p.bottomY = p.topHeight + MINI_PIPE_GAP;
      p.bottomHeight = MINI_GROUND_Y - p.bottomY;
    }

    if (!p.passed && p.x + p.width < miniBird.x) {
      p.passed = true;
      miniScore++;
      retroAudio.playCoin();

      if (miniScore === 10) {
        retroAudio.playNgeselinAlert();
        miniShake.intensity = 8;
      } else {
        addMiniFloatingText(miniBird.x + 10, miniBird.y - 10, '+1', '#f9ca24');
      }

      if (miniCurrentScore) miniCurrentScore.textContent = miniScore;
      if (miniScore > savedMiniHighScore) {
        savedMiniHighScore = miniScore;
        localStorage.setItem('flash_flappy_high_score', savedMiniHighScore);
        if (miniHighScore) miniHighScore.textContent = savedMiniHighScore;
      }
    }

    if (p.x + p.width < -30) {
      miniPipes.splice(i, 1);
    }
  }

  for (let i = miniRivalBirds.length - 1; i >= 0; i--) {
    const rb = miniRivalBirds[i];
    rb.update();
    if (rb.x + rb.w < -30) {
      miniRivalBirds.splice(i, 1);
    }
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

function drawMiniPipes() {
  if (!ctx) return;
  for (let p of miniPipes) {
    if (p.isTilted) {
      ctx.save();
      const pivotX = p.x + p.width / 2;
      const pivotY = p.topHeight + MINI_PIPE_GAP / 2;
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
        ctx.fillText(p.oscDir > 0 ? '▼' : '▲', p.x + p.width / 2 - 4, p.topHeight + MINI_PIPE_GAP / 2 + 3);
      }
    }
  }

  for (let rb of miniRivalBirds) {
    rb.draw();
  }
}

function checkMiniCollision() {
  if (miniState !== MINI_STATES.PLAYING) return;

  if (miniBird.y + miniBird.h >= MINI_GROUND_Y) {
    triggerMiniGameOver();
    return;
  }
  if (miniBird.y <= 0) {
    miniBird.y = 0;
    miniBird.vy = 0;
  }

  const pad = 3;
  const bBox = {
    left: miniBird.x + pad,
    right: miniBird.x + miniBird.w - pad,
    top: miniBird.y + pad,
    bottom: miniBird.y + miniBird.h - pad,
    cx: miniBird.x + miniBird.w / 2,
    cy: miniBird.y + miniBird.h / 2
  };

  for (let p of miniPipes) {
    if (p.isTilted) {
      const pivotX = p.x + p.width / 2;
      const pivotY = p.topHeight + MINI_PIPE_GAP / 2;
      const dx = bBox.cx - pivotX;
      const dy = bBox.cy - pivotY;
      const angle = -p.tiltAngle;

      const localX = Math.cos(angle) * dx - Math.sin(angle) * dy + pivotX;
      const localY = Math.sin(angle) * dx + Math.cos(angle) * dy + pivotY;
      const halfW = (miniBird.w - pad * 2) / 2;
      const halfH = (miniBird.h - pad * 2) / 2;

      if (localX + halfW > p.x && localX - halfW < p.x + p.width) {
        if (localY - halfH < p.topHeight || localY + halfH > p.bottomY) {
          triggerMiniGameOver();
          return;
        }
      }
    } else {
      if (bBox.right > p.x && bBox.left < p.x + p.width) {
        if (bBox.top < p.topHeight || bBox.bottom > p.bottomY) {
          triggerMiniGameOver();
          return;
        }
      }
    }
  }

  for (let rb of miniRivalBirds) {
    if (
      bBox.right > rb.x + 3 &&
      bBox.left < rb.x + rb.w - 3 &&
      bBox.bottom > rb.y + 3 &&
      bBox.top < rb.y + rb.h - 3
    ) {
      triggerMiniGameOver();
      return;
    }
  }
}

function triggerMiniGameOver() {
  miniState = MINI_STATES.GAMEOVER;
  retroAudio.playHit();
  miniShake.intensity = 10;
  if (arcadeOverlay) {
    arcadeOverlay.classList.remove('hidden');
    arcadeOverlay.innerHTML = `
      <div class="screen-instructions">
        <p style="font-family: 'Press Start 2P'; font-size: 11px; color: #ef4444; margin-bottom: 6px;">GAME OVER</p>
        <p style="font-family: 'Press Start 2P'; font-size: 8px; color: #f9ca24; margin-bottom: 4px;">SKOR: ${miniScore}</p>
        <p style="font-size: 8px; color: #94a3b8; margin-bottom: 6px;">${miniScore >= 10 ? 'Pencapaian Luar Biasa!' : 'Semangat! Coba lagi!'}</p>
        <p class="arcade-sub">TEKAN SPACE / KLIK MAIN LAGI</p>
      </div>
    `;
  }
}

function drawMiniBackground() {
  if (!ctx) return;
  // Langit berubah saat skor >= 10
  if (miniScore >= 10) {
    ctx.fillStyle = '#6b1130';
    ctx.fillRect(0, 0, MINI_WIDTH, MINI_GROUND_Y);
  } else {
    ctx.fillStyle = '#4bcffa';
    ctx.fillRect(0, 0, MINI_WIDTH, MINI_GROUND_Y);
  }

  // Awan
  ctx.fillStyle = miniScore >= 10 ? 'rgba(255, 200, 220, 0.5)' : 'rgba(255, 255, 255, 0.7)';
  ctx.fillRect(40, 60, 48, 16);
  ctx.fillRect(50, 52, 28, 10);
  ctx.fillRect(180, 90, 56, 18);
  ctx.fillRect(194, 80, 32, 12);

  // Gedung Siluet
  ctx.fillStyle = miniScore >= 10 ? '#4a0820' : '#80dfe9';
  ctx.fillRect(10, MINI_GROUND_Y - 70, 34, 70);
  ctx.fillRect(52, MINI_GROUND_Y - 100, 42, 100);
  ctx.fillRect(104, MINI_GROUND_Y - 60, 36, 60);
  ctx.fillRect(148, MINI_GROUND_Y - 110, 48, 110);
  ctx.fillRect(206, MINI_GROUND_Y - 80, 40, 80);

  // Tanah
  ctx.fillStyle = '#2ed573';
  ctx.fillRect(0, MINI_GROUND_Y, MINI_WIDTH, 14);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, MINI_GROUND_Y + 14, MINI_WIDTH, 2);
  ctx.fillStyle = '#d2a679';
  ctx.fillRect(0, MINI_GROUND_Y + 16, MINI_WIDTH, MINI_HEIGHT - (MINI_GROUND_Y + 16));
}

function handleMiniAction() {
  retroAudio.init();

  if (miniState === MINI_STATES.IDLE || miniState === MINI_STATES.GAMEOVER) {
    miniState = MINI_STATES.PLAYING;
    miniScore = 0;
    if (miniCurrentScore) miniCurrentScore.textContent = '0';
    miniBird.reset();
    miniPipes = [];
    miniPipeTimer = 0;
    miniRivalBirds = [];
    miniRivalSpawnTimer = 0;
    miniFloatingTexts = [];
    if (arcadeOverlay) arcadeOverlay.classList.add('hidden');
    miniBird.flap();
  } else if (miniState === MINI_STATES.PLAYING) {
    miniBird.flap();
  }
}

// Input Listener Tombol Space
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    if (document.activeElement !== searchInput) {
      e.preventDefault();
      if (spaceKeyCap) spaceKeyCap.classList.add('pressed');
      handleMiniAction();
    }
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
  e.preventDefault();
  handleMiniAction();
});

function miniGameLoop() {
  if (ctx) {
    miniBird.update();
    updateMiniPipes();
    checkMiniCollision();

    ctx.save();
    if (miniShake.intensity > 0) {
      const rx = (Math.random() - 0.5) * miniShake.intensity;
      const ry = (Math.random() - 0.5) * miniShake.intensity;
      ctx.translate(rx, ry);
      miniShake.intensity *= miniShake.decay;
      if (miniShake.intensity < 0.2) miniShake.intensity = 0;
    }

    ctx.clearRect(0, 0, MINI_WIDTH, MINI_HEIGHT);
    drawMiniBackground();
    drawMiniPipes();
    miniBird.draw();

    // Render Floating Text
    for (let i = miniFloatingTexts.length - 1; i >= 0; i--) {
      const ft = miniFloatingTexts[i];
      ft.y -= 0.8;
      ft.life--;
      ctx.font = '8px "Press Start 2P", monospace';
      ctx.fillStyle = '#000000';
      ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
      ctx.fillStyle = ft.color;
      ctx.fillText(ft.text, ft.x, ft.y);
      if (ft.life <= 0) miniFloatingTexts.splice(i, 1);
    }

    if (miniState === MINI_STATES.PLAYING) {
      ctx.font = '18px "Press Start 2P", monospace';
      ctx.fillStyle = '#000000';
      ctx.fillText(miniScore, MINI_WIDTH / 2 + 2, 52);
      ctx.fillStyle = miniScore >= 10 ? '#f43f5e' : '#ffffff';
      ctx.fillText(miniScore, MINI_WIDTH / 2, 50);
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
