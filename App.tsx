import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonView } from './components/LessonView';
import { QuizView } from './components/QuizView';
import { courseData } from './data';
import { Menu } from 'lucide-react';

enum ViewState {
    LESSON = 'LESSON',
    QUIZ = 'QUIZ'
}

function App() {
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [viewState, setViewState] = useState<ViewState>(ViewState.LESSON);
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const currentLesson = courseData.lessons[currentLessonIndex];

    const handleLessonComplete = () => {
        setViewState(ViewState.QUIZ);
    };

    const handleQuizComplete = (score: number) => {
        if (score >= 60) {
            if (!completedLessons.includes(currentLesson.id)) {
                setCompletedLessons(prev => [...prev, currentLesson.id]);
            }
            
            // Move to next lesson if available, else stay (could add a 'Course Complete' screen)
            if (currentLessonIndex < courseData.lessons.length - 1) {
                setTimeout(() => {
                    setCurrentLessonIndex(prev => prev + 1);
                    setViewState(ViewState.LESSON);
                }, 500); // Small delay for UX
            }
        } else {
            // Logic handled in QuizView for retry
            setViewState(ViewState.LESSON);
        }
    };

    const handleQuizRetry = () => {
        setViewState(ViewState.LESSON);
    };

    const handleSelectLesson = (index: number) => {
        setCurrentLessonIndex(index);
        setViewState(ViewState.LESSON);
    };

    return (
        <div className="flex h-screen bg-white md:bg-slate-50 overflow-hidden">
            <Sidebar 
                lessons={courseData.lessons}
                currentLessonIndex={currentLessonIndex}
                completedLessons={completedLessons}
                onSelectLesson={handleSelectLesson}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <main className="flex-1 flex flex-col h-full relative overflow-y-auto w-full">
                {/* Mobile Header */}
                <div className="md:hidden flex items-center p-4 border-b border-slate-100 bg-white sticky top-0 z-30">
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="ml-3 font-semibold text-slate-800 truncate">
                        {currentLesson.title}
                    </span>
                </div>

                {viewState === ViewState.LESSON ? (
                    <LessonView 
                        lesson={currentLesson} 
                        onComplete={handleLessonComplete} 
                    />
                ) : (
                    <QuizView 
                        lesson={currentLesson} 
                        onComplete={handleQuizComplete}
                        onRetry={handleQuizRetry}
                    />
                )}
            </main>
        </div>
    );
}

export default App;