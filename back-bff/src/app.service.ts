import { Injectable } from '@nestjs/common';
import type {
  Album,
  DataResponse,
  ErrorDataResponse,
  Post,
  Todo,
  User,
} from './type';

const BASE_PATH_API = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AppService {
  async getUser(id: number): Promise<DataResponse | ErrorDataResponse> {
    try {
      const userData = await Promise.all([
        fetch(`${BASE_PATH_API}/users/${id}`),
        fetch(`${BASE_PATH_API}/posts/?userId=${id}`),
        fetch(`${BASE_PATH_API}/albums/?userId=${id}`),
        fetch(`${BASE_PATH_API}/todos/?userId=${id}`),
      ]);

      const [userPromise, postPromise, albumsPromise, todosPromise] = userData;

      const user: User = (await userPromise.json()) as User;
      const posts: Post[] = (await postPromise.json()) as Post[];
      const albums: Album[] = (await albumsPromise.json()) as Album[];
      const todos: Todo[] = (await todosPromise.json()) as Todo[];

      return { user, posts, albums, todos };
    } catch (error) {
      return {
        statusCode: 500,
        error: error instanceof Error ? error.name : 'Error',
        message: 'Internal on Get User',
      };
    }
  }
}
