export interface FillInTheBlankQuestion {
  questionId: string;
  type: string;
  questionValue: string;
  correctAnswers: CorrectAnswer[];
}

export enum CorrectCondition {
  IS_EXACTLY = "is_exactly",
  CONTAINS = "contains",
  EXACT_NUMBER = "exact_number",
}

export interface CorrectConditionOption {
  conditionId: CorrectCondition;
  conditionValue: string;
}

export interface CorrectAnswer {
  correctAnswerId: string;
  correctAnswerValue: string | number;
  correctCondition: CorrectCondition;
}

export const MIN_TOTAL_ANSWER = 1;
