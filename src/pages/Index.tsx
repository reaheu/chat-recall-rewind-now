import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PersonalityTest from "@/components/PersonalityTest";
import CognitiveFunctions from "@/components/CognitiveFunctions";
import { 
  Brain, 
  Users, 
  Target, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  Star,
  CheckCircle,
  ArrowLeft
} from "lucide-react";

const Index = () => {
  const [showTest, setShowTest] = useState(false);
  const [showFunctions, setShowFunctions] = useState(false);

  if (showTest) {
    return <PersonalityTest onBack={() => setShowTest(false)} />;
  }

  if (showFunctions) {
    return <CognitiveFunctions onBack={() => setShowFunctions(false)} />;
  }

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-8 backdrop-blur-sm shadow-2xl">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            اكتشف نمطك الشخصي
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            اختبار شامل مبني على الوظائف الإدراكية الثمانية لتحديد نمط شخصيتك بدقة عالية وفقاً لمقياس مايرز-بريجز
          </p>
          
          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20">
              <Target className="w-5 h-5 text-primary mr-2" />
              <span className="text-white font-medium">60+ سؤال متخصص</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20">
              <Clock className="w-5 h-5 text-accent mr-2" />
              <span className="text-white font-medium">15 دقيقة فقط</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">نتائج دقيقة ومفصلة</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => setShowTest(true)}
              variant="gradient"
              size="lg"
              className="text-xl px-12 py-4 h-auto"
            >
              ابدأ الاختبار الآن
              <ChevronRight className="w-6 h-6 mr-2" />
            </Button>
            <Button
              onClick={() => setShowFunctions(true)}
              variant="hero"
              size="lg"
              className="text-xl px-12 py-4 h-auto"
            >
              تعرف على الوظائف الإدراكية
              <Brain className="w-6 h-6 mr-2" />
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">مبني على العلم</h3>
              <p className="text-slate-200 leading-relaxed">
                يعتمد على نظرية الوظائف الإدراكية الثمانية التي طورها كارل يونغ وطورتها إيزابيل مايرز
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">16 نمط شخصي</h3>
              <p className="text-slate-200 leading-relaxed">
                اكتشف واحداً من 16 نمط شخصي مختلف، كل نمط له خصائصه ونقاط قوته وتحدياته الفريدة
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">نتائج شخصية</h3>
              <p className="text-slate-200 leading-relaxed">
                احصل على تحليل مفصل لشخصيتك يشمل نقاط القوة والتحديات والخصائص الرئيسية
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">كيف يعمل الاختبار؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">أجب على الأسئلة</h3>
              <p className="text-slate-200">
                أجب على 60+ سؤال مصمم لقياس الوظائف الإدراكية الثمانية
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">تحليل النتائج</h3>
              <p className="text-slate-200">
                يتم تحليل إجاباتك لتحديد ترتيب الوظائف الإدراكية لديك
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">اكتشف نمطك</h3>
              <p className="text-slate-200">
                احصل على نمط شخصيتك مع تفسير مفصل وتوصيات شخصية
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <Card className="glass-card shadow-2xl mb-16">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ماذا ستتعلم عن نفسك؟</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">أسلوبك في التفكير</h4>
                    <p className="text-slate-200 text-sm">كيف تعالج المعلومات وتتخذ القرارات</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">نقاط قوتك الطبيعية</h4>
                    <p className="text-slate-200 text-sm">المهارات والقدرات التي تتميز بها</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">أسلوبك في التواصل</h4>
                    <p className="text-slate-200 text-sm">كيف تتفاعل مع الآخرين وتبني العلاقات</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">التحديات الشخصية</h4>
                    <p className="text-slate-200 text-sm">المجالات التي يمكنك العمل على تطويرها</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">الوظائف الإدراكية</h4>
                    <p className="text-slate-200 text-sm">ترتيب الوظائف الثمانية حسب أولويتك</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">فهم أعمق لذاتك</h4>
                    <p className="text-slate-200 text-sm">رؤى قيمة حول دوافعك وسلوكياتك</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            مستعد لاكتشاف شخصيتك الحقيقية؟
          </h2>
          <Button
            onClick={() => setShowTest(true)}
            variant="gradient"
            size="lg"
            className="text-2xl px-16 py-6 h-auto mb-8"
          >
            ابدأ الاختبار مجاناً
            <Sparkles className="w-8 h-8 mr-3" />
          </Button>
          <p className="text-slate-300 text-lg">
            ⏱️ يستغرق حوالي 15 دقيقة • 📊 نتائج فورية ومفصلة • 🔒 آمن ومجاني 100%
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-24 pt-12 border-t border-white/10">
          <p className="text-slate-400 text-sm mb-4">
            <strong>ملاحظة مهمة:</strong> هذا الاختبار لأغراض التعلم والاستكشاف الشخصي وليس تشخيصاً علمياً دقيقاً
          </p>
          <p className="text-slate-500 text-xs">
            صُنع بـ ❤️ لمساعدة الناس على فهم أنفسهم بشكل أفضل
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
