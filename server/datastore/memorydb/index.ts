import { Datastore } from '..';
import { Comment, Like, Post, User } from '../../types';

export class InmemoryDatastore implements Datastore {
  private users: User[] = [];
  private posts: Post[] = [];
  private comments: Comment[] = [];
  private likes: Like[] = [];

  createPost(post: Post): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }
  createComment(comment: Comment): Promise<void> {
    this.comments.push(comment);
    return Promise.resolve();
  }
  createLike(like: Like): Promise<void> {
    this.likes.push(like);
    return Promise.resolve();
  }
  createUser(user: User): Promise<void> {
    this.users.push(user);
    return Promise.resolve();
  }

  listComments(postId: string): Promise<Comment[]> {
    return Promise.resolve(this.comments.filter(comment => comment.postId === postId));
  }

  listPosts(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }

  getPost(id: string): Promise<Post | undefined> {
    return Promise.resolve(this.posts.find(post => post.id === id));
  }
  getUserByEmail(email: string): Promise<User | undefined> {
    return Promise.resolve(this.users.find(user => user.email === email));
  }
  getUserById(id: string): Promise<User | undefined> {
    return Promise.resolve(this.users.find(user => user.id === id));
  }
  getUserByUsername(username: string): Promise<User | undefined> {
    return Promise.resolve(this.users.find(user => user.username === username));
  }

  deletePost(id: string): Promise<void> {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
    return Promise.resolve();
  }
  deleteComment(id: string): Promise<void> {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
    return Promise.resolve();
  }
  deleteLike(id: string): Promise<void> {
    const index = this.likes.findIndex(like => like.id === id);
    if (index !== -1) {
      this.likes.splice(index, 1);
    }
    return Promise.resolve();
  }
}
