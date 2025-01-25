import { useEffect, useState } from "react";
import { fetchComments } from "../utils/fetchComments";

export default function DemoComments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const json = await fetchComments(postId);
      if (!ignore) {
        setComments(json);
      }
    };
    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment?.id}>{comment.body}</li>
      ))}
    </ul>
  );
}
