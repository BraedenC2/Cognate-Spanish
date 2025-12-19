import React from 'react';
import { BookOpen, CheckCircle, Menu, X, BarChart } from 'lucide-react';
import { Lesson } from '../types';

interface SidebarProps {
    lessons: Lesson[];
    currentLessonIndex: number;
    completedLessons: string[];
    onSelectLesson: (index: number) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
    lessons, 
    currentLessonIndex, 
    completedLessons, 
    onSelectLesson,
    isOpen,
    setIsOpen
}) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <div className={`
                fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 z-50 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0
            `}>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-indigo-600">
                        <BookOpen className="w-6 h-6" />
                        <h1 className="text-xl font-bold tracking-tight">Cognate Spanish</h1>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="md:hidden text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4">
                    <div className="mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                        Course Modules
                    </div>
                    <nav className="space-y-1">
                        {lessons.map((lesson, index) => {
                            const isActive = currentLessonIndex === index;
                            const isCompleted = completedLessons.includes(lesson.id);

                            return (
                                <button
                                    key={lesson.id}
                                    onClick={() => {
                                        onSelectLesson(index);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-colors
                                        ${isActive 
                                            ? 'bg-indigo-50 text-indigo-700' 
                                            : 'text-slate-600 hover:bg-slate-50'
                                        }
                                    `}
                                >
                                    <div className={`
                                        w-6 h-6 rounded-full flex items-center justify-center text-xs border
                                        ${isCompleted 
                                            ? 'bg-green-100 border-green-200 text-green-700' 
                                            : isActive 
                                                ? 'bg-indigo-100 border-indigo-200 text-indigo-700'
                                                : 'bg-slate-100 border-slate-200 text-slate-500'
                                        }
                                    `}>
                                        {isCompleted ? <CheckCircle className="w-4 h-4" /> : index + 1}
                                    </div>
                                    <span className="truncate">{lesson.title}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 bg-slate-50">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-medium text-slate-700">Progress</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
                        />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                        {completedLessons.length} of {lessons.length} modules completed
                    </p>
                </div>
            </div>
        </>
    );
};