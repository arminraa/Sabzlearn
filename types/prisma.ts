export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  author: string;
  price: number;
  salePrice: number | null;
  score: number;
  viewersCount: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
