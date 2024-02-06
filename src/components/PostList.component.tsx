import {PostItem} from "./PostItem.component.tsx";

const PostList = ({posts}) => {
  return (
    <div>
      <h1>Posts list</h1>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
