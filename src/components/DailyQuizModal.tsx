import React, { useState, useEffect } from 'react';
import { Verse, Hadith, QuizQuestion } from '../types';
import { getQuizForDay } from '../data/quizData';
import { useDailyStore } from '../store/useDailyStore';
import { triggerHaptic } from '../utils/haptics';
import { IslamicLogo } from './IslamicLogo';
import { formatReadableDate, getEstimatedHijriDate } from '../utils/dateUtils';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  BookOpen,
  Check
} from 'lucide-react';

interface DailyQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  verse: Verse;
  hadith: Hadith;
  dateStr: string;
}

export const DailyQuizModal: React.FC<DailyQuizModalProps> = ({
  isOpen,
  onClose,
  verse,
  hadith,
  dateStr
}) => {
  const { saveQuizResult, getProgressForDate } = useDailyStore();
  const progress = getProgressForDate(dateStr);

  const [fontSizeMode, setFontSizeMode] = useState<'compact' | 'standard' | 'large'>('standard');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const qList = getQuizForDay(verse, hadith);
      setQuestions(qList);
      setCurrentIndex(0);
      setSelectedAnswers({});
      setShowExplanation(false);
      setIsFinished(false);
    }
  }, [isOpen, verse, hadith, dateStr]);

  if (!isOpen || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const dateObj = new Date(dateStr + 'T00:00:00');
  const hijri = getEstimatedHijriDate(dateObj);
  const dateFormatted = formatReadableDate(dateStr);

  const isAnswered = selectedAnswers[currentIndex] !== undefined;
  const currentSelected = selectedAnswers[currentIndex];
  const isCorrect = isAnswered && currentSelected === currentQ.correctIndex;

  // Calculate score
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    triggerHaptic(index === currentQ.correctIndex ? 'success' : 'light');
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: index }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    triggerHaptic('light');
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      const finalScore = calculateScore();
      saveQuizResult(dateStr, finalScore, questions.length);
      setIsFinished(true);
      triggerHaptic('success');
    }
  };

  const handleRestart = () => {
    triggerHaptic('medium');
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const handleShareResult = async () => {
    triggerHaptic('medium');
    const score = calculateScore();
    const shareText = `🎯 Daily Noor Quiz Result • روزانہ اسلامی کوئز
📅 ${hijri.formatted} (${dateFormatted.english})
🏆 Score: ${score}/${questions.length} (${Math.round((score / questions.length) * 100)}%)

آج کا قرآنی و نبوی کوئز مکمل کیا! آپ بھی حصہ لیں:
✨ Daily Noor App — Seek Light in Quran & Sunnah Every Day`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Noor Islamic Quiz Result',
          text: shareText
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch (err) {
        console.warn('Share error:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch {}
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#0C1813] text-[#E8EFEA] rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#C9A227]/40 relative my-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#C9A227]/20 shrink-0">
          <div className="flex items-center gap-2.5">
            <IslamicLogo size={36} variant="shield" />
            <div>
              <h3 className="text-base font-bold text-[#E8EFEA] flex items-center gap-1.5">
                <span>Daily Quiz</span>
                <span className="text-xs font-urdu text-[#E5C76B]">روزانہ اسلامی کوئز</span>
              </h3>
              <p className="text-[11px] text-[#96A89F] flex items-center gap-1.5">
                <span className="font-urdu" dir="rtl">{hijri.formatted}</span>
                <span>•</span>
                <span>{dateFormatted.english}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Text Size Switcher */}
            {!isFinished && (
              <div className="flex items-center bg-[#142820] p-0.5 rounded-xl border border-[#C9A227]/30 text-[10px] font-semibold">
                <button
                  type="button"
                  title="Compact Text (چھوٹا متن)"
                  onClick={() => {
                    triggerHaptic('light');
                    setFontSizeMode('compact');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    fontSizeMode === 'compact'
                      ? 'bg-[#C9A227] text-[#0C1813] font-bold shadow-xs'
                      : 'text-[#96A89F] hover:text-white'
                  }`}
                >
                  A-
                </button>
                <button
                  type="button"
                  title="Standard Text (معیاری متن)"
                  onClick={() => {
                    triggerHaptic('light');
                    setFontSizeMode('standard');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    fontSizeMode === 'standard'
                      ? 'bg-[#C9A227] text-[#0C1813] font-bold shadow-xs'
                      : 'text-[#96A89F] hover:text-white'
                  }`}
                >
                  A
                </button>
                <button
                  type="button"
                  title="Large Text (بڑا متن)"
                  onClick={() => {
                    triggerHaptic('light');
                    setFontSizeMode('large');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    fontSizeMode === 'large'
                      ? 'bg-[#C9A227] text-[#0C1813] font-bold shadow-xs'
                      : 'text-[#96A89F] hover:text-white'
                  }`}
                >
                  A+
                </button>
              </div>
            )}

            <button
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              className="p-2 rounded-xl text-[#96A89F] hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- IN-PROGRESS QUIZ SCREEN --- */}
        {!isFinished ? (
          <div className="flex-1 overflow-y-auto max-h-[calc(90vh-130px)] pt-3.5 space-y-3.5 pr-1">
            
            {/* Step Progress Pills */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E5C76B] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Question {currentIndex + 1} of {questions.length}</span>
              </span>

              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0B5D3C] text-[#FDF3CD] border border-[#C9A227]/40 font-semibold max-w-[200px] truncate text-right">
                {currentQ.reference}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#142820] h-1.5 rounded-full overflow-hidden border border-white/5">
              <div 
                className="bg-gradient-to-r from-[#0B5D3C] to-[#C9A227] h-full transition-all duration-300"
                style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Card Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#142820] border border-[#C9A227]/30 shadow-md text-right" dir="rtl">
              <p className={`font-urdu font-bold text-[#F5F1E8] leading-relaxed break-words whitespace-normal ${
                fontSizeMode === 'compact' 
                  ? 'text-sm sm:text-base' 
                  : fontSizeMode === 'large' 
                  ? 'text-lg sm:text-xl' 
                  : 'text-base sm:text-lg'
              }`}>
                {currentQ.questionUrdu}
              </p>
              <p className={`font-sans text-[#96A89F] mt-1.5 text-left break-words whitespace-normal ${
                fontSizeMode === 'compact' 
                  ? 'text-[11px]' 
                  : fontSizeMode === 'large' 
                  ? 'text-xs sm:text-sm' 
                  : 'text-xs'
              }`} dir="ltr">
                {currentQ.questionEn}
              </p>
            </div>

            {/* 4 Multiple Choice Options */}
            <div className="space-y-2">
              {currentQ.options.map((option, idx) => {
                const isThisSelected = currentSelected === idx;
                const isThisCorrect = idx === currentQ.correctIndex;
                const isLongOption = option.length > 45;

                let btnStyle = 'bg-[#10221A] text-[#E8EFEA] border-[#0B5D3C]/40 hover:border-[#C9A227]/60 hover:bg-[#142C22]';

                if (isAnswered) {
                  if (isThisCorrect) {
                    btnStyle = 'bg-emerald-950/90 text-emerald-200 border-emerald-500 shadow-md shadow-emerald-900/30';
                  } else if (isThisSelected && !isThisCorrect) {
                    btnStyle = 'bg-rose-950/90 text-rose-200 border-rose-500';
                  } else {
                    btnStyle = 'bg-[#10221A]/50 text-[#96A89F]/50 border-white/5';
                  }
                }

                // Dynamic text size per option
                let optionTextClass = 'text-xs sm:text-sm';
                if (fontSizeMode === 'compact') {
                  optionTextClass = isLongOption ? 'text-[11px] sm:text-xs' : 'text-xs';
                } else if (fontSizeMode === 'large') {
                  optionTextClass = isLongOption ? 'text-xs sm:text-sm' : 'text-sm sm:text-base';
                } else {
                  optionTextClass = isLongOption ? 'text-[11.5px] sm:text-xs md:text-sm' : 'text-xs sm:text-sm';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-2.5 sm:p-3 rounded-xl border text-right transition-all flex items-start justify-between gap-2.5 font-medium ${btnStyle}`}
                    dir="rtl"
                  >
                    <div className="flex items-start gap-2.5 flex-1 min-w-0 text-right">
                      <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold shrink-0 mt-0.5 ${
                        isAnswered && isThisCorrect 
                          ? 'bg-emerald-600 text-white' 
                          : isAnswered && isThisSelected 
                          ? 'bg-rose-600 text-white' 
                          : 'bg-[#183428] text-[#E5C76B]'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className={`font-urdu leading-relaxed break-words whitespace-normal flex-1 text-right ${optionTextClass}`}>
                        {option}
                      </span>
                    </div>

                    {isAnswered && (
                      <div className="shrink-0 mt-0.5">
                        {isThisCorrect ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                        ) : isThisSelected ? (
                          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box (Reveals upon answering) */}
            {showExplanation && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-[#C9A227]/30 text-right animate-in fade-in duration-200" dir="rtl">
                <div className="flex items-center gap-1.5 text-xs font-bold mb-1">
                  {isCorrect ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>صحیح جواب! ما شاء اللہ</span>
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>درست جواب جان لیجیے:</span>
                    </span>
                  )}
                </div>
                <p className={`font-urdu text-[#E2EBE5] leading-relaxed break-words whitespace-normal ${
                  fontSizeMode === 'compact' ? 'text-xs' : 'text-xs sm:text-sm'
                }`}>
                  {currentQ.explanationUrdu}
                </p>
              </div>
            )}

            {/* Next / Finish Button */}
            {isAnswered && (
              <div className="pt-2 flex justify-end pb-1">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md shadow-[#C9A227]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* --- QUIZ RESULT SCREEN --- */
          <div className="py-6 text-center space-y-4">
            
            {/* Trophy / Score Avatar */}
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-b from-[#C9A227] to-[#0B5D3C] p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0C1813] flex flex-col items-center justify-center">
                <Award className="w-8 h-8 text-[#E5C76B]" />
              </div>
            </div>

            {/* Score & Praise */}
            <div>
              <span className="text-3xl font-black text-[#E5C76B]">
                {calculateScore()} / {questions.length}
              </span>
              <p className="font-urdu text-lg font-bold text-[#F5F1E8] mt-1">
                {calculateScore() === questions.length 
                  ? 'سبحان اللہ! ما شاء اللہ! شاندار کارکردگی' 
                  : calculateScore() >= 2 
                  ? 'ما شاء اللہ! بہت عمدہ کوشش' 
                  : 'بہترین کوشش! علم میں برکت ہو'}
              </p>
              <p className="text-xs text-[#96A89F] mt-0.5">
                You scored {Math.round((calculateScore() / questions.length) * 100)}% on today's spiritual reflection quiz.
              </p>
            </div>

            {/* Reflection Badge */}
            <div className="p-3.5 rounded-2xl bg-[#142820] border border-[#C9A227]/30 text-xs text-[#CFDDD5] space-y-1">
              <p className="font-semibold text-[#E5C76B] flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Daily Knowledge & Reflection Saved</span>
              </p>
              <p className="font-urdu text-xs leading-relaxed">
                روزانہ قرآن و سنت پر غور و فکر اور فہم حاصل کرنا دائمی نور کا ذریعہ ہے۔
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              <button
                onClick={handleShareResult}
                className="px-4 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#B38E1E] text-[#0C1813] font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                {shareSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Shared!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share Score</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRestart}
                className="px-4 py-2.5 rounded-xl bg-[#142820] hover:bg-[#1A342A] text-[#E8EFEA] border border-[#C9A227]/30 font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4 text-[#E5C76B]" />
                <span>Retake</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
