export interface DataResponse {
  user: User;
  devices?: string;
  albums: Album[];
  posts: Post[];
  todos: Todo[];
}

export interface ErrorDataResponse {
  statusCode: number;
  error: string;
  message: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
