import { CourseData, ContentType } from './types';

export const courseData: CourseData = {
    lessons: [
        {
            id: '1',
            title: 'The Magic of Cognates',
            description: 'Learn thousands of words instantly by understanding simple ending rules.',
            content: [
                {
                    type: ContentType.RULE,
                    title: 'The "AL" Rule',
                    text: 'English words ending in "al" tend to come from Latin, so they are often exactly the same in Spanish. You just need to change the pronunciation.',
                    examples: [
                        { english: 'Normal', spanish: 'Normal' },
                        { english: 'Metal', spanish: 'Metal' },
                        { english: 'Total', spanish: 'Total' },
                        { english: 'Legal', spanish: 'Legal' }
                    ]
                },
                {
                    type: ContentType.TIP,
                    title: 'Pronunciation Guide',
                    text: 'In Spanish, the stress usually goes on the last syllable for these words. Vowels are consistent:\n"O" as in "or", "A" as in "apple", "I" as in "ink", "U" as in "lumen", "E" as in "extra".'
                },
                {
                    type: ContentType.RULE,
                    title: 'ANT and ENT Endings',
                    text: 'If an English word ends in "ant" or "ent", you can usually convert it to Spanish by adding an "e" on the end.',
                    examples: [
                        { english: 'Important', spanish: 'Importante' },
                        { english: 'Different', spanish: 'Diferente' },
                        { english: 'Excellent', spanish: 'Excelente' },
                        { english: 'Constant', spanish: 'Constante' }
                    ]
                }
            ],
            quiz: [
                {
                    id: 'q1',
                    question: 'How do you say "Legal" in Spanish?',
                    options: ['Legalo', 'Legal', 'Legale', 'Legall'],
                    correctAnswer: 'Legal',
                    explanation: 'Words ending in "al" are usually spelled the same in Spanish.'
                },
                {
                    id: 'q2',
                    question: 'How do you translate "Important" to Spanish?',
                    options: ['Important', 'Importanto', 'Importante', 'Importanta'],
                    correctAnswer: 'Importante',
                    explanation: 'For words ending in "ant", we typically add an "e" to the end.'
                },
                {
                    id: 'q3',
                    question: 'Translate: "It is normal"',
                    options: ['Es normal', 'Is normal', 'Es normale', 'El normal'],
                    correctAnswer: 'Es normal',
                    explanation: '"Es" means "It is", and "normal" stays the same.'
                }
            ]
        },
        {
            id: '2',
            title: 'The Thinking Method & Verbs',
            description: 'How to convert "tion" words into verbs and sentences.',
            content: [
                {
                    type: ContentType.RULE,
                    title: 'The "TION" Rule',
                    text: 'Most English words ending in "tion" can be transferred to Spanish by changing "t" to "c" and adding an accent to the "o".',
                    examples: [
                        { english: 'Preparation', spanish: 'Preparación' },
                        { english: 'Condition', spanish: 'Condición' },
                        { english: 'Generation', spanish: 'Generación' }
                    ]
                },
                {
                    type: ContentType.CONJUGATION,
                    title: 'Finding the Verb',
                    text: 'Here is the magic trick: To find the Spanish verb (to do something), take the "tion" word, remove "tion", and add "ar".',
                    examples: [
                        { english: 'Preparation -> To prepare', spanish: 'Preparación -> Preparar' },
                        { english: 'Confirmation -> To confirm', spanish: 'Confirmación -> Confirmar' },
                        { english: 'Cooperation -> To cooperate', spanish: 'Cooperación -> Cooperar' }
                    ]
                },
                {
                    type: ContentType.TIP,
                    title: 'Making Sentences with "Quiero"',
                    text: '"Quiero" means "I want". You can combine this with your new verbs to make sentences.',
                    examples: [
                        { english: 'I want to prepare', spanish: 'Quiero preparar' },
                        { english: 'I want to cooperate', spanish: 'Quiero cooperar' }
                    ]
                }
            ],
            quiz: [
                {
                    id: 'q1',
                    question: 'What is the Spanish verb for "To prepare"?',
                    options: ['Preparo', 'Preparation', 'Preparar', 'Preparir'],
                    correctAnswer: 'Preparar',
                    explanation: 'Remove "tion" from Preparation and add "ar".'
                },
                {
                    id: 'q2',
                    question: 'Translate: "I want to confirm"',
                    options: ['Quiero confirmar', 'Confirmar quiero', 'Quiero confirmación', 'Yo confirmar'],
                    correctAnswer: 'Quiero confirmar',
                    explanation: 'Quiero (I want) + Confirmar (to confirm).'
                },
                {
                    id: 'q3',
                    question: 'What is "Action" in Spanish?',
                    options: ['Action', 'Acción', 'Actar', 'Actione'],
                    correctAnswer: 'Acción',
                    explanation: 'Change "tion" to "ción" (note: double c is an exception in spelling here, but the rule generally holds).'
                }
            ]
        },
        {
            id: '3',
            title: 'Pronouns & People',
            description: 'Introducing Me, Te, Lo, and how to structure sentences with them.',
            content: [
                {
                    type: ContentType.RULE,
                    title: 'Me, Te, Lo',
                    text: 'Pronouns often tack onto the end of the "to" form of the verb (the infinitive).\nMe = Me / Myself\nTe = You / Yourself\nLo = Him / It',
                    examples: [
                        { english: 'I want to prepare myself', spanish: 'Quiero prepararme' },
                        { english: 'I want to invite you', spanish: 'Quiero invitarte' },
                        { english: 'I want to cancel it', spanish: 'Quiero cancelarlo' }
                    ]
                },
                {
                    type: ContentType.TIP,
                    title: 'Gender (Lo vs La)',
                    text: 'Words ending in "o" are usually masculine (use "lo"). Words ending in "a" are usually feminine (use "la"). "Lo" is the default for general concepts.',
                    examples: [
                        { english: 'I want to visit it (the house/la casa)', spanish: 'Quiero visitarla' },
                        { english: 'I want to visit him', spanish: 'Quiero visitarlo' }
                    ]
                },
                {
                    type: ContentType.RULE,
                    title: 'I try (Intento)',
                    text: 'Just like "Quiero" (I want), we have "Intento" (I try). It comes from "Intention".',
                    examples: [
                        { english: 'I try to visit you', spanish: 'Intento visitarte' },
                        { english: 'I\'m trying to publish it', spanish: 'Intento publicarlo' }
                    ]
                }
            ],
            quiz: [
                {
                    id: 'q1',
                    question: 'Translate: "I want to invite you"',
                    options: ['Quiero invitar', 'Quiero invitarte', 'Te quiero invitar', 'Invitarte quiero'],
                    correctAnswer: 'Quiero invitarte',
                    explanation: 'The "te" (you) attaches to the end of "invitar".'
                },
                {
                    id: 'q2',
                    question: 'Translate: "I try to prepare it"',
                    options: ['Intento prepararlo', 'Quiero prepararlo', 'Intento preparar', 'Prepararlo intento'],
                    correctAnswer: 'Intento prepararlo',
                    explanation: 'Intento (I try) + Preparar (to prepare) + lo (it).'
                },
                {
                    id: 'q3',
                    question: 'If "Casa" (house) is feminine, how do you say "I want to visit it"?',
                    options: ['Quiero visitarlo', 'Quiero visitarla', 'Quiero visitar', 'Quiero visitarte'],
                    correctAnswer: 'Quiero visitarla',
                    explanation: 'Since Casa is feminine, we use "la" attached to the verb.'
                }
            ]
        },
        {
            id: '4',
            title: 'Movement & The Future',
            description: 'Using "Voy a" to express future actions and movement.',
            content: [
                {
                    type: ContentType.RULE,
                    title: 'Voy a (I am going to)',
                    text: '"Voy" means "I go" or "I am going". When you are going to do something, you add "a". Think of it as "Voyage".',
                    examples: [
                        { english: 'I am going to continue', spanish: 'Voy a continuar' },
                        { english: 'I am going to cancel it', spanish: 'Voy a cancelarlo' }
                    ]
                },
                {
                    type: ContentType.RULE,
                    title: 'Verbs of Movement',
                    text: 'When using verbs of movement (like "Pasar" - to pass/stop by, or "Venir" - to come), we often need an "a" before the next action.',
                    examples: [
                        { english: 'I am going to pass by to visit you', spanish: 'Voy a pasar a visitarte' },
                        { english: 'Do you want to come to visit me?', spanish: '¿Quiere venir a visitarme?' }
                    ]
                },
                {
                    type: ContentType.TIP,
                    title: 'Formal "You"',
                    text: '"Quiere" can mean "He wants", "She wants", or "You (formal) want". Context tells you which one it is.',
                    examples: [
                        { english: 'Do you want to come?', spanish: '¿Quiere venir?' },
                        { english: 'He wants to visit me', spanish: 'Quiere visitarme' }
                    ]
                }
            ],
            quiz: [
                {
                    id: 'q1',
                    question: 'Translate: "I am going to explore"',
                    options: ['Voy explorar', 'Voy a explorar', 'Quiero explorar', 'Explorar voy'],
                    correctAnswer: 'Voy a explorar',
                    explanation: 'Always use "Voy a" for "I am going to".'
                },
                {
                    id: 'q2',
                    question: 'Translate: "I am going to visit you"',
                    options: ['Voy a visitarme', 'Voy a visitarlo', 'Voy a visitarte', 'Voy visitarte'],
                    correctAnswer: 'Voy a visitarte',
                    explanation: '"Voy a" (going to) + "visitar" (visit) + "te" (you).'
                },
                {
                    id: 'q3',
                    question: 'What does "Quiere" mean?',
                    options: ['I want', 'They want', 'He/She/You(formal) wants', 'We want'],
                    correctAnswer: 'He/She/You(formal) wants',
                    explanation: '"Quiero" is I want. "Quiere" is the third person or formal second person.'
                }
            ]
        },
        {
            id: '5',
            title: 'Irregular Patterns',
            description: 'Common verbs like Tener and other useful connecting words.',
            content: [
                {
                    type: ContentType.RULE,
                    title: 'Tener (To Have)',
                    text: '"Tener" is to have. "Tengo" is I have. You see "ten" in words like "Con-tain" (Contener) or "Main-tain" (Mantener).',
                    examples: [
                        { english: 'To maintain', spanish: 'Mantener' },
                        { english: 'I want to have it', spanish: 'Quiero tenerlo' },
                        { english: 'I am going to have it', spanish: 'Voy a tenerlo' }
                    ]
                },
                {
                    type: ContentType.TIP,
                    title: 'Useful Words',
                    text: 'Expand your sentences with these connecting words.',
                    examples: [
                        { english: 'Pero', spanish: 'But' },
                        { english: 'Porque', spanish: 'Because' },
                        { english: 'Por qué', spanish: 'Why' },
                        { english: 'Ahora', spanish: 'Now (literally "to the hour")' },
                        { english: 'Tarde', spanish: 'Late (think "tardy")' }
                    ]
                },
                {
                    type: ContentType.RULE,
                    title: 'Present as Future',
                    text: 'In Spanish, you can use the present tense to talk about the future, just like in English.',
                    examples: [
                        { english: 'I am eating tomorrow', spanish: 'Como mañana' },
                        { english: 'I\'m coming tomorrow', spanish: 'Vengo mañana' }
                    ]
                }
            ],
            quiz: [
                {
                    id: 'q1',
                    question: 'Translate: "I want to have it now"',
                    options: ['Quiero tenerlo mañana', 'Quiero tenerlo tarde', 'Quiero tenerlo ahora', 'Tengo ahora'],
                    correctAnswer: 'Quiero tenerlo ahora',
                    explanation: 'Quiero (want) + tener (have) + lo (it) + ahora (now).'
                },
                {
                    id: 'q2',
                    question: 'Which verb corresponds to "Contain"?',
                    options: ['Containar', 'Contener', 'Conteno', 'Contenar'],
                    correctAnswer: 'Contener',
                    explanation: 'The root "tain" usually becomes "tener" in Spanish.'
                },
                {
                    id: 'q3',
                    question: 'Translate: "Why don\'t you want to come?"',
                    options: ['¿Porque no quiere venir?', '¿Por qué no quiere venir?', '¿Pero no quiere venir?', '¿Voy a venir?'],
                    correctAnswer: '¿Por qué no quiere venir?',
                    explanation: '"Por qué" is Why. "Porque" is Because.'
                }
            ]
        }
    ]
};