import { User } from "./user";

export interface Comment {
  id: string;
  author: User;
  message: string;
  postedAt: string;
}

export interface Post {
  id: string;
  author: User;
  message: string;
  postedAt: string;
  likes: number;
  comments: Comment[];
}
