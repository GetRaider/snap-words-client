export function PostItem({post}) {
  const {id, title, body} = post;
  return (
    <div className={"post"}>
      <div className={"post_content"}>
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={"post_buttons"}>
        <button>Delete</button>
      </div>
    </div>
  );
}

// interface IPost {
//   id?: number;
//   title?: string;
//   body?: string;
// }
