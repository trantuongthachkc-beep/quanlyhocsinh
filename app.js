/**
 * EDUSMART LMS & AI GRADING PLATFORM
 * Core Engine & State Controller
 * Integrated with Edu Skills (ai-agents, docx, pptx, gamification, d3)
 */

// Initial Seed Data
const DEFAULT_STUDENTS = [
  {
    id: "std-1",
    name: "Nguyễn Văn An",
    class: "10A1",
    stars: 245,
    streak: 14,
    title: "Thợ Săn Điểm 10",
    avatar: "./photo-1535713875002-d1d0cf377fde",
    badges: ["⭐ Chuyên Cần", "🏆 Quán Quân Tuần", "🎯 10/10 Toán"],
    history: [
      { date: "Hôm nay", change: "+15", reason: "Giải bài toán Parabol xuất sắc" },
      { date: "Hôm qua", change: "+10", reason: "Phát biểu tích cực trong giờ học" }
    ]
  },
  {
    id: "std-2",
    name: "Trần Thị Mai",
    class: "10A1",
    stars: 210,
    streak: 9,
    title: "Siêu Sao Đúng Giờ",
    avatar: "./photo-1494790108377-be9c29b29330",
    badges: ["⏰ Nộp Bài Sớm", "✨ Tiến Bộ Vượt Bậc"],
    history: [
      { date: "Hôm nay", change: "+10", reason: "Làm bài tập trắc nghiệm đạt 8/10" }
    ]
  },
  {
    id: "std-3",
    name: "Phạm Thùy Linh",
    class: "10A1",
    stars: 190,
    streak: 11,
    title: "Chăm Chỉ Học Tập",
    avatar: "./photo-1544005313-94ddf0286df2",
    badges: ["📖 Chăm Chỉ", "🌟 Tiếng Anh Xuất Sắc"],
    history: [
      { date: "Hôm nay", change: "+20", reason: "Quiz Tiếng Anh đạt điểm tuyệt đối 10/10" }
    ]
  },
  {
    id: "std-4",
    name: "Lê Hoàng Nam",
    class: "10A2",
    stars: 175,
    streak: 6,
    title: "Thần Tốc Sáng Tạo",
    avatar: "./photo-1570295999919-56ceb5ecca61",
    badges: ["🚀 Tốc Độ", "💡 Sáng Tạo"],
    history: [
      { date: "2 ngày trước", change: "+10", reason: "Đóng góp ý tưởng bài tập nhóm" }
    ]
  },
  {
    id: "std-5",
    name: "Bùi Thu Trang",
    class: "10A2",
    stars: 165,
    streak: 7,
    title: "Tinh Thần Đồng Đội",
    avatar: "./photo-1517841905240-472988babdf9",
    badges: ["🤝 Đồng Đội", "📚 Ham Học Hỏi"],
    history: [
      { date: "3 ngày trước", change: "+10", reason: "Hỗ trợ bạn cùng bàn ôn tập" }
    ]
  },
  {
    id: "std-6",
    name: "Đặng Quốc Hưng",
    class: "10A2",
    stars: 140,
    streak: 4,
    title: "Cố Gắng Không Ngừng",
    avatar: "./photo-1535713875002-d1d0cf377fde",
    badges: ["🌱 Tiến Bộ"],
    history: []
  },
  {
    id: "std-7",
    name: "Hoàng Minh Tuấn",
    class: "11B1",
    stars: 155,
    streak: 5,
    title: "Chiến Binh Vật Lý",
    avatar: "./photo-1570295999919-56ceb5ecca61",
    badges: ["⚡ Vật Lý Giỏi"],
    history: []
  },
  {
    id: "std-8",
    name: "Vũ Phương Thảo",
    class: "11B1",
    stars: 180,
    streak: 8,
    title: "Ngôi Sao Đam Mê",
    avatar: "./photo-1544005313-94ddf0286df2",
    badges: ["🎨 Sáng Tạo", "⭐ Cần Mẫn"],
    history: []
  }
];

const DEFAULT_ASSIGNMENTS = [
  {
    id: "asn-1",
    title: "Kiểm tra 15 phút: Hàm số bậc hai & Đồ thị parabol",
    subject: "Toán học",
    classTarget: "10A1",
    durationMinutes: 15,
    dueDate: "2026-10-28",
    status: "active",
    questions: [
      {
        id: 1,
        question: "Trục đối xứng của đồ thị parabol hàm số y = ax² + bx + c (a ≠ 0) là đường thẳng:",
        options: ["x = -b / (2a)", "x = b / (2a)", "x = -b / a", "y = -Δ / (4a)"],
        correctIndex: 0,
        explanation: "Theo định nghĩa SGK Toán 10, trục đối xứng của đồ thị parabol là x = -b / (2a)."
      },
      {
        id: 2,
        question: "Tọa độ đỉnh I của parabol y = x² - 4x + 3 là:",
        options: ["I(2; -1)", "I(-2; 15)", "I(1; 0)", "I(2; 1)"],
        correctIndex: 0,
        explanation: "x_I = -(-4)/(2*1) = 2. Thay x = 2 vào y: 2² - 4*2 + 3 = 4 - 8 + 3 = -1. Vậy I(2; -1)."
      },
      {
        id: 3,
        question: "Hàm số y = -2x² + 4x + 1 đạt giá trị lớn nhất tại x bằng:",
        options: ["x = 1", "x = -1", "x = 2", "x = 0"],
        correctIndex: 0,
        explanation: "Hệ số a = -2 < 0 nên hàm số đạt GTLN tại x = -b/(2a) = -4 / (2*(-2)) = 1."
      }
    ]
  },
  {
    id: "asn-2",
    title: "Quiz Tiếng Anh: Verb Tenses & Real-life Vocabulary",
    subject: "Tiếng Anh",
    classTarget: "10A1",
    durationMinutes: 10,
    dueDate: "2026-10-30",
    status: "active",
    questions: [
      {
        id: 1,
        question: "She ________ in Hanoi since she was ten years old.",
        options: ["has lived", "lives", "lived", "is living"],
        correctIndex: 0,
        explanation: "Dấu hiệu 'since + mốc thời gian quá khứ' dùng thì Hiện tại hoàn thành (Present Perfect): has + V3/ed."
      },
      {
        id: 2,
        question: "Yesterday when I arrived, they ________ dinner.",
        options: ["were having", "have had", "had", "are having"],
        correctIndex: 0,
        explanation: "Hành động đang diễn ra trong quá khứ (were having) thì có hành động khác cắt ngang (arrived)."
      }
    ]
  },
  {
    id: "asn-3",
    title: "Khảo sát Vật lý: Lực ma sát và Định luật II Newton",
    subject: "Vật lý",
    classTarget: "10A2",
    durationMinutes: 20,
    dueDate: "2026-11-02",
    status: "active",
    questions: [
      {
        id: 1,
        question: "Lực ma sát trượt xuất hiện khi nào?",
        options: [
          "Khi một vật trượt trên bề mặt của vật khác",
          "Khi vật đứng yên chịu tác dụng của lực kéo",
          "Khi vật đang lơ lửng trong không khí",
          "Khi vật chuyển động tròn đều không ma sát"
        ],
        correctIndex: 0,
        explanation: "Lực ma sát trượt xuất hiện ở mặt tiếp xúc khi một vật trượt trên bề mặt của vật khác."
      }
    ]
  }
];

const DEFAULT_SUBMISSIONS = [
  {
    id: "sub-1",
    assignmentId: "asn-2",
    assignmentTitle: "Quiz Tiếng Anh: Verb Tenses & Real-life Vocabulary",
    studentId: "std-3",
    studentName: "Phạm Thùy Linh",
    studentAvatar: "./photo-1544005313-94ddf0286df2",
    submittedAt: "10 phút trước",
    timeSpentMinutes: 8,
    score: 10,
    maxScore: 10,
    answers: [0, 0],
    aiFeedback: "Xuất sắc! Linh nắm rất vững thì Hiện tại hoàn thành và Quá khứ tiếp diễn. Tiếp tục phát huy nhé!",
    weakTopics: []
  },
  {
    id: "sub-2",
    assignmentId: "asn-1",
    assignmentTitle: "Kiểm tra 15 phút: Hàm số bậc hai & Đồ thị parabol",
    studentId: "std-2",
    studentName: "Trần Thị Mai",
    studentAvatar: "./photo-1494790108377-be9c29b29330",
    submittedAt: "25 phút trước",
    timeSpentMinutes: 12,
    score: 8,
    maxScore: 10,
    answers: [0, 0, 1], // câu 3 sai
    aiFeedback: "Mai làm tốt 2 câu đầu. Câu 3 em nhầm dấu khi tìm giá trị x = -b/(2a). Chú ý a = -2 là số âm.",
    weakTopics: ["Giá trị lớn nhất và nhỏ nhất của hàm số bậc hai"]
  },
  {
    id: "sub-3",
    assignmentId: "asn-1",
    assignmentTitle: "Kiểm tra 15 phút: Hàm số bậc hai & Đồ thị parabol",
    studentId: "std-1",
    studentName: "Nguyễn Văn An",
    studentAvatar: "./photo-1535713875002-d1d0cf377fde",
    submittedAt: "1 giờ trước",
    timeSpentMinutes: 10,
    score: 10,
    maxScore: 10,
    answers: [0, 0, 0],
    aiFeedback: "Hoàn hảo! An tính toán tọa độ đỉnh và trục đối xứng cực nhanh và chuẩn xác 100%.",
    weakTopics: []
  }
];

const DEFAULT_LESSONS = [
  {
    id: "lsn-1",
    title: "Toán 10: Khảo sát và vẽ đồ thị hàm số bậc hai y = ax² + bx + c",
    subject: "Toán học",
    duration: "24:15",
    author: "Thầy Thạch (Chuyên viên)",
    views: 142,
    desc: "Phương pháp xác định tọa độ đỉnh, trục đối xứng, bảng biến thiên và các dạng bài tập thực tế thường gặp trong đề thi.",
    slideOutline: [
      "1. Nhắc lại hàm số bậc nhất và đồ thị đường thẳng",
      "2. Định nghĩa hàm số bậc hai và hình dạng Parabol",
      "3. Tọa độ đỉnh I(-b/2a; -Δ/4a) và Trục đối xứng",
      "4. Bảng biến thiên khi a > 0 và a < 0",
      "5. Các bài tập mẫu và ứng dụng quỹ đạo ném bóng"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "lsn-2",
    title: "Vật lý 10: Ba định luật Newton & Phân tích các lực trong thực tế",
    subject: "Vật lý",
    duration: "18:40",
    author: "Thầy Thạch (Chuyên viên)",
    views: 98,
    desc: "Giải thích trực quan quán tính, công thức F = ma và định luật tương hỗ phản lực kèm ví dụ va chạm ô tô thực tế.",
    slideOutline: [
      "1. Quán tính và Định luật I Newton",
      "2. Gia tốc và Định luật II Newton (F = ma)",
      "3. Cặp lực trực đối theo Định luật III Newton",
      "4. Các dạng lực cơ học: Trọng lực, Ma sát, Đàn hồi"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "lsn-3",
    title: "Tiếng Anh 10: Master thì Hiện tại hoàn thành vs Quá khứ đơn",
    subject: "Tiếng Anh",
    duration: "15:30",
    author: "Cô Mai Anh",
    views: 120,
    desc: "Bí quyết nhận diện dấu hiệu Since/For/Already/Yet và thực hành giao tiếp tự nhiên không sợ nhầm thì.",
    slideOutline: [
      "1. Cấu trúc Present Perfect: S + have/has + V3/ed",
      "2. Khác biệt cốt lõi giữa Quá khứ đơn và Hiện tại hoàn thành",
      "3. Dấu hiệu nhận biết: since, for, just, already, yet",
      "4. Thực hành sửa lỗi phổ biến trong bài thi THPT"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "lsn-4",
    title: "Tin học 10: Tư duy thuật toán & Cơ bản về lập trình Python",
    subject: "Tin học",
    duration: "22:10",
    author: "Thầy Thạch (Chuyên viên)",
    views: 165,
    desc: "Biến, kiểu dữ liệu, cấu trúc rẽ nhánh if-else và vòng lặp for/while thông qua bài toán thực tế quản lý điểm học sinh.",
    slideOutline: [
      "1. Thuật toán là gì? Sơ đồ khối Flowchart",
      "2. Cú pháp cơ bản trong Python",
      "3. Câu lệnh điều kiện if-elif-else",
      "4. Vòng lặp và bài toán tính điểm trung bình"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "lsn-5",
    title: "Hóa học 10: Cấu tạo bảng tuần hoàn & Xu hướng biến đổi tính chất",
    subject: "Hóa học",
    duration: "19:50",
    author: "Cô Thanh Trúc",
    views: 85,
    desc: "Hiểu quy luật bán kính nguyên tử, độ âm điện và tính kim loại/phi kim theo chu kỳ và nhóm mà không cần học vẹt.",
    slideOutline: [
      "1. Lịch sử hình thành Bảng tuần hoàn Mendeleev",
      "2. Cấu trúc: Ô nguyên tố, Chu kỳ, Nhóm A và Nhóm B",
      "3. Quy luật biến đổi bán kính nguyên tử và độ âm điện",
      "4. Dự đoán tính chất hóa học của đơn chất"
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const DEFAULT_WEAKNESSES = [
  {
    topic: "Giá trị lớn nhất và nhỏ nhất của hàm số bậc hai",
    subject: "Toán học",
    failCount: 3,
    advice: "Nên rèn luyện thêm kỹ thuật đưa về dạng bình phương hằng đẳng thức (x - h)² + k để tìm cực trị parabol an toàn."
  },
  {
    topic: "Lực ma sát nghỉ và ma sát trượt",
    subject: "Vật lý",
    failCount: 2,
    advice: "Cần phân biệt rõ trường hợp vật chưa trượt (F_msn cân bằng với lực kéo) và khi đã bắt đầu trượt (F_mst = μ.N)."
  }
];

const FALLBACK_MODELS = [
  "gemini-3-flash-preview",
  "gemini-3-pro-preview",
  "gemini-2.5-flash"
];

// App State
class EduSmartApp {
  constructor() {
    this.students = this.loadStorage("edusmart_students", DEFAULT_STUDENTS);
    this.assignments = this.loadStorage("edusmart_assignments", DEFAULT_ASSIGNMENTS);
    this.submissions = this.loadStorage("edusmart_submissions", DEFAULT_SUBMISSIONS);
    this.lessons = this.loadStorage("edusmart_lessons", DEFAULT_LESSONS);
    this.weaknesses = this.loadStorage("edusmart_weaknesses", DEFAULT_WEAKNESSES);

    this.currentRole = localStorage.getItem("edusmart_role") || "teacher"; // teacher | student
    this.currentStudentId = localStorage.getItem("edusmart_current_student") || "std-1";
    this.activeTab = "overview";
    this.currentClassFilter = "all";
    this.soundEnabled = localStorage.getItem("edusmart_sound") !== "false";
    this.geminiApiKey = localStorage.getItem("edusmart_gemini_key") || "";
    this.selectedModel = localStorage.getItem("edusmart_selected_model") || "gemini-3-flash-preview";

    this.activeQuizState = null;
    this.quizTimerInterval = null;

    this.initAudio();
    this.initDOM();
    this.render();

    // Check API Key on startup as required by AI_INSTRUCTIONS.md
    this.checkInitialApiKey();
  }

  checkInitialApiKey() {
    if (!this.geminiApiKey) {
      setTimeout(() => {
        this.openModal("modal-settings");
        this.toast("Vui lòng nhập API Key để sử dụng app", "fa-key");
      }, 500);
    }
  }

  selectModel(modelName) {
    if (!FALLBACK_MODELS.includes(modelName)) return;
    this.selectedModel = modelName;
    localStorage.setItem("edusmart_selected_model", modelName);
    this.playSound("click");

    document.querySelectorAll(".model-card-item").forEach(card => {
      card.classList.toggle("selected", card.dataset.model === modelName);
    });

    this.toast(`Đã chọn model ưu tiên: ${modelName}`, "fa-robot");
  }

  showApiError(errorMessage) {
    const banner = document.getElementById("global-api-error-banner");
    const errorText = document.getElementById("api-error-message-text");
    if (banner && errorText) {
      errorText.textContent = errorMessage;
      banner.classList.add("active");
    }
  }

  clearApiError() {
    const banner = document.getElementById("global-api-error-banner");
    if (banner) {
      banner.classList.remove("active");
    }
  }

  // Fallback & Retry mechanism according to AI_INSTRUCTIONS.md Section 1
  async callGeminiWithFallback(prompt, systemInstruction = "") {
    if (!this.geminiApiKey) {
      this.showApiError("CHƯA CÓ API KEY. Vui lòng nhấn vào Settings (API Key) trên Header để dán key.");
      this.openModal("modal-settings");
      throw new Error("MISSING_API_KEY: Chưa cấu hình Gemini API Key.");
    }

    // Candidate models order: selected model first, then remaining fallback models in order
    const candidateModels = [
      this.selectedModel,
      ...FALLBACK_MODELS.filter(m => m !== this.selectedModel)
    ];

    let lastError = null;

    for (let i = 0; i < candidateModels.length; i++) {
      const model = candidateModels[i];
      try {
        console.log(`[AI Call] Đang thử model: ${model} (Bước thử ${i + 1}/${candidateModels.length})...`);
        const result = await this.callGeminiAPI(model, prompt, systemInstruction);
        this.clearApiError();
        return { modelUsed: model, text: result };
      } catch (err) {
        console.warn(`[AI Call] Model ${model} gặp lỗi:`, err.message);
        lastError = err;
        this.toast(`Model ${model} quá tải, tự động chuyển model tiếp theo...`, "fa-rotate");
        // Automatically retries with next candidate model
      }
    }

    // If all models failed, display verbatim error from API (AI_INSTRUCTIONS.md requirement 31)
    const rawErrorMessage = lastError ? (lastError.message || String(lastError)) : "429 RESOURCE_EXHAUSTED";
    this.showApiError(rawErrorMessage);
    throw new Error(rawErrorMessage);
  }

  async callGeminiAPI(model, prompt, systemInstruction = "") {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.geminiApiKey}`;

    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048
      }
    };

    if (systemInstruction) {
      payload.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      let errorDetail = `${res.status} ${res.statusText}`;
      try {
        const errJson = await res.json();
        if (errJson.error && errJson.error.message) {
          errorDetail = `${res.status} ${errJson.error.status || ""}: ${errJson.error.message}`;
        }
      } catch (e) {}
      throw new Error(errorDetail);
    }

    const data = await res.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts.map(p => p.text).join("");
    }
    throw new Error("Phản hồi rỗng từ Gemini API.");
  }

  loadStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage full or error", e);
    }
  }

  // Audio effects with Web Audio API
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playSound(type = "click") {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);


      const now = this.audioCtx.currentTime;
      if (type === "click") {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === "star") {
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "success") {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Audio fallback fail silently
    }
  }

  toast(message, icon = "fa-check-circle") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon} text-amber-400"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  initDOM() {
    // Role switcher
    document.querySelectorAll(".role-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const role = e.currentTarget.dataset.role;
        this.setRole(role);
      });
    });

    // Navigation Tabs
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const targetTab = e.currentTarget.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // Header buttons
    document.getElementById("btn-open-ai-tutor")?.addEventListener("click", () => this.toggleAITutor(true));
    document.getElementById("btn-close-ai-tutor")?.addEventListener("click", () => this.toggleAITutor(false));
    document.getElementById("btn-settings")?.addEventListener("click", () => this.openModal("modal-settings"));
    document.getElementById("btn-backup")?.addEventListener("click", () => this.openModal("modal-backup"));
    document.getElementById("btn-sound-toggle")?.addEventListener("click", () => this.toggleSound());

    // Filter roster
    document.querySelectorAll(".btn-filter").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".btn-filter").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.currentClassFilter = e.currentTarget.dataset.class;
        this.renderRoster();
      });
    });

    // Modal close triggers
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modalId = e.currentTarget.getAttribute("data-close-modal");
        this.closeModal(modalId);
      });
    });

    // Close modal on click outside backdrop
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          if (overlay.id === "modal-settings" && !this.geminiApiKey) {
            this.toast("Bạn bắt buộc phải nhập API Key để sử dụng app!", "fa-triangle-exclamation");
            return;
          }
          overlay.classList.remove("active");
        }
      });
    });

    // Quick Actions
    document.getElementById("btn-quick-new-exam")?.addEventListener("click", () => {
      this.switchTab("assignments");
      this.openModal("modal-create-assignment");
    });
    document.getElementById("btn-quick-new-lesson")?.addEventListener("click", () => {
      this.switchTab("lessons");
      this.openModal("modal-create-lesson");
    });
    document.getElementById("btn-quick-stars")?.addEventListener("click", () => {
      this.openAdjustStarModal();
    });

    // Setup forms
    this.initForms();
    this.initAITutorChat();
  }

  setRole(role) {
    this.currentRole = role;
    localStorage.setItem("edusmart_role", role);
    this.playSound("click");
    document.querySelectorAll(".role-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.role === role);
    });

    if (role === "student") {
      document.body.classList.add("student-view-active");
      this.toast("Đã chuyển sang góc nhìn Học sinh", "fa-user-graduate");
      this.renderStudentView();
    } else {
      document.body.classList.remove("student-view-active");
      this.toast("Đã chuyển sang Bảng điều khiển Giáo viên", "fa-chalkboard-user");
      this.render();
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    this.playSound("click");
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.tab === tabId);
    });
    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.toggle("active", panel.id === `tab-${tabId}`);
    });
    this.render();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem("edusmart_sound", this.soundEnabled);
    const icon = document.querySelector("#btn-sound-toggle i");
    if (icon) {
      icon.className = this.soundEnabled ? "fa-solid fa-volume-high text-blue-600 text-sm" : "fa-solid fa-volume-xmark text-slate-400 text-sm";
    }
    this.toast(this.soundEnabled ? "Đã bật hiệu ứng âm thanh" : "Đã tắt âm thanh", this.soundEnabled ? "fa-volume-high" : "fa-volume-xmark");
  }

  openModal(id) {
    this.playSound("click");
    const modal = document.getElementById(id);
    if (!modal) return;

    if (id === "modal-settings") {
      const closeBtn = document.getElementById("btn-close-settings-modal");
      if (closeBtn) {
        closeBtn.style.display = this.geminiApiKey ? "block" : "none";
      }
    }

    modal.classList.add("active");
  }

  closeModal(id) {
    if (id === "modal-settings" && !this.geminiApiKey) {
      this.toast("Bạn bắt buộc phải nhập API Key để sử dụng app!", "fa-triangle-exclamation");
      return;
    }
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("active");
  }

  toggleAITutor(open) {
    this.playSound("click");
    const drawer = document.getElementById("ai-tutor-drawer");
    if (drawer) {
      drawer.classList.toggle("active", open);
    }
  }

  // Render orchestration
  render() {
    this.renderKPIs();
    this.renderLeaderboard();
    this.renderRecentSubmissions();
    this.renderWeaknesses();
    this.renderRoster();
    this.renderAssignments();
    this.renderLessons();
    this.renderGradingTable();
  }

  renderKPIs() {
    const totalStudents = this.students.length;
    const totalAssignments = this.assignments.length;
    const totalSubmissions = this.submissions.length;
    
    let avg = 0;
    if (this.submissions.length > 0) {
      const sum = this.submissions.reduce((acc, s) => acc + (s.score / s.maxScore) * 10, 0);
      avg = (sum / this.submissions.length).toFixed(1);
    }

    const kpiStudents = document.getElementById("kpi-total-students");
    if (kpiStudents) kpiStudents.textContent = totalStudents;

    const kpiAssignments = document.getElementById("kpi-total-assignments");
    if (kpiAssignments) kpiAssignments.textContent = totalAssignments;

    const kpiSubmissions = document.getElementById("kpi-total-submissions");
    if (kpiSubmissions) kpiSubmissions.textContent = totalSubmissions;

    const kpiAvg = document.getElementById("kpi-avg-score");
    if (kpiAvg) kpiAvg.textContent = `${avg} / 10`;
  }

  renderLeaderboard() {
    const container = document.getElementById("leaderboard-container");
    if (!container) return;

    // Sort students by stars descending
    const sorted = [...this.students].sort((a, b) => b.stars - a.stars).slice(0, 5);

    container.innerHTML = sorted.map((std, idx) => {
      const rankClass = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "rank-other";
      return `
        <div class="student-rank-item">
          <div class="rank-left">
            <span class="rank-badge ${rankClass}">${idx + 1}</span>
            <img src="${std.avatar}" alt="${std.name}" class="student-avatar" onerror="this.src='./photo-1535713875002-d1d0cf377fde'">
            <div>
              <div class="student-name">${std.name} (${std.class})</div>
              <div class="student-meta">
                <span class="streak-tag"><i class="fa-solid fa-fire text-amber-500"></i> ${std.streak} ngày</span>
                <span class="title-tag">${std.title}</span>
              </div>
            </div>
          </div>
          <div class="rank-score">
            <span class="stars-count">${std.stars}</span>
            <span class="score-label">điểm sao ⭐</span>
          </div>
        </div>
      `;
    }).join("");
  }

  renderRecentSubmissions() {
    const container = document.getElementById("recent-submissions-container");
    if (!container) return;

    if (this.submissions.length === 0) {
      container.innerHTML = `<p class="text-xs text-slate-400 p-4 text-center">Chưa có bài nộp nào.</p>`;
      return;
    }

    container.innerHTML = this.submissions.slice(0, 3).map(sub => {
      const percent = Math.round((sub.score / sub.maxScore) * 100);
      return `
        <div class="submission-item" onclick="app.viewSubmissionDetail('${sub.id}')">
          <div class="sub-info-left">
            <div class="sub-header-line">
              <span class="sub-student">${sub.studentName}</span>
              <span class="sub-time">${sub.timeSpentMinutes} phút làm • ${sub.submittedAt}</span>
            </div>
            <p class="sub-quiz-title" title="${sub.assignmentTitle}">${sub.assignmentTitle}</p>
            <span class="sub-badge sub-badge-done">
              <i class="fa-solid fa-sparkles text-[10px]"></i> Đã có nhận xét AI
            </span>
          </div>
          <div class="sub-grade-box">
            <div class="sub-grade">${sub.score}/${sub.maxScore}</div>
            <span class="text-[10px] font-bold text-slate-400">${percent}%</span>
          </div>
        </div>
      `;
    }).join("");
  }

  renderWeaknesses() {
    const container = document.getElementById("weaknesses-container");
    if (!container) return;

    container.innerHTML = this.weaknesses.map(w => `
      <div class="weakness-card">
        <div class="weakness-header">
          <span class="weakness-title">
            <i class="fa-solid fa-triangle-exclamation text-rose-500"></i>
            ${w.topic}
          </span>
          <span class="weakness-count">${w.failCount} lượt sai</span>
        </div>
        <p class="weakness-advice">
          <strong>Gợi ý từ AI:</strong> ${w.advice}
        </p>
        <div class="weakness-subject">Môn học: ${w.subject}</div>
      </div>
    `).join("");
  }

  renderRoster() {
    const container = document.getElementById("roster-grid-container");
    if (!container) return;

    let filtered = this.students;
    if (this.currentClassFilter !== "all") {
      filtered = this.students.filter(s => s.class === this.currentClassFilter);
    }

    container.innerHTML = filtered.map(std => `
      <div class="student-card">
        <div>
          <div class="student-card-top">
            <img src="${std.avatar}" alt="${std.name}" class="student-card-avatar" onerror="this.src='./photo-1535713875002-d1d0cf377fde'">
            <div class="student-card-details">
              <h4>${std.name}</h4>
              <div class="student-card-class">Lớp ${std.class} • <span class="text-amber-600 font-bold">${std.stars} ⭐</span></div>
              <div class="text-[11px] text-orange-600 font-semibold mt-0.5">
                <i class="fa-solid fa-fire mr-1 text-[10px]"></i> Chuỗi ${std.streak} ngày
              </div>
            </div>
          </div>
          <div class="student-badges-row">
            <span class="badge-pill bg-amber-50 text-amber-800 border border-amber-200">
              <i class="fa-solid fa-crown text-[9px] text-amber-500"></i> ${std.title}
            </span>
            ${std.badges.map(b => `<span class="badge-pill bg-slate-100 text-slate-700">${b}</span>`).join("")}
          </div>
        </div>
        <div class="student-card-actions">
          <button type="button" class="btn-star-add" onclick="app.openAdjustStarModal('${std.id}', 10)">
            <i class="fa-solid fa-plus-circle"></i> Thưởng 10⭐
          </button>
          <button type="button" class="btn-star-deduct" onclick="app.openAdjustStarModal('${std.id}', -5)">
            <i class="fa-solid fa-minus"></i> -5⭐
          </button>
        </div>
      </div>
    `).join("");
  }

  renderAssignments() {
    const tableBody = document.getElementById("assignments-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = this.assignments.map(asn => {
      const subCount = this.submissions.filter(s => s.assignmentId === asn.id).length;
      return `
        <tr>
          <td>
            <div class="font-bold text-slate-800">${asn.title}</div>
            <div class="text-xs text-slate-500 mt-0.5">${asn.questions.length} câu hỏi • Thời gian: ${asn.durationMinutes} phút</div>
          </td>
          <td>
            <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              ${asn.subject}
            </span>
          </td>
          <td><span class="font-bold text-slate-700">${asn.classTarget}</span></td>
          <td><span class="text-xs font-semibold text-slate-600">${asn.dueDate}</span></td>
          <td>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              ${subCount} lượt nộp
            </span>
          </td>
          <td>
            <div class="flex items-center gap-1.5">
              <button type="button" class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold" title="Xuất đề thi Word (.docx)" onclick="app.exportAssignmentToWord('${asn.id}')">
                <i class="fa-solid fa-file-word text-blue-600 mr-1"></i> Xuất Word
              </button>
              <button type="button" class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold" title="Xem trước câu hỏi" onclick="app.previewAssignment('${asn.id}')">
                <i class="fa-solid fa-eye text-slate-600"></i>
              </button>
              <button type="button" class="p-1.5 rounded-lg border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs" title="Xóa đề" onclick="app.deleteAssignment('${asn.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  renderLessons() {
    const container = document.getElementById("lessons-grid-container");
    if (!container) return;

    container.innerHTML = this.lessons.map(lsn => {
      const subjectColors = {
        "Toán học": "bg-blue-50 text-blue-700 border-blue-200",
        "Vật lý": "bg-amber-50 text-amber-700 border-amber-200",
        "Tiếng Anh": "bg-emerald-50 text-emerald-700 border-emerald-200",
        "Tin học": "bg-purple-50 text-purple-700 border-purple-200",
        "Hóa học": "bg-rose-50 text-rose-700 border-rose-200"
      };
      const badgeClass = subjectColors[lsn.subject] || "bg-slate-100 text-slate-700 border-slate-200";

      return `
        <div class="lesson-card">
          <div class="lesson-thumbnail-box" onclick="app.openVideoLessonModal('${lsn.id}')">
            <div class="play-circle"><i class="fa-solid fa-play ml-0.5"></i></div>
            <span class="lesson-duration">${lsn.duration}</span>
          </div>
          <div class="lesson-body">
            <div>
              <div class="lesson-meta-row">
                <span class="lesson-subject-badge border ${badgeClass}">${lsn.subject}</span>
                <span class="text-xs text-slate-400"><i class="fa-solid fa-eye mr-1"></i> ${lsn.views}</span>
              </div>
              <h4 class="lesson-title">${lsn.title}</h4>
              <p class="lesson-desc">${lsn.desc}</p>
            </div>
            <div class="lesson-footer">
              <span class="text-xs text-slate-500"><i class="fa-solid fa-chalkboard-user mr-1 text-primary-500"></i> ${lsn.author}</span>
              <button type="button" class="text-xs font-bold text-primary-600 hover:text-primary-800 flex items-center gap-1" onclick="app.exportLessonToPPTX('${lsn.id}')">
                <i class="fa-solid fa-file-powerpoint text-orange-600"></i> Xuất Slide PPTX
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  renderGradingTable() {
    const tableBody = document.getElementById("grading-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = this.submissions.map(sub => `
      <tr>
        <td>
          <div class="font-bold text-slate-800">${sub.studentName}</div>
          <div class="text-xs text-slate-400">${sub.submittedAt} • Làm trong ${sub.timeSpentMinutes} phút</div>
        </td>
        <td>
          <div class="text-xs font-semibold text-slate-700">${sub.assignmentTitle}</div>
        </td>
        <td>
          <span class="text-sm font-black text-emerald-600">${sub.score}/${sub.maxScore}</span>
        </td>
        <td>
          <p class="text-xs text-slate-600 italic max-w-xs truncate">"${sub.aiFeedback}"</p>
        </td>
        <td>
          <button type="button" class="btn-primary text-xs py-1.5 px-3" onclick="app.viewSubmissionDetail('${sub.id}')">
            <i class="fa-solid fa-clipboard-check"></i> Xem & Duyệt
          </button>
        </td>
      </tr>
    `).join("");
  }

  // Student Mode Screen
  renderStudentView() {
    const curStd = this.students.find(s => s.id === this.currentStudentId) || this.students[0];
    const nameEl = document.getElementById("student-profile-name");
    if (nameEl) nameEl.textContent = curStd.name;

    const classEl = document.getElementById("student-profile-class");
    if (classEl) classEl.textContent = `Lớp ${curStd.class} • ${curStd.title}`;

    const starsEl = document.getElementById("student-profile-stars");
    if (starsEl) starsEl.textContent = curStd.stars;

    const streakEl = document.getElementById("student-profile-streak");
    if (streakEl) streakEl.textContent = `${curStd.streak} ngày`;

    const avatarEl = document.getElementById("student-profile-img");
    if (avatarEl) avatarEl.src = curStd.avatar;

    // Student Switcher dropdown
    const selectStd = document.getElementById("select-current-student");
    if (selectStd) {
      selectStd.innerHTML = this.students.map(s => `
        <option value="${s.id}" ${s.id === curStd.id ? "selected" : ""}>${s.name} (${s.class}) - ${s.stars}⭐</option>
      `).join("");
      selectStd.onchange = (e) => {
        this.currentStudentId = e.target.value;
        localStorage.setItem("edusmart_current_student", this.currentStudentId);
        this.renderStudentView();
      };
    }

    // Render Student Quizzes
    const quizContainer = document.getElementById("student-quiz-list");
    if (quizContainer) {
      quizContainer.innerHTML = this.assignments.map(asn => {
        const doneSub = this.submissions.find(s => s.assignmentId === asn.id && s.studentId === curStd.id);
        return `
          <div class="student-card">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  ${asn.subject}
                </span>
                <span class="text-xs text-slate-400">Hạn: ${asn.dueDate}</span>
              </div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">${asn.title}</h4>
              <p class="text-xs text-slate-500 mb-3">${asn.questions.length} câu hỏi trắc nghiệm • ${asn.durationMinutes} phút</p>
            </div>
            <div>
              ${doneSub ? `
                <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 mb-2">
                  <div class="font-bold flex items-center justify-between">
                    <span>Đã nộp bài:</span>
                    <span class="text-sm font-black text-emerald-600">${doneSub.score}/${doneSub.maxScore} điểm</span>
                  </div>
                  <p class="mt-1 text-[11px] text-slate-600">"${doneSub.aiFeedback}"</p>
                </div>
                <button type="button" class="btn-secondary w-full text-xs py-2 justify-center" onclick="app.viewSubmissionDetail('${doneSub.id}')">
                  <i class="fa-solid fa-eye"></i> Xem lại bài làm
                </button>
              ` : `
                <button type="button" class="btn-primary w-full text-xs py-2 justify-center" onclick="app.startStudentQuiz('${asn.id}')">
                  <i class="fa-solid fa-pen-to-square"></i> Làm bài ngay
                </button>
              `}
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Form Initializations & Event Bindings
  initForms() {
    // Star adjustment form
    const formStar = document.getElementById("form-adjust-star");
    if (formStar) {
      formStar.addEventListener("submit", (e) => {
        e.preventDefault();
        const stdId = document.getElementById("star-student-select").value;
        const amount = parseInt(document.getElementById("star-amount-input").value, 10);
        const reason = document.getElementById("star-reason-input").value || "Khen thưởng học tập tích cực";

        this.applyStarAdjustment(stdId, amount, reason);
        this.closeModal("modal-adjust-stars");
      });
    }

    // AI Create Assignment Form
    const btnAIGenerate = document.getElementById("btn-ai-generate-exam");
    if (btnAIGenerate) {
      btnAIGenerate.addEventListener("click", () => this.generateExamWithAI());
    }

    const formCreateAsn = document.getElementById("form-create-assignment");
    if (formCreateAsn) {
      formCreateAsn.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("asn-title-input").value;
        const subject = document.getElementById("asn-subject-select").value;
        const targetClass = document.getElementById("asn-class-select").value;
        const duration = parseInt(document.getElementById("asn-duration-input").value, 10) || 15;
        const dueDate = document.getElementById("asn-due-date").value || "2026-11-05";

        const newAsn = {
          id: `asn-${Date.now()}`,
          title,
          subject,
          classTarget: targetClass,
          durationMinutes: duration,
          dueDate,
          status: "active",
          questions: this.tempGeneratedQuestions && this.tempGeneratedQuestions.length > 0 ? this.tempGeneratedQuestions : [
            {
              id: 1,
              question: "Câu hỏi mẫu 1: Chọn đáp án chính xác nhất?",
              options: ["Đáp án A (Chính xác)", "Đáp án B", "Đáp án C", "Đáp án D"],
              correctIndex: 0,
              explanation: "Giải thích chi tiết cho câu hỏi 1."
            }
          ]
        };

        this.assignments.unshift(newAsn);
        this.saveStorage("edusmart_assignments", this.assignments);
        this.tempGeneratedQuestions = [];
        this.toast("Đã tạo đề kiểm tra mới thành công!", "fa-circle-check");
        this.closeModal("modal-create-assignment");
        this.render();
      });
    }

    // Settings Form
    const formSettings = document.getElementById("form-settings");
    if (formSettings) {
      const keyInput = document.getElementById("settings-gemini-key");
      if (keyInput) keyInput.value = this.geminiApiKey;

      const btnToggleKey = document.getElementById("btn-toggle-key-visibility");
      if (btnToggleKey) {
        btnToggleKey.addEventListener("click", () => {
          const input = document.getElementById("settings-gemini-key");
          if (input) {
            input.type = input.type === "password" ? "text" : "password";
            const icon = btnToggleKey.querySelector("i");
            if (icon) icon.className = input.type === "password" ? "fa-solid fa-eye text-sm" : "fa-solid fa-eye-slash text-sm";
          }
        });
      }

      formSettings.addEventListener("submit", (e) => {
        e.preventDefault();
        this.geminiApiKey = document.getElementById("settings-gemini-key").value.trim();
        localStorage.setItem("edusmart_gemini_key", this.geminiApiKey);
        this.clearApiError();
        this.toast("Đã lưu API Key và cấu hình Model thành công!", "fa-circle-check");
        this.closeModal("modal-settings");
      });
    }

    // Backup & Restore
    document.getElementById("btn-export-backup")?.addEventListener("click", () => this.exportBackupJSON());
    document.getElementById("file-import-backup")?.addEventListener("change", (e) => this.importBackupJSON(e));
    document.getElementById("btn-reset-demo-data")?.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn khôi phục toàn bộ dữ liệu mẫu ban đầu?")) {
        localStorage.clear();
        location.reload();
      }
    });
  }

  // Gamification: Star Adjustments
  openAdjustStarModal(studentId = null, defaultAmount = 10) {
    const modal = document.getElementById("modal-adjust-stars");
    if (!modal) return;

    const select = document.getElementById("star-student-select");
    if (select) {
      select.innerHTML = this.students.map(s => `
        <option value="${s.id}" ${studentId && s.id === studentId ? "selected" : ""}>${s.name} (${s.class}) - Hiện có ${s.stars}⭐</option>
      `).join("");
    }

    const amountInput = document.getElementById("star-amount-input");
    if (amountInput) amountInput.value = defaultAmount;

    this.openModal("modal-adjust-stars");
  }

  applyStarAdjustment(studentId, amount, reason) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return;

    student.stars = Math.max(0, student.stars + amount);
    student.history.unshift({
      date: "Vừa xong",
      change: amount > 0 ? `+${amount}` : `${amount}`,
      reason
    });

    if (student.stars >= 250 && !student.badges.includes("🏆 Thần Đồng Điểm Sao")) {
      student.badges.push("🏆 Thần Đồng Điểm Sao");
    }

    this.saveStorage("edusmart_students", this.students);
    this.playSound("star");
    this.toast(`Đã ${amount > 0 ? "thưởng" : "trừ"} ${Math.abs(amount)}⭐ cho ${student.name}!`, "fa-award");
    this.render();
  }

  // AI Exam Generator with Fallback & State Management (AI_INSTRUCTIONS.md Section 1, 2, 3)
  async generateExamWithAI() {
    const promptSubject = document.getElementById("asn-subject-select").value;
    const promptTopic = document.getElementById("ai-exam-topic").value.trim() || "Kiểm tra kiến thức cơ bản";
    const statusBox = document.getElementById("ai-gen-status");

    if (statusBox) {
      statusBox.style.display = "block";
      statusBox.innerHTML = `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-xs font-semibold">
            <span><i class="fa-solid fa-spinner fa-spin text-primary-500 mr-1.5"></i> Đang gọi AI (${this.selectedModel}) tạo đề...</span>
            <span class="text-[11px] text-primary-600 font-bold">Đang xử lý</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" id="ai-step-progress" style="width: 45%;"></div>
          </div>
        </div>
      `;
    }

    const prompt = `Bạn là chuyên gia khảo thí sư phạm. Hãy tạo 3 câu hỏi trắc nghiệm khách quan môn ${promptSubject} về chủ đề: "${promptTopic}".
Yêu cầu trả về JSON hợp lệ:
[
  {
    "id": 1,
    "question": "Nội dung câu hỏi?",
    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    "correctIndex": 0,
    "explanation": "Lời giải thích sư phạm chi tiết"
  }
]
Chỉ trả về JSON thuần túy không kèm giải thích ngoài.`;

    try {
      let questions = [];
      if (this.geminiApiKey) {
        const resp = await this.callGeminiWithFallback(prompt, "Bạn là chuyên gia sư phạm tạo đề thi chuẩn GD&ĐT.");
        const clean = resp.text.replace(/```json/gi, "").replace(/```/g, "").trim();
        questions = JSON.parse(clean);
      } else {
        // Fallback simulation when no key yet
        await new Promise(r => setTimeout(r, 900));
        questions = this.getMockQuestions(promptSubject);
      }

      this.tempGeneratedQuestions = questions;

      if (statusBox) {
        const prog = document.getElementById("ai-step-progress");
        if (prog) {
          prog.style.width = "100%";
          prog.className = "progress-bar-fill success";
        }
        statusBox.innerHTML = `
          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs">
            <div class="font-bold mb-1 flex items-center justify-between">
              <span><i class="fa-solid fa-circle-check text-emerald-600 mr-1"></i> AI đã tạo thành công ${questions.length} câu hỏi!</span>
              <span class="text-[10px] bg-emerald-100 px-2 py-0.5 rounded text-emerald-700 font-bold">Hoàn tất</span>
            </div>
            <p>Xem trước câu 1: <em>${questions[0]?.question}</em></p>
          </div>
        `;
      }
      this.playSound("success");
    } catch (err) {
      // AI_INSTRUCTIONS.md requirement 32: Trạng thái các cột đang chờ phải chuyển thành "Đã dừng do lỗi", tuyệt đối không được hiện "Hoàn tất" hoặc checkmark xanh
      if (statusBox) {
        const prog = document.getElementById("ai-step-progress");
        if (prog) {
          prog.style.width = "40%";
          prog.className = "progress-bar-fill error";
        }
        statusBox.innerHTML = `
          <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs">
            <div class="font-bold flex items-center justify-between mb-1">
              <span class="status-stopped-error"><i class="fa-solid fa-circle-xmark mr-1"></i> Đã dừng do lỗi</span>
              <span class="font-mono text-[10px] text-rose-600">API Error</span>
            </div>
            <p class="font-mono text-[11px] text-rose-700 mt-1">Nguyên văn lỗi: ${err.message}</p>
          </div>
        `;
      }
      this.playSound("click");
    }
  }

  getMockQuestions(subject) {
    if (subject === "Toán học") {
      return [
        {
          id: 1,
          question: "Cho hàm số y = 2x² - 8x + 5. Trục đối xứng của parabol là:",
          options: ["x = 2", "x = -2", "x = 4", "x = -4"],
          correctIndex: 0,
          explanation: "Trục đối xứng x = -b/(2a) = -(-8)/(2*2) = 2."
        },
        {
          id: 2,
          question: "Tập xác định của hàm số bậc hai y = ax² + bx + c là:",
          options: ["D = R", "D = R \\ {0}", "D = [0; +∞)", "D = (-∞; 0]"],
          correctIndex: 0,
          explanation: "Hàm số đa thức bậc hai xác định trên toàn bộ tập số thực R."
        },
        {
          id: 3,
          question: "Tọa độ đỉnh I của parabol y = x² - 4x + 3 là:",
          options: ["I(2; -1)", "I(-2; 15)", "I(1; 0)", "I(2; 1)"],
          correctIndex: 0,
          explanation: "x_I = 2, y_I = 2² - 4*2 + 3 = -1. Vậy I(2; -1)."
        }
      ];
    } else if (subject === "Vật lý") {
      return [
        {
          id: 1,
          question: "Theo định luật II Newton, gia tốc của một vật có khối lượng m chịu lực F là:",
          options: ["a = F / m", "a = F . m", "a = m / F", "a = F² / m"],
          correctIndex: 0,
          explanation: "Định luật II Newton phát biểu: F = ma suy ra a = F / m."
        },
        {
          id: 2,
          question: "Hệ số ma sát trượt μ phụ thuộc vào yếu tố nào?",
          options: [
            "Vật liệu và tình trạng của hai bề mặt tiếp xúc",
            "Diện tích bề mặt tiếp xúc",
            "Tốc độ chuyển động của vật",
            "Khối lượng của vật"
          ],
          correctIndex: 0,
          explanation: "Hệ số ma sát trượt chỉ phụ thuộc vào bản chất vật liệu và độ nhẵn/nhám của bề mặt tiếp xúc."
        }
      ];
    } else {
      return [
        {
          id: 1,
          question: "She ________ in Hanoi since she was ten years old.",
          options: ["has lived", "lives", "lived", "is living"],
          correctIndex: 0,
          explanation: "Dấu hiệu 'since + mốc thời gian' dùng thì Hiện tại hoàn thành (has lived)."
        },
        {
          id: 2,
          question: "By this time tomorrow, they ________ the examination.",
          options: ["will have completed", "completed", "complete", "are completing"],
          correctIndex: 0,
          explanation: "Dấu hiệu 'by this time tomorrow' dùng thì Tương lai hoàn thành (will have completed)."
        }
      ];
    }
  }


  // Export to Word DOCX (Standard test print format based on docx-official skill)
  exportAssignmentToWord(assignmentId) {
    const asn = this.assignments.find(a => a.id === assignmentId);
    if (!asn) return;

    this.playSound("click");
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      this.toast("Vui lòng cho phép mở popup để xuất tài liệu Word", "fa-triangle-exclamation");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>Đề thi: ${asn.title}</title>
        <style>
          body { font-family: 'Times New Roman', serif; line-height: 1.6; color: #000; padding: 40px; margin: 0 auto; max-width: 800px; }
          .header-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .header-table td { vertical-align: top; font-size: 14pt; }
          .text-center { text-align: center; }
          .bold { font-weight: bold; }
          .border-bottom { border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; }
          .question-box { margin-bottom: 18px; page-break-inside: avoid; }
          .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 6px; padding-left: 20px; }
          .answer-key-table { width: 100%; border-collapse: collapse; margin-top: 30px; }
          .answer-key-table th, .answer-key-table td { border: 1px solid #000; padding: 6px 12px; text-align: center; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="background: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 13px; font-family: sans-serif;">📄 <strong>Định dạng Chuẩn Bộ GD&ĐT</strong>: Nhấn <strong>Ctrl + P</strong> để In hoặc lưu thành file PDF / mở trong Word.</span>
          <button onclick="window.print()" style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">In / Lưu ngay</button>
        </div>

        <table class="header-table">
          <tr>
            <td class="text-center" style="width: 45%;">
              SỞ GIÁO DỤC VÀ ĐÀO TẠO<br>
              <strong>TRƯỜNG THPT CHUYÊN EDU</strong><br>
              <em>Mã đề thi: 102</em>
            </td>
            <td class="text-center" style="width: 55%;">
              <strong>ĐỀ KIỂM TRA ĐÁNH GIÁ NĂNG LỰC</strong><br>
              NĂM HỌC 2026 - 2027<br>
              Môn: <strong>${asn.subject.toUpperCase()}</strong> - Lớp ${asn.classTarget}<br>
              <em>Thời gian làm bài: ${asn.durationMinutes} phút</em>
            </td>
          </tr>
        </table>

        <div class="border-bottom text-center">
          <h2 style="margin: 0; font-size: 16pt;">${asn.title.toUpperCase()}</h2>
          <p style="margin: 5px 0 0; font-style: italic;">(Họ và tên thí sinh: ................................................................ Số báo danh: ................)</p>
        </div>

        <div class="content">
          ${asn.questions.map((q, idx) => `
            <div class="question-box">
              <div class="bold">Câu ${idx + 1}: ${q.question}</div>
              <div class="options-grid">
                <div><strong>A.</strong> ${q.options[0]}</div>
                <div><strong>B.</strong> ${q.options[1]}</div>
                <div><strong>C.</strong> ${q.options[2]}</div>
                <div><strong>D.</strong> ${q.options[3]}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <div style="margin-top: 40px; page-break-before: auto;">
          <h3 style="font-size: 13pt; text-align: center;">--- HẾT ---</h3>
          <h4 style="margin-top: 30px; font-size: 12pt;">BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT (DÀNH CHO GIÁO VIÊN):</h4>
          <table class="answer-key-table">
            <tr>
              ${asn.questions.map((_, i) => `<th>Câu ${i + 1}</th>`).join("")}
            </tr>
            <tr>
              ${asn.questions.map(q => `<td><strong>${["A", "B", "C", "D"][q.correctIndex]}</strong></td>`).join("")}
            </tr>
          </table>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    this.toast("Đã xuất bản đề thi chuẩn in ấn/Word!", "fa-file-word");
  }

  // Export Slide PPTX Outline (inspired by pptx-official skill)
  exportLessonToPPTX(lessonId) {
    const lsn = this.lessons.find(l => l.id === lessonId);
    if (!lsn) return;

    this.playSound("click");
    const outlineText = `
=== ĐỀ CƯƠNG BÀI GIẢNG POWERPOINT (EDUSMART PPTX EXPORT) ===
Tiêu đề: ${lsn.title}
Môn học: ${lsn.subject}
Giảng viên: ${lsn.author}
Thời lượng dự kiến: ${lsn.duration}

--- CÁC SLIDE TRÌNH CHIẾU ---
Slide 1: Trang bìa (Tiêu đề, Giảng viên, Logo EduSmart)
${lsn.slideOutline.map((s, idx) => `Slide ${idx + 2}: ${s}`).join("\n")}
Slide ${lsn.slideOutline.length + 2}: Tổng kết bài học & Bài tập về nhà
============================================================
    `.trim();

    // Trigger download of txt/pptx outline
    const blob = new Blob([outlineText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Slide-Bai-Giang-${lsn.subject}-${lsn.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);

    this.toast(`Đã xuất đề cương Slide cho bài "${lsn.title}"`, "fa-file-powerpoint");
  }

  // Student Quiz Taking Engine
  startStudentQuiz(assignmentId) {
    const asn = this.assignments.find(a => a.id === assignmentId);
    if (!asn) return;

    this.activeQuizState = {
      assignment: asn,
      selectedAnswers: new Array(asn.questions.length).fill(null),
      remainingSeconds: asn.durationMinutes * 60,
      startTime: Date.now()
    };

    const modal = document.getElementById("modal-take-quiz");
    if (!modal) return;

    document.getElementById("quiz-modal-title").textContent = asn.title;
    this.renderQuizQuestions();
    this.openModal("modal-take-quiz");

    // Start countdown
    clearInterval(this.quizTimerInterval);
    this.updateTimerDisplay();
    this.quizTimerInterval = setInterval(() => {
      this.activeQuizState.remainingSeconds--;
      this.updateTimerDisplay();
      if (this.activeQuizState.remainingSeconds <= 0) {
        clearInterval(this.quizTimerInterval);
        this.submitStudentQuiz(true);
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById("quiz-countdown-timer");
    if (!timerEl || !this.activeQuizState) return;
    const m = Math.floor(this.activeQuizState.remainingSeconds / 60);
    const s = this.activeQuizState.remainingSeconds % 60;
    timerEl.textContent = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    if (this.activeQuizState.remainingSeconds <= 60) {
      timerEl.style.color = "var(--danger)";
    }
  }

  renderQuizQuestions() {
    const container = document.getElementById("quiz-questions-body");
    if (!container || !this.activeQuizState) return;

    const { questions } = this.activeQuizState.assignment;
    container.innerHTML = questions.map((q, qIdx) => `
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-4">
        <h4 class="font-bold text-slate-800 text-sm mb-3">
          Câu ${qIdx + 1}: ${q.question}
        </h4>
        <div class="space-y-2">
          ${q.options.map((opt, optIdx) => `
            <label class="flex items-center gap-3 p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-primary-400 transition-colors">
              <input type="radio" name="quiz_q_${qIdx}" value="${optIdx}" onchange="app.recordQuizAnswer(${qIdx}, ${optIdx})" class="w-4 h-4 text-primary-600">
              <span class="text-xs font-medium text-slate-700"><strong>${["A", "B", "C", "D"][optIdx]}.</strong> ${opt}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  recordQuizAnswer(questionIndex, optionIndex) {
    if (!this.activeQuizState) return;
    this.activeQuizState.selectedAnswers[questionIndex] = optionIndex;
    this.playSound("click");
  }

  submitStudentQuiz(auto = false) {
    clearInterval(this.quizTimerInterval);
    if (!this.activeQuizState) return;

    const { assignment, selectedAnswers, startTime } = this.activeQuizState;
    const curStd = this.students.find(s => s.id === this.currentStudentId) || this.students[0];
    const durationSpentMinutes = Math.max(1, Math.round((Date.now() - startTime) / 60000));

    // Calculate score
    let correctCount = 0;
    const wrongTopics = [];
    assignment.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      } else {
        wrongTopics.push(q.question);
      }
    });

    const finalScore = Math.round((correctCount / assignment.questions.length) * 10);

    // AI Feedback Generator (inspired by ai-agents-architect)
    let aiFeedback = "";
    if (finalScore === 10) {
      aiFeedback = `Xuất sắc! ${curStd.name} đã trả lời đúng toàn bộ ${assignment.questions.length} câu hỏi. Kỹ năng tư duy logic và nắm kiến thức bài này rất vững!`;
    } else if (finalScore >= 7) {
      aiFeedback = `Khá tốt! Em đạt ${finalScore}/10. Hãy xem lại phần câu hỏi bị sai để khắc phục hoàn toàn lỗ hổng nhé.`;
    } else {
      aiFeedback = `Cố gắng hơn nhé! Em cần ôn tập lại phần lý thuyết cơ bản của ${assignment.subject} và có thể bấm hỏi Gia sư AI EduSmart để được hướng dẫn chi tiết.`;
    }

    const newSub = {
      id: `sub-${Date.now()}`,
      assignmentId: assignment.id,
      assignmentTitle: assignment.title,
      studentId: curStd.id,
      studentName: curStd.name,
      studentAvatar: curStd.avatar,
      submittedAt: "Vừa xong",
      timeSpentMinutes: durationSpentMinutes,
      score: finalScore,
      maxScore: 10,
      answers: selectedAnswers,
      aiFeedback,
      weakTopics: wrongTopics
    };

    this.submissions.unshift(newSub);
    this.saveStorage("edusmart_submissions", this.submissions);

    // Reward stars for taking the test
    const starReward = finalScore >= 8 ? 15 : 10;
    curStd.stars += starReward;
    curStd.streak += 1;
    this.saveStorage("edusmart_students", this.students);

    this.closeModal("modal-take-quiz");
    this.playSound("success");
    this.toast(`Đã nộp bài! Em đạt ${finalScore}/10 và được thưởng +${starReward}⭐!`, "fa-award");

    this.activeQuizState = null;
    this.renderStudentView();
    this.render();
  }

  // View Submission Detail Modal
  viewSubmissionDetail(subId) {
    const sub = this.submissions.find(s => s.id === subId);
    if (!sub) return;

    const modal = document.getElementById("modal-submission-detail");
    if (!modal) return;

    document.getElementById("sub-detail-student").textContent = sub.studentName;
    document.getElementById("sub-detail-title").textContent = sub.assignmentTitle;
    document.getElementById("sub-detail-score").textContent = `${sub.score}/${sub.maxScore} điểm`;
    document.getElementById("sub-detail-ai-feedback").textContent = sub.aiFeedback;

    this.openModal("modal-submission-detail");
  }

  openVideoLessonModal(lessonId) {
    const lsn = this.lessons.find(l => l.id === lessonId);
    if (!lsn) return;

    const modal = document.getElementById("modal-video-lesson");
    if (!modal) return;

    document.getElementById("video-modal-title").textContent = lsn.title;
    document.getElementById("video-modal-desc").textContent = lsn.desc;
    const iframe = document.getElementById("lesson-video-iframe");
    if (iframe) iframe.src = lsn.videoUrl;

    this.openModal("modal-video-lesson");
  }

  deleteAssignment(asnId) {
    if (confirm("Thầy/Cô có chắc chắn muốn xóa bài kiểm tra này?")) {
      this.assignments = this.assignments.filter(a => a.id !== asnId);
      this.saveStorage("edusmart_assignments", this.assignments);
      this.toast("Đã xóa bài kiểm tra", "fa-trash");
      this.render();
    }
  }

  previewAssignment(asnId) {
    const asn = this.assignments.find(a => a.id === asnId);
    if (!asn) return;
    alert(`ĐỀ THI: ${asn.title}\nSố câu: ${asn.questions.length}\nThời gian: ${asn.durationMinutes} phút\n\nCâu 1: ${asn.questions[0]?.question || "Chưa có"}`);
  }

  // AI Tutor Chatbot Drawer
  initAITutorChat() {
    const chatInput = document.getElementById("ai-chat-input");
    const chatSendBtn = document.getElementById("ai-chat-send-btn");
    const chatHistory = document.getElementById("ai-chat-history");

    const sendMessage = (text) => {
      const msg = text || (chatInput ? chatInput.value.trim() : "");
      if (!msg) return;
      if (chatInput) chatInput.value = "";

      // Append user msg
      const userBubble = document.createElement("div");
      userBubble.className = "chat-message user";
      userBubble.innerHTML = `
        <div class="chat-bubble">${msg}</div>
        <div class="chat-avatar bg-primary-600 text-white"><i class="fa-solid fa-user"></i></div>
      `;
      chatHistory.appendChild(userBubble);
      chatHistory.scrollTop = chatHistory.scrollHeight;

      this.playSound("click");

      // Generate AI response
      const botBubble = document.createElement("div");
      botBubble.className = "chat-message bot";
      botBubble.innerHTML = `
        <div class="chat-avatar bg-indigo-500 text-white"><i class="fa-solid fa-robot"></i></div>
        <div class="chat-bubble"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Gia sư AI (${this.selectedModel}) đang suy nghĩ...</div>
      `;
      chatHistory.appendChild(botBubble);
      chatHistory.scrollTop = chatHistory.scrollHeight;

      (async () => {
        try {
          let reply = "";
          if (this.geminiApiKey) {
            const resp = await this.callGeminiWithFallback(msg, "Bạn là Gia sư AI EduSmart thân thiện, thông thái, sư phạm, kiên nhẫn giải thích từng bước cho học sinh Việt Nam theo chương trình GDPT mới.");
            reply = resp.text;
          } else {
            // Simulated fallback
            await new Promise(r => setTimeout(r, 600));
            const lower = msg.toLowerCase();
            if (lower.includes("parabol") || lower.includes("hàm số bậc hai")) {
              reply = "Hàm số bậc hai có dạng tổng quát là **y = ax² + bx + c (a ≠ 0)**. Trọng tâm cần nhớ: Tọa độ đỉnh **I(-b/2a; -Δ/4a)** và Trục đối xứng **x = -b/2a**. Khi a > 0 bề lõm quay lên trên (có giá trị nhỏ nhất), khi a < 0 bề lõm quay xuống dưới (có giá trị lớn nhất).";
            } else if (lower.includes("tiếng anh") || lower.includes("hiện tại hoàn thành")) {
              reply = "Thì **Hiện tại hoàn thành (Present Perfect)** dùng để diễn tả hành động xảy ra trong quá khứ kéo dài đến hiện tại hoặc vừa mới xảy ra để lại kết quả. Dấu hiệu cốt lõi: *since + mốc thời gian* (since 2020), *for + khoảng thời gian* (for 5 years), *already, yet, just*.";
            } else if (lower.includes("ma sát")) {
              reply = "Có 3 loại lực ma sát: **Ma sát nghỉ** (giữ vật không bị trượt khi có lực kéo), **Ma sát trượt** (xuất hiện khi vật trượt, công thức F_mst = μ.N) và **Ma sát lăn**. Chú ý hệ số ma sát μ không có đơn vị.";
            } else {
              reply = `Chào em! Thầy là Gia sư AI EduSmart. Với câu hỏi "${msg}", thầy khuyên em phân tích từng giả thiết, chia nhỏ bài toán thành các bước logic cơ bản. Em có thể nhập API Key trên Header để thầy giải đáp trực tiếp theo thời gian thực nhé!`;
            }
          }

          botBubble.querySelector(".chat-bubble").innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          chatHistory.scrollTop = chatHistory.scrollHeight;
          this.playSound("success");
        } catch (err) {
          // AI_INSTRUCTIONS.md requirement 31, 32: Raw error message & Đã dừng do lỗi
          botBubble.querySelector(".chat-bubble").innerHTML = `
            <div class="text-rose-700">
              <span class="status-stopped-error mb-1.5"><i class="fa-solid fa-circle-xmark mr-1"></i> Đã dừng do lỗi</span>
              <p class="font-mono text-xs mt-1">Lỗi API: ${err.message}</p>
            </div>
          `;
          chatHistory.scrollTop = chatHistory.scrollHeight;
          this.playSound("click");
        }
      })();
    };

    chatSendBtn?.addEventListener("click", () => sendMessage());
    chatInput?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    // Chips click
    document.querySelectorAll(".chat-chip").forEach(chip => {
      chip.addEventListener("click", (e) => {
        sendMessage(e.currentTarget.textContent.trim());
      });
    });
  }

  // Backup & Restore
  exportBackupJSON() {
    const backupData = {
      version: "1.0",
      exportDate: new Date().toISOString(),
      students: this.students,
      assignments: this.assignments,
      submissions: this.submissions,
      lessons: this.lessons,
      weaknesses: this.weaknesses
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `edusmart-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.toast("Đã xuất file sao lưu hệ thống!", "fa-download");
  }

  importBackupJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.students && data.assignments) {
          this.students = data.students;
          this.assignments = data.assignments;
          this.submissions = data.submissions || [];
          this.lessons = data.lessons || [];
          this.weaknesses = data.weaknesses || [];

          this.saveStorage("edusmart_students", this.students);
          this.saveStorage("edusmart_assignments", this.assignments);
          this.saveStorage("edusmart_submissions", this.submissions);
          this.saveStorage("edusmart_lessons", this.lessons);
          this.saveStorage("edusmart_weaknesses", this.weaknesses);

          this.toast("Khôi phục dữ liệu từ bản sao lưu thành công!", "fa-circle-check");
          this.closeModal("modal-backup");
          this.render();
        } else {
          alert("File sao lưu không hợp lệ.");
        }
      } catch (err) {
        alert("Lỗi đọc file JSON sao lưu.");
      }
    };
    reader.readAsText(file);
  }
}

// Global instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new EduSmartApp();
});
