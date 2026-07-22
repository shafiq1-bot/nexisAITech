import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  BrainCircuit, 
  Download, 
  RotateCcw,
  Building2,
  Lock,
  Cpu,
  Layers,
  FileCheck
} from 'lucide-react';
import { AssessmentResult, Region } from '../types';
import { assessmentQuestionsData } from '../data/companyData';

interface AIReadinessAssessmentProps {
  currentRegion: Region;
  onOpenConsultation: (notes?: string) => void;
}

export const AIReadinessAssessment: React.FC<AIReadinessAssessmentProps> = ({
  currentRegion,
  onOpenConsultation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  const currentQ = assessmentQuestionsData[currentStep];

  const handleSelectOption = (questionId: number, score: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleNext = () => {
    if (currentStep < assessmentQuestionsData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = async () => {
    setSubmitting(true);

    try {
      const res = await fetch('/api/assessment-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: selectedAnswers,
          companyName: companyName || 'Enterprise Client',
          clientEmail: email,
          region: currentRegion,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult({
          score: data.overallScore,
          maturityLevel: data.maturityLevel,
          categoryScores: data.categoryScores,
          recommendations: data.executiveRecommendations,
          priorityActions: [
            'Establish an enterprise vector database and RAG infrastructure',
            'Enforce zero trust RBAC policies before opening AI API keys',
            'Draft formal AI Governance & Ethical Guidelines for all employees',
            'Form an internal AI Center of Excellence with quarterly auditing',
          ],
        });
      }
    } catch (err) {
      console.error('Assessment evaluation error:', err);
      // Fallback calculation
      const scoresArr: number[] = Object.values(selectedAnswers);
      const sum = scoresArr.reduce((acc: number, curr: number) => acc + curr, 0);
      const avg = Math.round(sum / (scoresArr.length || 1));
      setResult({
        score: avg,
        maturityLevel: avg >= 80 ? 'Enterprise Leader' : avg >= 60 ? 'Accelerated' : 'Emerging',
        categoryScores: { Strategy: avg, Data: avg, Security: avg },
        recommendations: [
          'Standardize internal RAG pipelines',
          'Audit third-party AI tools for HIPAA/FERPA compliance',
        ],
        priorityActions: ['Schedule Discovery Audit with Nexis Advisor'],
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetAssessment = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  return (
    <section className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950 border border-purple-800 px-3.5 py-1 rounded-full">
            Free Enterprise Benchmark Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            AI Readiness & Maturity Scorecard
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Evaluate your organization’s AI strategy, data architecture, security boundaries, and governance maturity in 3 minutes.
          </p>
        </div>

        {!result ? (
          /* Question Stepper */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>Dimension {currentStep + 1} of {assessmentQuestionsData.length}: <strong className="text-purple-300">{currentQ.category}</strong></span>
                <span className="font-mono">{Math.round(((currentStep + 1) / assessmentQuestionsData.length) * 100)}% Completed</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / assessmentQuestionsData.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {currentQ.question}
              </h3>

              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, opt.score)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-purple-950/80 border-purple-500 text-white shadow-lg shadow-purple-950/50 ring-1 ring-purple-500'
                          : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'border-purple-400 bg-purple-500 text-white' : 'border-slate-700'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="font-semibold leading-relaxed">{opt.label}</div>
                        {isSelected && (
                          <div className="text-xs text-purple-300 mt-1.5 font-mono">
                            💡 Diagnostic Feedback: {opt.feedback}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer"
              >
                Previous Dimension
              </button>

              <button
                onClick={handleNext}
                disabled={selectedAnswers[currentQ.id] === undefined || submitting}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                id="assessment-next-btn"
              >
                <span>{currentStep === assessmentQuestionsData.length - 1 ? 'Generate Scorecard' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Scorecard Results Dashboard */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8 animate-in fade-in duration-300">
            
            {/* Score Summary Header */}
            <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-blue-950/80 border border-purple-800/80 rounded-xl p-6 text-center relative overflow-hidden">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-300">
                Official Enterprise AI Scorecard Result
              </div>
              
              <div className="my-4 flex items-center justify-center gap-4">
                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-mono">
                  {result.score} <span className="text-2xl text-slate-400 font-normal">/ 100</span>
                </div>
              </div>

              <div className="inline-block bg-purple-900/90 text-purple-200 border border-purple-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Maturity Bracket: {result.maturityLevel}
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-purple-400" />
                  <span>Executive AI Recommendations</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {result.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Immediate 90-Day Action Roadmap</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {result.priorityActions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Request Full Audit & Download Report */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-4">
              <h4 className="text-base font-bold text-white">
                Want a Customized Executive AI Roadmap for your Organization?
              </h4>
              <p className="text-xs text-slate-400 max-w-lg mx-auto">
                Schedule a complimentary 30-minute discovery briefing with our senior AI architects to review your scorecard and receive a tailored implementation plan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultation(`AI Readiness Scorecard Result: ${result.score}/100 (${result.maturityLevel})`)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Book Discovery Session with Nexis Architect
                </button>

                <button
                  onClick={resetAssessment}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
