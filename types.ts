export enum ContentType {
    RULE = 'RULE',
    EXAMPLE = 'EXAMPLE',
    TIP = 'TIP',
    CONJUGATION = 'CONJUGATION'
}

export interface Example {
    english: string;
    spanish: string;
    note?: string;
}

export interface ContentBlock {
    type: ContentType;
    title?: string;
    text: string;
    examples?: Example[];
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    content: ContentBlock[];
    quiz: QuizQuestion[];
}

export interface CourseData {
    lessons: Lesson[];
}