import type { AuthorModel } from "./Author.model";

export interface BookModel {
  id?: number;
  title: string;
  publishYear: number;
  isbn: string;
  author: AuthorModel;
}

