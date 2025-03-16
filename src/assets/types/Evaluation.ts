export type EvaluationAuthor = {
    uid: string;
    displayName?: string | null;
    photoURL?: string | null;
}

export type Evaluation = {
    id: number,
    value: number,
    content: string,
    author: EvaluationAuthor;
}