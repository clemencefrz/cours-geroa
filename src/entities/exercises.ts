export type Exercise = {
  id: number;
  statement: string;
  solution: string;
  // categoryId: number;
};

export interface Category {
  id: number;
  name: string;
  chapterId: number;
}

export interface Chapter {
  id: number;
  title: string;
  levelId: number;
}

export interface Level {
  id: number; //4 = études sup
  name: string;
}
