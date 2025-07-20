import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  RotateCcw, 
  Star, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Target,
  AlertTriangle,
  Share,
  Download
} from "lucide-react";
import { calculatePersonalityType } from "@/utils/personalityCalculator";

interface TestResultsProps {
  answers: string[];
  onRestart: () => void;
}

const TestResults = ({ answers, onRestart }: TestResultsProps) => {
  const result = calculatePersonalityType(answers);

  const handleShare = () => {
    const shareText = `حصلت على نتيجة: ${result.type} في اختبار الأنماط الشخصية MBTI! 🧠✨`;
    if (navigator.share) {
      navigator.share({
        title: 'نتيجة اختبار الشخصية',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.href);
    }
  };

  return (
    <div className="min-h-screen p-4" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-8">
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">نتائج اختبار الشخصية</h1>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleShare}
              variant="hero"
              size="sm"
            >
              <Share className="w-4 h-4 ml-2" />
              مشاركة
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10"
            >
              <RotateCcw className="w-5 h-5 ml-2" />
              إعادة الاختبار
            </Button>
          </div>
        </div>

        {/* Main Result */}
        <Card className="glass-card mb-8 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent p-1">
            <div className="bg-background/95 rounded-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  {result.type}
                </CardTitle>
                <p className="text-slate-200 text-lg leading-relaxed max-w-2xl mx-auto">
                  {result.description}
                </p>
              </CardHeader>
            </div>
          </div>
        </Card>

        {/* Function Order Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Actual Function Order */}
          <Card className="glass-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Brain className="w-6 h-6 ml-2 text-primary" />
                ترتيب الوظائف حسب إجاباتك
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.actualFunctionOrder.map((func, index) => (
                  <div key={func.function} className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">#{index + 1}</span>
                      <div className="text-left">
                        <p className="text-white font-medium">{func.name}</p>
                        <p className="text-primary text-sm">نقاط: {func.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Theoretical Order */}
          <Card className="glass-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Target className="w-6 h-6 ml-2 text-accent" />
                الترتيب النظري لنمط {result.type.split(' ')[0]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-1">المهيمنة</h4>
                  <p className="text-white text-sm">{result.theoreticalFunctionOrder.dominant}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-1">المساعدة</h4>
                  <p className="text-white text-sm">{result.theoreticalFunctionOrder.auxiliary}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-1">الثالثة</h4>
                  <p className="text-white text-sm">{result.theoreticalFunctionOrder.tertiary}</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <h4 className="font-semibold text-accent mb-1">الأدنى</h4>
                  <p className="text-white text-sm">{result.theoreticalFunctionOrder.inferior}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Function Comparison */}
        <Card className="glass-card mb-8 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <TrendingUp className="w-6 h-6 ml-2 text-green-400" />
              مقارنة الترتيب الفعلي والنظري
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.functionComparison.map((comp, index) => (
                <div key={comp.function} className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">{comp.name}</p>
                      <p className="text-sm text-gray-300">
                        فعلي: #{comp.actualRank} | نظري: #{comp.theoreticalRank}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      comp.difference === 0 ? 'bg-green-500/20 text-green-400' :
                      Math.abs(comp.difference) === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {comp.difference === 0 ? 'مطابق' : 
                       comp.difference > 0 ? `+${comp.difference}` : `${comp.difference}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Characteristics */}
          <Card className="glass-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <Star className="w-5 h-5 ml-2 text-yellow-400" />
                الخصائص الرئيسية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.characteristics.map((characteristic, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="w-full justify-start p-3 text-sm bg-secondary/20 text-white border-secondary/30"
                  >
                    {characteristic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strengths */}
          <Card className="glass-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <TrendingUp className="w-5 h-5 ml-2 text-green-400" />
                نقاط القوة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Target className="w-4 h-4 text-green-400 mt-0.5 mr-2" />
                    <span className="text-white text-sm leading-relaxed">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="glass-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <AlertTriangle className="w-5 h-5 ml-2 text-orange-400" />
                التحديات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-orange-400 mt-0.5 mr-2" />
                    <span className="text-white text-sm leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Note */}
        <Card className="glass-card shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center text-white/80">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-white">ملاحظة مهمة</h3>
              <p className="text-sm leading-relaxed max-w-3xl mx-auto">
                هذا الاختبار لأغراض التعلم والاستكشاف الشخصي وليس تشخيصاً علمياً دقيقاً. 
                النتائج قد تتأثر بالحالة المزاجية والظروف الشخصية. 
                ننصح بمراجعة مختصين لفهم أعمق للشخصية والسلوك البشري.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8 mb-8">
          <Button
            onClick={onRestart}
            variant="gradient"
            size="lg"
            className="text-lg px-8 py-3"
          >
            <RotateCcw className="w-5 h-5 ml-2" />
            جرب الاختبار مرة أخرى
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;