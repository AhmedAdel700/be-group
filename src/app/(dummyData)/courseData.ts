import accountingTechniques from "@/app/assets/accountingTechniques.jpg";
import artificialIntelligence from "@/app/assets/artificialIntelligence.jpg";
import digitalmedia from "@/app/assets/digitalmedia.jpg";
import entrepreneurship from "@/app/assets/entrepreneurship.jpg";
import executiveManagement from "@/app/assets/executiveManagement.jpg";
import humanResources from "@/app/assets/humanResources.jpg";
import laborMarket from "@/app/assets/laborMarket.jpeg";
import skillsManagement from "@/app/assets/skillsManagement.jpg";

export const courseData = {
  1: {
    title: "Diploma in Innovation and Entrepreneurship",
    titleAr: "دبلوم الابتكار وريادة الأعمال",
    diploma: "Associate",
    image: entrepreneurship,
    description:
      "This diploma equips students with the knowledge and skills to develop innovative ideas and start their own businesses. It covers key areas such as business planning, market research, funding, and scaling up enterprises in today’s dynamic environment",
    descriptionAr:
      "يزود هذا الدبلوم الطلاب بالمعرفة والمهارات اللازمة لتطوير الأفكار المبتكرة وبدء مشاريعهم الخاصة. يشمل البرنامج مجالات رئيسية مثل التخطيط التجاري، وبحوث السوق، والتمويل، وتوسيع نطاق الأعمال في بيئة اليوم الديناميكية",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
    endDate: "2024-05-15",
    available: true,
    rating: 4.8,
    totalReviews: 245,
    instructor: "Dr. Sarah Johnson",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  2: {
    title: "Diploma in Digital Media and Content Creation",
    titleAr: "دبلوم الإعلام الرقمي وصناعة المحتوي",
    image: digitalmedia,
    description:
      "This program focuses on the creation and management of digital content across various platforms. Students will learn about social media marketing, video production, content writing, and branding, providing them with the skills needed to excel in the digital media industry",
    descriptionAr:
      "يركز هذا البرنامج على إنشاء وإدارة المحتوى الرقمي عبر منصات متعددة. سيتعلم الطلاب عن تسويق وسائل التواصل الاجتماعي، وإنتاج الفيديو، وكتابة المحتوى، وبناء العلامات التجارية، مما يوفر لهم المهارات اللازمة للتفوق في صناعة الإعلام الرقمي",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
    endDate: "2024-06-01",
    available: true,
    rating: 4.7,
    totalReviews: 180,
    instructor: "Dr. Omar El-Sayed",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  3: {
    title: "Executive Management Diploma",
    titleAr: "دبلوم الإدارة التنفيذية",
    image: executiveManagement,
    description:
      "Designed for professionals in leadership roles, this diploma provides advanced knowledge of management practices. It covers strategic planning, organizational behavior, decision-making, and leadership skills that are crucial for managing teams and driving company growth",
    descriptionAr:
      "مصمم للمهنيين في الأدوار القيادية، يوفر هذا الدبلوم معرفة متقدمة بالممارسات الإدارية. يغطي التخطيط الاستراتيجي، وسلوكيات المنظمات، واتخاذ القرارات، والمهارات القيادية الضرورية لإدارة الفرق ودفع نمو الشركات.",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  4: {
    title: "Diploma in Modern Accounting Techniques",
    titleAr: "دبلوم تقنيات المحاسبة الحديثة",
    image: accountingTechniques,
    description:
      "This diploma offers in-depth knowledge of contemporary accounting practices, including financial reporting, auditing, and taxation. Students will be trained in the latest accounting software and techniques to enhance their efficiency in managing financial operations",
    descriptionAr:
      "يقدم هذا الدبلوم معرفة عميقة بالممارسات المحاسبية المعاصرة، بما في ذلك التقارير المالية، والتدقيق، والضرائب. سيتعلم الطلاب استخدام أحدث البرامج المحاسبية والتقنيات لتعزيز كفاءتهم في إدارة العمليات المالية",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  5: {
    title: "Diploma in Human Resources Management",
    titleAr: "دبلوم إدارة الموارد البشرية",
    image: humanResources,
    description:
      "Focused on the management of human capital, this program covers topics such as recruitment, employee relations, performance management, and organizational development. Students will gain the tools necessary to effectively manage HR functions in any organization",
    descriptionAr:
      "يركز هذا البرنامج على إدارة رأس المال البشري، ويغطي مواضيع مثل التوظيف، وعلاقات الموظفين، وإدارة الأداء، والتطوير التنظيمي. سيكتسب الطلاب الأدوات اللازمة لإدارة وظائف الموارد البشرية بفعالية في أي منظمة",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  6: {
    title: "Diploma in Generative Artificial Intelligence",
    titleAr: "دبلوم الذكاء الإصطناعي التوليدي",
    image: artificialIntelligence,
    description:
      "This cutting-edge diploma introduces students to the world of artificial intelligence, focusing on generative models, machine learning, and AI-driven applications. Students will learn how to develop AI tools that can create content, generate ideas, and solve complex problems",
    descriptionAr:
      "يقدم هذا الدبلوم المبتكر للطلاب مقدمة في عالم الذكاء الاصطناعي، مع التركيز على النماذج التوليدية، وتعلم الآلة، وتطبيقات الذكاء الاصطناعي. سيتعلم الطلاب كيفية تطوير أدوات الذكاء الاصطناعي التي يمكنها إنشاء المحتوى، وتوليد الأفكار، وحل المشكلات المعقدة",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "20,000",
    semester: "5,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  7: {
    title: "Diploma in Organizational Skills Management",
    titleAr: "دبلوم إدارة المهارات في المنظمات",
    image: skillsManagement,
    description:
      "This program enhances an individual’s ability to manage teams, resources, and tasks effectively. It covers areas like project management, time management, organizational behavior, and leadership, equipping students to become effective managers in any setting",
    descriptionAr:
      "يعزز هذا البرنامج قدرة الفرد على إدارة الفرق والموارد والمهام بفعالية. يغطي مجالات مثل إدارة المشاريع، وإدارة الوقت، وسلوكيات المنظمات، والقيادة، مما يجهز الطلاب ليصبحوا مدراء فعالين في أي بيئة عمل.",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
  8: {
    title: "Diploma in Labor Market Economics",
    titleAr: "دبلوم إقتصاديات سوق العمل",
    image: laborMarket,
    description:
      "This diploma provides a comprehensive understanding of labor markets, employment policies, and economic trends. Students will study how the labor market functions, the dynamics of supply and demand, and the economic factors that affect employment and wages",
    descriptionAr:
      "يقدم هذا الدبلوم فهماً شاملاً لأسواق العمل، والسياسات العمالية، والاتجاهات الاقتصادية. سيدرس الطلاب كيفية عمل سوق العمل، وديناميكيات العرض والطلب، والعوامل الاقتصادية التي تؤثر على التوظيف والأجور",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
    endDate: "2024-07-01",
    available: false,
    rating: 4.6,
    totalReviews: 95,
    instructor: "Layla Hassan",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    whatYouLearnAr: [
      "ميزات JavaScript ES6+ الحديثة وأفضل الممارسات",
      "أساسيات React.js ومفاهيمها المتقدمة",
      "تطوير الواجهة الخلفية لـ Node.js وExpress.js",
      "تصميم وتشغيل قواعد بيانات MongoDB",
      "تطوير وتكامل واجهات برمجة التطبيقات RESTful",
      "أنظمة المصادقة والتفويض",
      "استراتيجيات النشر وأساسيات DevOps",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    benefitsAr: [
      "أنشئ محفظة متكاملة من المشاريع العملية",
      "اكتسب المهارات المطلوبة في كبرى شركات التكنولوجيا",
      "زد من إمكاناتك في الكسب بنسبة 40-60%",
      "انضم إلى مجتمع يضم أكثر من 10,000 خريج ناجح",
      "احصل على توجيه وإرشاد مهني شخصي",
      "احصل على مساعدة حصرية في التوظيف",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    whoShouldTakeAr: [
      "المبتدئون ذوو المعرفة الأساسية بـ HTML/CSS",
      "مطورو واجهات المستخدم الأمامية الراغبون في تعلم البرمجة الخلفية",
      "الراغبون في تغيير مسارهم المهني ودخول مجال التكنولوجيا",
      "الطلاب الذين يبحثون عن مهارات برمجة عملية",
      "رواد الأعمال الذين يبنون منتجاتهم الخاصة",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        price: 250,
        modules: [
          {
            name: "What Makes a Great Product Decision",
            startDate: "24-8-2025",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "24-8-2025",
          },
          {
            name: "From Discovery to Launch",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        price: 250,
        modules: [
          {
            name: "Smart Pricing Decisions (B2B & B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "Mapping Stakeholders & Aligning Incentives",
            startDate: "2024-04-16",
          },
          {
            name: "Navigating Conflicts and Driving Momentum",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        price: 250,
        modules: [
          {
            name: "Leading Bold Rebrands with Clarity",
            startDate: "2024-05-16",
          },
          {
            name: "When to Kill It – Smart Product Sunsetting",
            startDate: "2024-06-01",
          },
          {
            name: "Spotting Real AI Opportunities in Your Product",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        price: 250,
        modules: [
          {
            name: "Prioritizing AI Bets for Real Impact",
            startDate: "2024-07-01",
          },
          {
            name: "What Makes a Great Product Decision",
            startDate: "2024-07-16",
          },
          {
            name: "Decision Clarity Through Frameworks",
            startDate: "2024-08-01",
          },
        ],
      },
    ],
    semestersAr: [
      {
        id: 1,
        name: "الفصل الدراسي 1: أساسيات الواجهة الأمامية",
        modules: [
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "24-8-2025",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "24-8-2025",
          },
          {
            name: "من الاكتشاف إلى الإطلاق",
            startDate: "2024-03-16",
          },
        ],
      },
      {
        id: 2,
        name: "الفصل الدراسي 2: الواجهة الأمامية المتقدمة",
        modules: [
          {
            name: "قرارات التسعير الذكية (B2B و B2C)",
            startDate: "2024-04-01",
          },
          {
            name: "تحديد أصحاب المصلحة ومزامنة الحوافز",
            startDate: "2024-04-16",
          },
          {
            name: "التنقل في النزاعات ودفع الزخم",
            startDate: "2024-05-01",
          },
        ],
      },
      {
        id: 3,
        name: "الفصل الدراسي 3: تطوير الواجهة الخلفية",
        modules: [
          {
            name: "قيادة إعادة تصميم جريئة بوضوح",
            startDate: "2024-05-16",
          },
          {
            name: "متى نوقفه - إغلاق المنتج الذكي",
            startDate: "2024-06-01",
          },
          {
            name: "اكتشاف فرص الذكاء الاصطناعي الحقيقية في منتجك",
            startDate: "2024-06-16",
          },
        ],
      },
      {
        id: 4,
        name: "الفصل الدراسي 4: دمج الواجهة الأمامية والخلفية",
        modules: [
          {
            name: "تحديد أولويات الرهانات على الذكاء الاصطناعي من أجل تأثير حقيقي",
            startDate: "2024-07-01",
          },
          {
            name: "ما الذي يجعل قرار المنتج رائعاً",
            startDate: "2024-07-16",
          },
          {
            name: "وضوح القرار من خلال الأطر",
            startDate: "2024-08-01",
          },
        ],
      },
    ],

    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    reviewsAr: [
      {
        name: "أحمد حسن",
        rating: 5,
        text: "دورة ممتازة! يشرح المدرب المفاهيم المعقدة بطريقة واضحة جدًا. حصلت على أول وظيفة كمطور بعد إتمام هذه الدورة.",
      },
      {
        name: "ماريا رودريغيز",
        rating: 5,
        text: "أفضل استثمار قمت به على الإطلاق. المشاريع العملية ساعدتني حقًا في فهم كيفية عمل كل شيء معًا في التطبيقات الحقيقية.",
      },
      {
        name: "جيمس ويلسون",
        rating: 4,
        text: "محتوى رائع وهيكل ممتاز. الشيء الوحيد الذي سأحسنه هو إضافة المزيد من الجلسات الحية للبرمجة، ولكن بشكل عام أنا راضٍ جدًا.",
      },
    ],
  },
};

export const courses = [
  {
    id: 1,
    title: "Diploma in Innovation and Entrepreneurship",
    titleAr: "دبلوم الابتكار وريادة الأعمال",
    diploma: "Associate",
    image: entrepreneurship,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
    // students: 1250,
    // rating: 4.8,
    // price: "$299",
    // level: "Intermediate",
  },
  {
    id: 2,
    title: "Diploma in Digital Media and Content Creation",
    titleAr: "دبلوم الإعلام الرقمي وصناعة المحتوي",
    image: digitalmedia,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
  },
  {
    id: 3,
    title: "Executive Management Diploma",
    titleAr: "دبلوم الإدارة التنفيذية",
    image: executiveManagement,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
  },
  {
    id: 4,
    title: "Diploma in Modern Accounting Techniques",
    titleAr: "دبلوم تقنيات المحاسبة الحديثة",
    image: accountingTechniques,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
  },
  {
    id: 5,
    title: "Diploma in Human Resources Management",
    titleAr: "دبلوم إدارة الموارد البشرية",
    image: humanResources,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "16,000",
    semester: "4,000",
  },
  {
    id: 6,
    title: "Diploma in Generative Artificial Intelligence",
    titleAr: "دبلوم الذكاء الإصطناعي التوليدي",
    image: artificialIntelligence,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "Two years",
    durationAr: "عامين",
    AcademicHours: "80 Hours",
    AcademicHoursAR: "80 ساعة",
    ProgramFee: "20,000",
    semester: "5,000",
  },
  {
    id: 7,
    title: "Diploma in Organizational Skills Management",
    titleAr: "دبلوم إدارة المهارات في المنظمات",
    image: skillsManagement,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
  },
  {
    id: 8,
    title: "Diploma in Labor Market Economics",
    titleAr: "دبلوم إقتصاديات سوق العمل",
    image: laborMarket,
    description: "Study Program",
    descriptionAr: "برنامج دراسي",
    startDate: "24-8-2025",
    duration: "One Year",
    durationAr: "عام",
    AcademicHours: "40 Hours",
    AcademicHoursAR: "40 ساعة",
    ProgramFee: "10,000",
    semester: "5,000",
  },
];
