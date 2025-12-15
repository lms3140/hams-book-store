export type Book = {
  bookId: number;
  title: string;
  subCategoryId: string;
  publisherId: string;
  price: number;
  point: string;
  publishedDate: Date;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RequestBookInfo = {
  title: string;
  categoryId: string;
  subCategoryId: string;
  publisherId: string;
  price: string;
  point: string;
  publishedDate: string;
  description: string;
  imageUrl: string;
};
