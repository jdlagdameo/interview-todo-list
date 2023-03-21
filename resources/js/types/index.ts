/**
 * TypeScript definitions
 * */

export type Todo = {
    id: number;
    created_at: string;
    updated_at?: string;
    title: string;
    completed: boolean;
};
