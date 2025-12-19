import React, { useState } from 'react';
import { Lesson, ContentBlock, ContentType } from '../types';
import { ChevronRight, ChevronLeft, Volume2, Lightbulb, ArrowRight } from 'lucide-react';

interface LessonViewProps {
    lesson: Lesson;
    onComplete: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson, onComplete }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < lesson.content.length - 1) {
            setCurrentSlide(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    const block = lesson.content[currentSlide];

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-8">
                <span className="text-indigo-600 font-semibold tracking-wide text-sm uppercase">
                    Lesson {lesson.id}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-1">{lesson.title}</h2>
                <div className="w-full bg-slate-100 h-1.5 mt-6 rounded-full overflow-hidden">
                    <div 
                        className="bg-indigo-600 h-full transition-all duration-300 ease-out"
                        style={{ width: `${((currentSlide + 1) / lesson.content.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 transition-all duration-300">
                    
                    {/* Badge */}
                    <div className="mb-6">
                        <span className={`
                            inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase
                            ${block.type === ContentType.RULE ? 'bg-blue-50 text-blue-700' : 
                              block.type === ContentType.TIP ? 'bg-amber-50 text-amber-700' :
                              block.type === ContentType.CONJUGATION ? 'bg-purple-50 text-purple-700' :
                              'bg-green-50 text-green-700'}
                        `}>
                            {block.type === ContentType.TIP && <Lightbulb className="w-3 h-3" />}
                            {block.type}
                        </span>
                    </div>

                    {/* Title & Text */}
                    {block.title && (
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{block.title}</h3>
                    )}
                    <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                        {block.text}
                    </p>

                    {/* Examples */}
                    {block.examples && block.examples.length > 0 && (
                        <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            {block.examples.map((ex, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-slate-100 group hover:border-indigo-100 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium text-slate-500">{ex.english}</span>
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                        <span className="font-bold text-indigo-700 text-lg">{ex.spanish}</span>
                                    </div>
                                    <button 
                                        className="mt-2 sm:mt-0 opacity-50 hover:opacity-100 transition-opacity p-2 hover:bg-slate-100 rounded-full text-slate-500"
                                        aria-label="Play pronunciation"
                                        title="Audio unavailable in demo"
                                    >
                                        <Volume2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
                <button
                    onClick={handlePrev}
                    disabled={currentSlide === 0}
                    className={`
                        flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors
                        ${currentSlide === 0 
                            ? 'text-slate-300 cursor-not-allowed' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                    `}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>

                <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:translate-y-[-2px] active:translate-y-0"
                >
                    {currentSlide === lesson.content.length - 1 ? 'Start Practice' : 'Continue'}
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};