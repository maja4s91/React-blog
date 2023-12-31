import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("https://test-api-543c.onrender.com/blogs/" + id);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("https://test-api-543c.onrender.com/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
