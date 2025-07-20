export interface PersonalityResult {
  type: string;
  description: string;
  dominantFunction: string;
  auxiliaryFunction: string;
  tertiaryFunction: string;
  inferiorFunction: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
}

export function calculatePersonalityType(answers: string[]): PersonalityResult {
  // Count cognitive functions
  const functionCounts = {
    Te: 0, Ti: 0, Fe: 0, Fi: 0,
    Ne: 0, Ni: 0, Se: 0, Si: 0
  };

  answers.forEach(answer => {
    if (functionCounts.hasOwnProperty(answer)) {
      functionCounts[answer as keyof typeof functionCounts]++;
    }
  });

  // Determine dominant function
  const sortedFunctions = Object.entries(functionCounts)
    .sort(([,a], [,b]) => b - a);

  const dominantFunction = sortedFunctions[0][0];
  
  // Define personality types based on dominant function
  const personalityTypes: Record<string, PersonalityResult> = {
    Te: {
      type: "ENTJ - القائد الاستراتيجي",
      description: "قائد طبيعي يركز على تحقيق الأهداف والكفاءة. يتمتع برؤية استراتيجية واضحة ومهارات تنظيمية عالية.",
      dominantFunction: "Te - التفكير الخارجي",
      auxiliaryFunction: "Ni - الحدس الداخلي", 
      tertiaryFunction: "Se - الإحساس الخارجي",
      inferiorFunction: "Fi - المشاعر الداخلية",
      characteristics: [
        "قيادي بالفطرة ومنظم",
        "يركز على النتائج والكفاءة",
        "يضع خطط استراتيجية واضحة",
        "مباشر في التواصل",
        "يحب التحديات الكبيرة"
      ],
      strengths: [
        "قدرة قيادية عالية",
        "كفاءة في تنظيم الأعمال",
        "رؤية استراتيجية واضحة",
        "قدرة على اتخاذ قرارات سريعة",
        "محفز للآخرين"
      ],
      challenges: [
        "قد يتجاهل مشاعر الآخرين",
        "نفاد الصبر مع البطء",
        "صعوبة في التعبير عن المشاعر",
        "قد يبدو متسلطاً أحياناً"
      ]
    },
    Ti: {
      type: "INTP - المفكر المنطقي",
      description: "محلل عميق يحب فهم كيفية عمل الأشياء. يتمتع بقدرة عالية على التفكير المنطقي والنقدي.",
      dominantFunction: "Ti - التفكير الداخلي",
      auxiliaryFunction: "Ne - الحدس الخارجي",
      tertiaryFunction: "Si - الإحساس الداخلي", 
      inferiorFunction: "Fe - المشاعر الخارجية",
      characteristics: [
        "محلل ومفكر عميق",
        "يحب فهم النظريات والمفاهيم",
        "مستقل في تفكيره",
        "يقدر الدقة والمنطق",
        "متحفظ اجتماعياً"
      ],
      strengths: [
        "قدرة تحليلية عالية",
        "تفكير منطقي ونقدي",
        "قدرة على حل المشاكل المعقدة",
        "استقلالية في التفكير",
        "دقة في التفاصيل"
      ],
      challenges: [
        "صعوبة في التعبير عن المشاعر",
        "قد يكون غير عملي أحياناً",
        "يميل للمماطلة",
        "صعوبة في القيادة الاجتماعية"
      ]
    },
    Fe: {
      type: "ENFJ - المعلم الملهم",
      description: "شخص اجتماعي يهتم بمساعدة الآخرين على النمو. يتمتع بكاريزما طبيعية وقدرة على فهم الآخرين.",
      dominantFunction: "Fe - المشاعر الخارجية",
      auxiliaryFunction: "Ni - الحدس الداخلي",
      tertiaryFunction: "Se - الإحساس الخارجي",
      inferiorFunction: "Ti - التفكير الداخلي",
      characteristics: [
        "اجتماعي ومهتم بالآخرين",
        "يلهم ويحفز من حوله",
        "حساس لمشاعر الآخرين",
        "يحب مساعدة الناس",
        "كاريزمي وجذاب"
      ],
      strengths: [
        "مهارات اجتماعية عالية",
        "قدرة على فهم الآخرين",
        "كاريزما طبيعية",
        "قدرة على التحفيز والإلهام",
        "تعاطف عالي"
      ],
      challenges: [
        "قد يهمل حاجاته الشخصية",
        "حساسية مفرطة للنقد",
        "صعوبة في قول 'لا'",
        "قد يتحمل أعباء الآخرين"
      ]
    },
    Fi: {
      type: "INFP - الوسيط المثالي",
      description: "شخص مثالي يقودته قيمه الداخلية. يسعى للأصالة والمعنى في كل ما يفعل.",
      dominantFunction: "Fi - المشاعر الداخلية",
      auxiliaryFunction: "Ne - الحدس الخارجي",
      tertiaryFunction: "Si - الإحساس الداخلي",
      inferiorFunction: "Te - التفكير الخارجي",
      characteristics: [
        "مثالي ومدفوع بالقيم",
        "أصيل وصادق مع نفسه",
        "مبدع وخيالي",
        "يحب المعنى والعمق",
        "متعاطف ومتفهم"
      ],
      strengths: [
        "أصالة وإخلاص للقيم",
        "إبداع وخيال واسع",
        "تعاطف عميق",
        "قدرة على رؤية الجمال",
        "مرونة وانفتاح"
      ],
      challenges: [
        "صعوبة في اتخاذ قرارات عملية",
        "حساسية مفرطة للنقد",
        "ميل للمثالية المفرطة",
        "صعوبة في المواجهة"
      ]
    },
    Ne: {
      type: "ENFP - الحماسي الملهم",
      description: "شخص حماسي ومفعم بالطاقة. يرى إمكانيات لا نهائية ويحب استكشاف الأفكار الجديدة.",
      dominantFunction: "Ne - الحدس الخارجي",
      auxiliaryFunction: "Fi - المشاعر الداخلية",
      tertiaryFunction: "Te - التفكير الخارجي",
      inferiorFunction: "Si - الإحساس الداخلي",
      characteristics: [
        "حماسي ومفعم بالطاقة",
        "يرى إمكانيات متعددة",
        "اجتماعي ومحب للناس",
        "مبدع ومبتكر",
        "متفائل ومتحمس"
      ],
      strengths: [
        "إبداع وابتكار عالي",
        "طاقة وحماس معدي",
        "قدرة على رؤية الإمكانيات",
        "مهارات اجتماعية ممتازة",
        "مرونة وتكيف"
      ],
      challenges: [
        "صعوبة في إنهاء المشاريع",
        "ملل من الروتين",
        "صعوبة في التركيز طويل المدى",
        "إهمال التفاصيل العملية"
      ]
    },
    Ni: {
      type: "INTJ - المخطط الاستراتيجي",
      description: "عقل استراتيجي يركز على المستقبل. يتمتع برؤية واضحة وقدرة على تحويل الأفكار إلى واقع.",
      dominantFunction: "Ni - الحدس الداخلي",
      auxiliaryFunction: "Te - التفكير الخارجي",
      tertiaryFunction: "Fi - المشاعر الداخلية",
      inferiorFunction: "Se - الإحساس الخارجي",
      characteristics: [
        "استراتيجي وبعيد النظر",
        "مستقل ومكتفي ذاتياً",
        "يركز على المستقبل",
        "محلل ومنطقي",
        "واثق من نفسه"
      ],
      strengths: [
        "رؤية استراتيجية واضحة",
        "قدرة على التخطيط طويل المدى",
        "استقلالية في التفكير",
        "كفاءة في تنفيذ الخطط",
        "قدرة على رؤية الصورة الكبيرة"
      ],
      challenges: [
        "قد يبدو متكبراً أحياناً",
        "صعوبة في التعامل مع التفاصيل",
        "نفاد الصبر مع الآخرين",
        "صعوبة في التعبير عن المشاعر"
      ]
    },
    Se: {
      type: "ESTP - المقامر المرن",
      description: "شخص عملي ومرن يعيش في اللحظة. يتمتع بقدرة عالية على التكيف وحل المشاكل السريعة.",
      dominantFunction: "Se - الإحساس الخارجي", 
      auxiliaryFunction: "Ti - التفكير الداخلي",
      tertiaryFunction: "Fe - المشاعر الخارجية",
      inferiorFunction: "Ni - الحدس الداخلي",
      characteristics: [
        "عملي ومتكيف",
        "يعيش في اللحظة الحالية",
        "مرن وسريع التفكير",
        "اجتماعي ونشط",
        "يحب المغامرة والإثارة"
      ],
      strengths: [
        "مرونة عالية وقدرة على التكيف",
        "قدرة على حل المشاكل السريعة",
        "طاقة وحيوية عالية",
        "مهارات عملية ممتازة",
        "جرأة في المخاطرة"
      ],
      challenges: [
        "صعوبة في التخطيط طويل المدى",
        "نفاد الصبر مع النظريات",
        "قد يتصرف بتهور أحياناً",
        "صعوبة في التركيز على المهام المملة"
      ]
    },
    Si: {
      type: "ISTJ - الحارس المسؤول",
      description: "شخص موثوق ومسؤول يقدر التقاليد والاستقرار. يتمتع بذاكرة قوية وقدرة على العمل بدقة.",
      dominantFunction: "Si - الإحساس الداخلي",
      auxiliaryFunction: "Te - التفكير الخارجي", 
      tertiaryFunction: "Fi - المشاعر الداخلية",
      inferiorFunction: "Ne - الحدس الخارجي",
      characteristics: [
        "موثوق ومسؤول",
        "يقدر التقاليد والاستقرار",
        "دقيق ومنظم",
        "صبور ومثابر",
        "عملي وواقعي"
      ],
      strengths: [
        "موثوقية وإخلاص عالي",
        "دقة في العمل والتفاصيل",
        "قدرة على التنظيم",
        "ذاكرة قوية للتفاصيل",
        "صبر ومثابرة"
      ],
      challenges: [
        "مقاومة للتغيير",
        "صعوبة في قبول الأفكار الجديدة",
        "قد يفتقر للمرونة",
        "صعوبة في التعبير عن المشاعر"
      ]
    }
  };

  // Return the personality type based on dominant function
  // If Te or Ti is dominant, check for thinking types
  if (dominantFunction === "Te") {
    if (functionCounts.Ni > functionCounts.Si) {
      return personalityTypes.Te; // ENTJ
    } else {
      return {
        ...personalityTypes.Te,
        type: "ESTJ - المدير التنفيذي",
        auxiliaryFunction: "Si - الإحساس الداخلي"
      };
    }
  }
  
  if (dominantFunction === "Ti") {
    if (functionCounts.Ne > functionCounts.Se) {
      return personalityTypes.Ti; // INTP
    } else {
      return {
        ...personalityTypes.Ti,
        type: "ISTP - الحرفي الماهر",
        auxiliaryFunction: "Se - الإحساس الخارجي"
      };
    }
  }

  // Similar logic for other functions...
  return personalityTypes[dominantFunction] || personalityTypes.Te;
}