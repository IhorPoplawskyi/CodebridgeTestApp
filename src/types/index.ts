export interface IArticle {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}

export interface IPaginationOptions {
  limit: number;
  page: number;
}

export type Status = "init" | "loading" | "success" | "error";

export type CurrentPriority = "title_contains" | "summary_contains";