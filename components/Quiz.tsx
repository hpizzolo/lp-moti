
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { QUIZ_QUESTIONS, COLORS } from '../constants';

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIdx: number) => {
    const newAnswers = [...answers, optionIdx];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const isAllPositive = answers.every(idx => idx === 0);

    if (isAllPositive) {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-fade-in max-w-xl mx-auto border-t-4 border-green-500">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Sua Instituição está no caminho certo!</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Parabéns! Sua gestão demonstra um excelente nível de conformidade. No entanto, o cenário de 2026 exige **preparação imediata no Q1** para garantir que você chegue ao Q4 com blindagem total e sem imprevistos de última hora.
          </p>
          <button
            onClick={() => document.getElementById('budget')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#fa3a40] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg"
          >
            Garantir Blindagem Q1
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-fade-in max-w-xl mx-auto border-t-4 border-[#fa3a40]">
        <AlertCircle className="w-16 h-16 text-[#fa3a40] mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">Sua Instituição está em Alerta!</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Baseado em suas respostas, existem brechas que podem comprometer sua auditoria em 2026.
          O Motí EAD pode blindar esses pontos críticos em menos de 30 dias.
        </p>
        <button
          onClick={() => document.getElementById('budget')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#fa3a40] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-[#fa3a40]/20"
        >
          Solicitar Diagnóstico Gratuito
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto border-t-4 border-[#fa3a40]">
      <div className="mb-6">
        <span className="text-xs font-bold text-[#fa3a40] uppercase tracking-widest">
          Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
        </span>
        <h3 className="text-xl font-bold mt-2">{QUIZ_QUESTIONS[currentStep].text}</h3>
      </div>
      <div className="space-y-3">
        {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-[#6589b2] hover:bg-gray-50 transition-all flex items-center justify-between group"
          >
            <span className="font-medium">{option}</span>
            <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-[#fa3a40]" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
