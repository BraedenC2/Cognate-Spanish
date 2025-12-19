import React, { useState } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { Check, X, RefreshCcw, ArrowRight, Trophy } from 'lucide-react';

interface QuizViewProps {
    lesson: Lesson;
    onComplete: (score: number) => void;
    onRetry: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ lesson, onComplete, onRetry }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const question = lesson.quiz[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === lesson.quiz.length - 1;

    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
    };

    const handleCheck = () => {
        setIsAnswered(true);
        if (selectedOption === question.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (isLastQuestion) {
            setShowResult(true);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        }
    };

    if (showResult) {
        const percentage = Math.round((score / lesson.quiz.length) * 100);
        const passed = percentage >= 60;

        return (
            <div className="max-w-xl mx-auto px-4 py-12 text-center h-full flex flex-col justify-center">
                <div className={`
                    w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl
                    ${passed ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}
                `}>
                    <Trophy className="w-12 h-12" />
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {passed ? 'Lesson Complete!' : 'Nice Try!'}
                </h2>
                <p className="text-slate-500 mb-8">
                    You scored {score} out of {lesson.quiz.length} ({percentage}%)
                </p>

                <div className="space-y-3">
                    <button
                        onClick={() => onComplete(percentage)}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        Continue to Next Lesson
                    </button>
                    {!passed && (
                        <button
                            onClick={onRetry}
                            className="w-full py-4 text-slate-600 font-semibold hover:bg-slate-100 rounded-xl transition-colors"
                        >
                            Retry Quiz
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-8 h-full flex flex-col">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8 text-sm font-medium text-slate-400">
                <span>Question {currentQuestionIndex + 1} of {lesson.quiz.length}</span>
                <span className="text-indigo-600">{Math.round(((currentQuestionIndex) / lesson.quiz.length) * 100)}%</span>
            </div>
            
            <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                    className="bg-indigo-600 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / lesson.quiz.length) * 100}%` }}
                />
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 flex-1">
                {question.options.map((option, idx) => {
                    let optionStyle = "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
                    let icon = null;

                    if (isAnswered) {
                        if (option === question.correctAnswer) {
                            optionStyle = "border-green-500 bg-green-50 text-green-700";
                            icon = <Check className="w-5 h-5 text-green-600" />;
                        } else if (option === selectedOption) {
                            optionStyle = "border-red-500 bg-red-50 text-red-700";
                            icon = <X className="w-5 h-5 text-red-600" />;
                        } else {
                            optionStyle = "border-slate-100 opacity-50";
                        }
                    } else if (selectedOption === option) {
                        optionStyle = "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md";
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(option)}
                            disabled={isAnswered}
                            className={`
                                w-full p-4 rounded-xl border-2 text-left font-medium text-lg transition-all duration-200 flex items-center justify-between
                                ${optionStyle}
                            `}
                        >
                            {option}
                            {icon}
                        </button>
                    );
                })}
            </div>

            {/* Bottom Action Area */}
            <div className={`
                mt-8 pt-6 border-t
                ${isAnswered 
                    ? selectedOption === question.correctAnswer 
                        ? 'border-green-100 bg-green-50/50 -mx-4 px-4 pb-4' 
                        : 'border-red-100 bg-red-50/50 -mx-4 px-4 pb-4'
                    : 'border-transparent'
                }
            `}>
                {isAnswered && (
                    <div className="mb-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className={`font-bold mb-1 ${selectedOption === question.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                            {selectedOption === question.correctAnswer ? 'Excellent!' : 'Correct Answer:'}
                        </div>
                        <div className="text-slate-700 mb-2">
                            {selectedOption !== question.correctAnswer && <span className="font-semibold block">{question.correctAnswer}</span>}
                            <span className="text-slate-600 text-sm">{question.explanation}</span>
                        </div>
                    </div>
                )}

                <button
                    onClick={isAnswered ? handleNext : handleCheck}
                    disabled={!selectedOption}
                    className={`
                        w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all
                        ${!selectedOption 
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                            : isAnswered
                                ? selectedOption === question.correctAnswer
                                    ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-200'
                                    : 'bg-red-600 text-white hover:bg-red-700 shadow-red-200'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200 hover:translate-y-[-2px] active:translate-y-0'
                        }
                    `}
                >
                    {isAnswered ? (isLastQuestion ? 'Finish Quiz' : 'Next Question') : 'Check Answer'}
                </button>
            </div>
        </div>
    );
};