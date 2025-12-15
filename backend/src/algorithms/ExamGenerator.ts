// backend/src/algorithms/ExamGenerator.ts

export interface Question {
    id: string;
    text: string;
    difficulty: 'easy' | 'medium' | 'hard';
    topic: string;
    marks: number;
}

export interface ExamConstraints {
    totalQuestions: number;
    totalMarks: number;
    difficultyDistribution: {
        easy: number;
        medium: number;
        hard: number;
    };
    topics: string[];
}

export class ExamGenerator {
    // Graph representation for questions
    private questionGraph: Map<string, Set<string>>;
    
    // Hash table for quick lookup
    private questionMap: Map<string, Question>;
    
    constructor() {
        this.questionGraph = new Map();
        this.questionMap = new Map();
    }
    
    // Add a question
    addQuestion(question: Question): void {
        this.questionMap.set(question.id, question);
        
        // Add to graph
        if (!this.questionGraph.has(question.topic)) {
            this.questionGraph.set(question.topic, new Set());
        }
        this.questionGraph.get(question.topic)?.add(question.id);
    }
    
    // Backtracking algorithm for exam generation
    generateExam(constraints: ExamConstraints): Question[] {
        console.log('Generating exam with constraints:', constraints);
        
        // TODO: Implement backtracking algorithm
        const selectedQuestions: Question[] = [];
        
        // For now, return sample questions
        return [
            { id: '1', text: 'What is Binary Search?', difficulty: 'easy', topic: 'Searching', marks: 5 },
            { id: '2', text: 'Explain Quick Sort', difficulty: 'medium', topic: 'Sorting', marks: 10 }
        ];
    }
    
    // Get all questions by topic (Graph traversal - DFS)
    getQuestionsByTopic(topic: string): Question[] {
        const questionIds = this.questionGraph.get(topic);
        if (!questionIds) return [];
        
        const questions: Question[] = [];
        for (const id of questionIds) {
            const question = this.questionMap.get(id);
            if (question) questions.push(question);
        }
        
        return questions;
    }
}