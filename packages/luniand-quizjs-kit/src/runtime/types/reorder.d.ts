export interface ReorderQuestion {
  questionId: string;
  questionValue: string;
  type: string;
  answers: Answer[];
  correctAnswers: string[];
}

export interface Answer {
  answerId: string;
  answerValue: string;
}

export const MAX_TOTAL_ANSWER = 10;
export const MIN_TOTAL_ANSWER = 3;
