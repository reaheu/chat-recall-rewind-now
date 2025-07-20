import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, ChevronDown, ChevronUp } from "lucide-react";

interface CognitiveFunctionsProps {
  onBack: () => void;
}

const CognitiveFunctions = ({ onBack }: CognitiveFunctionsProps) => {
  const [expandedFunction, setExpandedFunction] = useState<string | null>(null);

  const cognitiveFunctions = [
    {
      id: "Te",
      name: "التفكير الخارجي (Te)",
      category: "تفكير",
      description: "يركز على تنظيم العالم الخارجي بطريقة منطقية وعملية",
      characteristics: [
        "يحب وضع خطط واضحة ومحددة",
        "يركز على الكفاءة والنتائج",
        "يفضل القرارات السريعة والعملية",
        "يحب تنظيم الأشخاص والموارد",
        "يقيس النجاح بالإنجازات الملموسة"
      ],
      strengths: [
        "قيادة فعالة وتنظيم ممتاز",
        "قدرة على تحقيق الأهداف بكفاءة",
        "مهارات إدارية قوية"
      ],
      weaknesses: [
        "قد يتجاهل مشاعر الآخرين",
        "قد يكون متسرعاً في القرارات",
        "صعوبة في التعامل مع الغموض"
      ]
    },
    {
      id: "Ti", 
      name: "التفكير الداخلي (Ti)",
      category: "تفكير",
      description: "يركز على فهم الأنظمة والمبادئ المنطقية بعمق",
      characteristics: [
        "يحب التحليل العميق والدقيق",
        "يسعى لفهم كيفية عمل الأشياء",
        "يفضل المنطق على السرعة",
        "يحب الاستقلالية في التفكير",
        "يقدر الدقة والصحة المنطقية"
      ],
      strengths: [
        "تحليل عميق ودقيق",
        "قدرة على حل المشاكل المعقدة",
        "تفكير نقدي ممتاز"
      ],
      weaknesses: [
        "قد يكون بطيئاً في اتخاذ القرارات",
        "صعوبة في التواصل مع الآخرين",
        "قد يتجاهل العوامل العملية"
      ]
    },
    {
      id: "Fe",
      name: "المشاعر الخارجية (Fe)",
      category: "مشاعر",
      description: "يركز على خلق الانسجام والاهتمام بمشاعر الآخرين",
      characteristics: [
        "حساس لمشاعر ومزاج الآخرين",
        "يسعى لخلق الانسجام الاجتماعي",
        "يحب مساعدة الناس والاهتمام بهم",
        "يتأثر بالمشاعر الجماعية",
        "يفضل القرارات التي تراعي الجميع"
      ],
      strengths: [
        "مهارات اجتماعية ممتازة",
        "قدرة على فهم وتحفيز الآخرين",
        "خلق بيئة إيجابية ومريحة"
      ],
      weaknesses: [
        "قد يهمل حاجاته الشخصية",
        "صعوبة في اتخاذ قرارات صعبة",
        "حساسية مفرطة للنقد"
      ]
    },
    {
      id: "Fi",
      name: "المشاعر الداخلية (Fi)",
      category: "مشاعر",
      description: "يركز على القيم الشخصية والأصالة الداخلية",
      characteristics: [
        "مدفوع بالقيم والمبادئ الشخصية",
        "يسعى للأصالة والصدق مع النفس",
        "حساس ومتعاطف بعمق",
        "يحب المعنى والهدف في الحياة",
        "يفضل الاستقلالية العاطفية"
      ],
      strengths: [
        "إخلاص عميق للقيم والمبادئ",
        "تعاطف حقيقي وعميق",
        "قدرة على رؤية الخير في الآخرين"
      ],
      weaknesses: [
        "صعوبة في التعبير عن المشاعر",
        "قد يكون مثالياً أكثر من اللازم",
        "حساسية للانتقاد الشخصي"
      ]
    },
    {
      id: "Ne",
      name: "الحدس الخارجي (Ne)",
      category: "حدس",
      description: "يركز على استكشاف الإمكانيات والأفكار الجديدة",
      characteristics: [
        "يرى إمكانيات متعددة في كل موقف",
        "يحب الأفكار الجديدة والابتكار",
        "متحمس للتجارب والمغامرات",
        "يربط بين مفاهيم مختلفة بسهولة",
        "يفضل المرونة على الخطط الثابتة"
      ],
      strengths: [
        "إبداع وابتكار عالي",
        "قدرة على رؤية الفرص الجديدة",
        "حماس معدي ومحفز للآخرين"
      ],
      weaknesses: [
        "صعوبة في إنهاء المشاريع",
        "ملل من الروتين والتفاصيل",
        "قد يكون غير واقعي أحياناً"
      ]
    },
    {
      id: "Ni",
      name: "الحدس الداخلي (Ni)",
      category: "حدس",
      description: "يركز على فهم الأنماط العميقة والرؤى المستقبلية",
      characteristics: [
        "لديه رؤية واضحة للمستقبل",
        "يفهم الأنماط المعقدة بسهولة",
        "يحب التفكير الاستراتيجي",
        "يركز على الصورة الكبيرة",
        "يثق في حدسه الداخلي"
      ],
      strengths: [
        "رؤية استراتيجية عميقة",
        "قدرة على التنبؤ والتخطيط",
        "فهم عميق للأنماط المعقدة"
      ],
      weaknesses: [
        "قد يتجاهل التفاصيل المهمة",
        "صعوبة في شرح أفكاره للآخرين",
        "قد يبدو متكبراً أو منعزلاً"
      ]
    },
    {
      id: "Se",
      name: "الإحساس الخارجي (Se)",
      category: "إحساس",
      description: "يركز على اللحظة الحالية والتجارب الحسية المباشرة",
      characteristics: [
        "يعيش في اللحظة الحالية",
        "يحب التجارب الحسية والمغامرات",
        "سريع في الاستجابة للمواقف",
        "يتكيف بسهولة مع التغييرات",
        "يفضل العمل العملي على النظري"
      ],
      strengths: [
        "مرونة عالية وسرعة في التكيف",
        "قدرة على الاستمتاع باللحظة",
        "مهارات عملية ممتازة"
      ],
      weaknesses: [
        "صعوبة في التخطيط طويل المدى",
        "قد يتصرف بتهور أحياناً",
        "ملل من المهام النظرية"
      ]
    },
    {
      id: "Si",
      name: "الإحساس الداخلي (Si)",
      category: "إحساس",
      description: "يركز على التجارب السابقة والتفاصيل المحفوظة",
      characteristics: [
        "يقدر التقاليد والاستقرار",
        "لديه ذاكرة قوية للتفاصيل",
        "يحب الروتين والنظام",
        "يعتمد على التجارب السابقة",
        "دقيق ومنهجي في العمل"
      ],
      strengths: [
        "موثوقية عالية ودقة في العمل",
        "ذاكرة ممتازة للتفاصيل",
        "قدرة على الحفاظ على التقاليد"
      ],
      weaknesses: [
        "مقاومة للتغيير والجديد",
        "قد يفتقر للمرونة",
        "صعوبة في رؤية الإمكانيات الجديدة"
      ]
    }
  ];

  const categoryColors = {
    "تفكير": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "مشاعر": "bg-pink-500/20 text-pink-300 border-pink-500/30", 
    "حدس": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "إحساس": "bg-green-500/20 text-green-300 border-green-500/30"
  };

  return (
    <div className="min-h-screen p-4" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center mb-8 pt-8">
          <Button
            onClick={onBack}
            variant="hero"
            className="text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة
          </Button>
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">الوظائف الإدراكية الثمانية</h1>
          </div>
        </div>

        {/* Introduction */}
        <Card className="glass-card mb-8 shadow-xl">
          <CardContent className="pt-6">
            <p className="text-white leading-relaxed text-lg">
              الوظائف الإدراكية هي الطرق الأساسية التي نستخدمها في معالجة المعلومات واتخاذ القرارات. 
              كل شخص يستخدم جميع الوظائف الثمانية، لكن بدرجات متفاوتة وبترتيب مختلف. 
              فهم هذه الوظائف يساعدك على فهم شخصيتك وشخصيات الآخرين بشكل أعمق.
            </p>
          </CardContent>
        </Card>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cognitiveFunctions.map((func) => (
            <Card key={func.id} className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge className={categoryColors[func.category as keyof typeof categoryColors]}>
                      {func.category}
                    </Badge>
                    <CardTitle className="text-xl text-white">
                      {func.name}
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedFunction(
                      expandedFunction === func.id ? null : func.id
                    )}
                    className="text-white hover:bg-white/10"
                  >
                    {expandedFunction === func.id ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </Button>
                </div>
                <p className="text-slate-200 leading-relaxed">
                  {func.description}
                </p>
              </CardHeader>
              
              {expandedFunction === func.id && (
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {/* Characteristics */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 ml-2 text-primary" />
                        الخصائص الرئيسية
                      </h4>
                      <div className="space-y-2">
                        {func.characteristics.map((char, index) => (
                          <div key={index} className="text-slate-200 text-sm bg-white/5 p-2 rounded">
                            • {char}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strengths & Weaknesses */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">نقاط القوة</h5>
                        <div className="space-y-1">
                          {func.strengths.map((strength, index) => (
                            <div key={index} className="text-slate-200 text-sm">
                              ✓ {strength}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-orange-400 font-semibold mb-2">التحديات</h5>
                        <div className="space-y-1">
                          {func.weaknesses.map((weakness, index) => (
                            <div key={index} className="text-slate-200 text-sm">
                              ⚠ {weakness}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <Card className="glass-card mt-8 shadow-xl">
          <CardContent className="pt-6 text-center">
            <p className="text-white/80 leading-relaxed">
              💡 <strong>تذكر:</strong> لا توجد وظيفة أفضل من أخرى. كل وظيفة لها قيمتها وأهميتها. 
              الهدف هو فهم كيف تعمل هذه الوظائف معاً لتشكل شخصيتك الفريدة.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CognitiveFunctions;