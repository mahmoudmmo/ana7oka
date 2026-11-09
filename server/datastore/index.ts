import { CommentDao } from './Dao/CommentDoa';
import { LikeDao } from './Dao/LikeDoa';
import { PostDao } from './Dao/PostDao';
import { UserDao } from './Dao/UserDoa';
import { SqlDataStore } from './sql';

// import { InmemoryDatastore } from './memorydb';

export interface Datastore extends PostDao, CommentDao, UserDao, LikeDao {}
export let db: Datastore;
export async function initDatastore() {
  // two ways to init the datastore, one is in memory and the other is in sql
  // db = new InmemoryDatastore();
  db = await new SqlDataStore().openDb();
}
