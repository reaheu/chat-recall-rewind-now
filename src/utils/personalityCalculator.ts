export interface CognitiveFunctionScore {
  function: string;
  name: string;
  score: number;
}

export interface PersonalityResult {
  type: string;
  description: string;
  actualFunctionOrder: CognitiveFunctionScore[];
  theoreticalFunctionOrder: {
    dominant: string;
    auxiliary: string;
    tertiary: string;
    inferior: string;
  };
  functionComparison: {
    function: string;
    name: string;
    actualRank: number;
    theoreticalRank: number;
    difference: number;
  }[];
  characteristics: string[];
  strengths: string[];
  challenges: string[];
}

const functionNames = {
  Te: "التفكير الخارجي",
  Ti: "التفكير الداخلي", 
  Fe: "المشاعر الخارجية",
  Fi: "المشاعر الداخلية",
  Ne: "الحدس الخارجي",
  Ni: "الحدس الداخلي",
  Se: "الإحساس الخارجي",
  Si: "الإحساس الداخلي"
};

const personalityTypes = {
  "ENTJ": {
    type: "ENTJ - القائد الاستراتيجي",
    description: "قائد طبيعي يركز على تحقيق الأهداف والكفاءة. يتمتع برؤية استراتيجية واضحة ومهارات تنظيمية عالية.",
    theoreticalOrder: { dominant: "Te", auxiliary: "Ni", tertiary: "Se", inferior: "Fi" },
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
  "ESTJ": {
    type: "ESTJ - المدير التنفيذي",
    description: "منظم عملي يركز على تحقيق النتائج والكفاءة. يقدر النظام والتقاليد ويعمل بجد لتحقيق الأهداف.",
    theoreticalOrder: { dominant: "Te", auxiliary: "Si", tertiary: "Ne", inferior: "Fi" },
    characteristics: [
      "منظم ومسؤول",
      "يركز على النتائج العملية",
      "يقدر التقاليد والنظام",
      "مباشر وواضح في التواصل",
      "يحب العمل في فريق منظم"
    ],
    strengths: [
      "قدرة تنظيمية عالية",
      "كفاءة في إدارة المشاريع",
      "موثوقية وإخلاص",
      "قدرة على اتخاذ قرارات سريعة",
      "مهارات قيادية عملية"
    ],
    challenges: [
      "قد يقاوم التغيير",
      "صعوبة في التعامل مع المشاعر",
      "قد يكون صارماً أحياناً",
      "نفاد الصبر مع الأفكار غير العملية"
    ]
  },
  "INTP": {
    type: "INTP - المفكر المنطقي",
    description: "محلل عميق يحب فهم كيفية عمل الأشياء. يتمتع بقدرة عالية على التفكير المنطقي والنقدي.",
    theoreticalOrder: { dominant: "Ti", auxiliary: "Ne", tertiary: "Si", inferior: "Fe" },
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
  "ISTP": {
    type: "ISTP - الحرفي الماهر",
    description: "عملي ومرن يحب العمل بيديه وحل المشاكل. يتمتع بقدرة على التكيف والعمل تحت الضغط.",
    theoreticalOrder: { dominant: "Ti", auxiliary: "Se", tertiary: "Ni", inferior: "Fe" },
    characteristics: [
      "عملي ومهاري",
      "مستقل ومرن",
      "يحب العمل بيديه",
      "هادئ ومتحفظ",
      "يفضل التعلم بالممارسة"
    ],
    strengths: [
      "مهارات عملية عالية",
      "قدرة على حل المشاكل التقنية",
      "مرونة وقدرة على التكيف",
      "هدوء تحت الضغط",
      "استقلالية في العمل"
    ],
    challenges: [
      "صعوبة في التعبير عن المشاعر",
      "قد يتجنب المسؤوليات الاجتماعية",
      "صعوبة في التخطيط طويل المدى",
      "قد يبدو غير مبال أحياناً"
    ]
  },
  "ENFJ": {
    type: "ENFJ - المعلم الملهم",
    description: "شخص اجتماعي يهتم بمساعدة الآخرين على النمو. يتمتع بكاريزما طبيعية وقدرة على فهم الآخرين.",
    theoreticalOrder: { dominant: "Fe", auxiliary: "Ni", tertiary: "Se", inferior: "Ti" },
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
  "ESFJ": {
    type: "ESFJ - المساعد المخلص",
    description: "شخص اجتماعي ومهتم برعاية الآخرين. يقدر الانسجام والتقاليد ويسعى لخلق بيئة إيجابية.",
    theoreticalOrder: { dominant: "Fe", auxiliary: "Si", tertiary: "Ne", inferior: "Ti" },
    characteristics: [
      "اجتماعي ومهتم بالآخرين",
      "يقدر التقاليد والانسجام",
      "مسؤول وموثوق",
      "يحب مساعدة الناس",
      "منظم في الأمور الاجتماعية"
    ],
    strengths: [
      "مهارات اجتماعية ممتازة",
      "إخلاص وموثوقية عالية",
      "قدرة على رعاية الآخرين",
      "تنظيم الأحداث الاجتماعية",
      "حفظ التقاليد والقيم"
    ],
    challenges: [
      "قد يهمل حاجاته الشخصية",
      "حساسية للنقد والصراع",
      "صعوبة في قول 'لا'",
      "قد يقاوم التغيير"
    ]
  },
  "INFP": {
    type: "INFP - الوسيط المثالي",
    description: "شخص مثالي يقودته قيمه الداخلية. يسعى للأصالة والمعنى في كل ما يفعل.",
    theoreticalOrder: { dominant: "Fi", auxiliary: "Ne", tertiary: "Si", inferior: "Te" },
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
  "ISFP": {
    type: "ISFP - الفنان الحساس",
    description: "شخص حساس وفني يقدر الجمال والأصالة. يتمتع بروح هادئة ورغبة في العيش وفق قيمه.",
    theoreticalOrder: { dominant: "Fi", auxiliary: "Se", tertiary: "Ni", inferior: "Te" },
    characteristics: [
      "حساس وفني",
      "يقدر الجمال والأصالة",
      "هادئ ومتأمل",
      "مرن ومتكيف",
      "يحب الطبيعة والفن"
    ],
    strengths: [
      "حس فني وإبداعي عالي",
      "تعاطف ولطف",
      "مرونة وقدرة على التكيف",
      "أصالة في التعبير",
      "حب للجمال والطبيعة"
    ],
    challenges: [
      "صعوبة في المواجهة والصراع",
      "قد يتجنب اتخاذ قرارات صعبة",
      "حساسية مفرطة للنقد",
      "صعوبة في التنظيم والتخطيط"
    ]
  },
  "ENFP": {
    type: "ENFP - الحماسي الملهم",
    description: "شخص حماسي ومفعم بالطاقة. يرى إمكانيات لا نهائية ويحب استكشاف الأفكار الجديدة.",
    theoreticalOrder: { dominant: "Ne", auxiliary: "Fi", tertiary: "Te", inferior: "Si" },
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
  "ENTP": {
    type: "ENTP - المناقش المبدع",
    description: "مبدع ومناقش ماهر يحب تحدي الأفكار التقليدية. يتمتع بذكاء سريع وقدرة على رؤية الصلات.",
    theoreticalOrder: { dominant: "Ne", auxiliary: "Ti", tertiary: "Fe", inferior: "Si" },
    characteristics: [
      "مبدع ومبتكر",
      "يحب المناقشة والجدل",
      "ذكي وسريع البديهة",
      "يتحدى الأفكار التقليدية",
      "اجتماعي ومتفتح"
    ],
    strengths: [
      "إبداع وابتكار عالي",
      "ذكاء وسرعة بديهة",
      "قدرة على المناقشة والإقناع",
      "مرونة في التفكير",
      "رؤية للإمكانيات الجديدة"
    ],
    challenges: [
      "صعوبة في إتمام المشاريع",
      "ملل من الروتين والتفاصيل",
      "قد يتجاهل مشاعر الآخرين",
      "صعوبة في اتباع القواعد"
    ]
  },
  "INTJ": {
    type: "INTJ - المخطط الاستراتيجي",
    description: "عقل استراتيجي يركز على المستقبل. يتمتع برؤية واضحة وقدرة على تحويل الأفكار إلى واقع.",
    theoreticalOrder: { dominant: "Ni", auxiliary: "Te", tertiary: "Fi", inferior: "Se" },
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
  "INFJ": {
    type: "INFJ - المدافع المثالي",
    description: "شخص مثالي يسعى لتحقيق رؤيته لعالم أفضل. يتمتع بحدس قوي وفهم عميق للآخرين.",
    theoreticalOrder: { dominant: "Ni", auxiliary: "Fe", tertiary: "Ti", inferior: "Se" },
    characteristics: [
      "مثالي ورؤيوي",
      "حدسي وبصير",
      "متعاطف ومتفهم",
      "يسعى للمعنى والغرض",
      "هادئ ومتأمل"
    ],
    strengths: [
      "حدس قوي ورؤية واضحة",
      "تعاطف عميق مع الآخرين",
      "قدرة على فهم الأنماط المعقدة",
      "إخلاص للقيم والمبادئ",
      "إبداع في حل المشاكل"
    ],
    challenges: [
      "حساسية مفرطة للنقد",
      "ميل للمثالية المفرطة",
      "صعوبة في المواجهة",
      "قد يهمل حاجاته الشخصية"
    ]
  },
  "ESTP": {
    type: "ESTP - المقامر المرن",
    description: "شخص عملي ومرن يعيش في اللحظة. يتمتع بقدرة عالية على التكيف وحل المشاكل السريعة.",
    theoreticalOrder: { dominant: "Se", auxiliary: "Ti", tertiary: "Fe", inferior: "Ni" },
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
  "ESFP": {
    type: "ESFP - المؤدي المرح",
    description: "شخص مرح واجتماعي يحب الحياة والاستمتاع باللحظة. يتمتع بطاقة إيجابية معدية.",
    theoreticalOrder: { dominant: "Se", auxiliary: "Fi", tertiary: "Te", inferior: "Ni" },
    characteristics: [
      "مرح واجتماعي",
      "يعيش اللحظة ويستمتع بالحياة",
      "عفوي وتلقائي",
      "محب للناس ومتفائل",
      "يحب الأنشطة الجماعية"
    ],
    strengths: [
      "طاقة إيجابية معدية",
      "مهارات اجتماعية ممتازة",
      "مرونة وقدرة على التكيف",
      "تفاؤل وحب للحياة",
      "قدرة على تحفيز الآخرين"
    ],
    challenges: [
      "صعوبة في التركيز طويل المدى",
      "قد يتجنب المسؤوليات الصعبة",
      "حساسية للنقد",
      "صعوبة في التخطيط للمستقبل"
    ]
  },
  "ISTJ": {
    type: "ISTJ - الحارس المسؤول",
    description: "شخص موثوق ومسؤول يقدر التقاليد والاستقرار. يتمتع بذاكرة قوية وقدرة على العمل بدقة.",
    theoreticalOrder: { dominant: "Si", auxiliary: "Te", tertiary: "Fi", inferior: "Ne" },
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
  },
  "ISFJ": {
    type: "ISFJ - المدافع الراعي",
    description: "شخص كريم ومتفاني يهتم برعاية الآخرين. يعمل خلف الكواليس لضمان راحة من حوله.",
    theoreticalOrder: { dominant: "Si", auxiliary: "Fe", tertiary: "Ti", inferior: "Ne" },
    characteristics: [
      "مهتم برعاية الآخرين",
      "متواضع ومتفاني",
      "يعمل خلف الكواليس",
      "موثوق ومخلص",
      "حساس لاحتياجات الآخرين"
    ],
    strengths: [
      "إخلاص وتفاني عالي",
      "حساسية لاحتياجات الآخرين",
      "موثوقية وانضباط",
      "قدرة على العمل الجماعي",
      "صبر وتحمل"
    ],
    challenges: [
      "قد يهمل حاجاته الشخصية",
      "صعوبة في قول 'لا'",
      "حساسية مفرطة للنقد",
      "مقاومة للتغيير"
    ]
  }
};

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

  // Create actual function order (from strongest to weakest)
  const actualFunctionOrder: CognitiveFunctionScore[] = Object.entries(functionCounts)
    .map(([func, score]) => ({
      function: func,
      name: functionNames[func as keyof typeof functionNames],
      score
    }))
    .sort((a, b) => b.score - a.score);

  // Determine personality type based on function pattern
  const dominantFunction = actualFunctionOrder[0].function;
  const auxiliaryFunction = actualFunctionOrder[1].function;
  
  let personalityType = "";
  
  // Determine type based on dominant and auxiliary functions
  if (dominantFunction === "Te") {
    personalityType = auxiliaryFunction === "Ni" ? "ENTJ" : "ESTJ";
  } else if (dominantFunction === "Ti") {
    personalityType = auxiliaryFunction === "Ne" ? "INTP" : "ISTP";
  } else if (dominantFunction === "Fe") {
    personalityType = auxiliaryFunction === "Ni" ? "ENFJ" : "ESFJ";
  } else if (dominantFunction === "Fi") {
    personalityType = auxiliaryFunction === "Ne" ? "INFP" : "ISFP";
  } else if (dominantFunction === "Ne") {
    personalityType = auxiliaryFunction === "Fi" ? "ENFP" : "ENTP";
  } else if (dominantFunction === "Ni") {
    personalityType = auxiliaryFunction === "Te" ? "INTJ" : "INFJ";
  } else if (dominantFunction === "Se") {
    personalityType = auxiliaryFunction === "Ti" ? "ESTP" : "ESFP";
  } else if (dominantFunction === "Si") {
    personalityType = auxiliaryFunction === "Te" ? "ISTJ" : "ISFJ";
  }

  const typeInfo = personalityTypes[personalityType as keyof typeof personalityTypes] || personalityTypes.ENFP;
  
  // Create function comparison
  const theoreticalOrder = [
    typeInfo.theoreticalOrder.dominant,
    typeInfo.theoreticalOrder.auxiliary,
    typeInfo.theoreticalOrder.tertiary,
    typeInfo.theoreticalOrder.inferior
  ];

  const functionComparison = theoreticalOrder.map((func, theoreticalRank) => {
    const actualRank = actualFunctionOrder.findIndex(f => f.function === func);
    return {
      function: func,
      name: functionNames[func as keyof typeof functionNames],
      actualRank: actualRank + 1,
      theoreticalRank: theoreticalRank + 1,
      difference: (actualRank + 1) - (theoreticalRank + 1)
    };
  });

  return {
    type: typeInfo.type,
    description: typeInfo.description,
    actualFunctionOrder,
    theoreticalFunctionOrder: {
      dominant: `${typeInfo.theoreticalOrder.dominant} - ${functionNames[typeInfo.theoreticalOrder.dominant as keyof typeof functionNames]}`,
      auxiliary: `${typeInfo.theoreticalOrder.auxiliary} - ${functionNames[typeInfo.theoreticalOrder.auxiliary as keyof typeof functionNames]}`,
      tertiary: `${typeInfo.theoreticalOrder.tertiary} - ${functionNames[typeInfo.theoreticalOrder.tertiary as keyof typeof functionNames]}`,
      inferior: `${typeInfo.theoreticalOrder.inferior} - ${functionNames[typeInfo.theoreticalOrder.inferior as keyof typeof functionNames]}`
    },
    functionComparison,
    characteristics: typeInfo.characteristics,
    strengths: typeInfo.strengths,
    challenges: typeInfo.challenges
  };
}