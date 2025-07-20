import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Brain, Clock } from "lucide-react";
import { questions } from "@/data/questions";
import TestResults from "./TestResults";

interface PersonalityTestProps {
  onBack: () => void;
}

const PersonalityTest = ({ onBack }: PersonalityTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const estimatedTimeLeft = Math.ceil((questions.length - currentQuestion - 1) * 0.5); // 30 seconds per question

  if (showResults) {
    return <TestResults answers={answers} onRestart={() => {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResults(false);
    }} />;
  }

  return (
    <div className="min-h-screen p-4" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-8">
          <Button
            onClick={onBack}
            variant="hero"
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة
          </Button>
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">اختبار الأنماط الشخصية</h1>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-white mb-3">
            <span className="text-lg font-semibold">
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 ml-1" />
              <span className="text-sm text-blue-200">
                {estimatedTimeLeft} دقيقة متبقية تقريباً
              </span>
            </div>
          </div>
          <Progress 
            value={progress} 
            className="h-3 progress-animated"
          />
          <div className="text-center mt-2">
            <span className="text-blue-200 text-sm">
              {Math.round(progress)}% مكتمل
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="glass-card mb-8 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-white leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option.value)}
                variant="ghost"
                className="w-full p-6 h-auto text-right justify-start bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 text-white transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg leading-relaxed">
                  {option.text}
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="text-white border-white/30 hover:bg-white/10"
          >
            السؤال السابق
          </Button>
          
          <div className="text-center text-white/70">
            <p className="text-sm">
              اختر الإجابة التي تصف شخصيتك بشكل أفضل
            </p>
          </div>
          
          <div className="text-white/50 text-sm">
            {currentQuestion + 1}/{questions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;