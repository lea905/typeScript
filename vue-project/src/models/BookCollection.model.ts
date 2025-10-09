import type { BookModel } from './Book.model';

export interface BookCollection {
    id?: number;
    state: number;
    available: number;
    book?: BookModel;
}