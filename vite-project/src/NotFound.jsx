import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>The page couldn't be found</p>
      <Link to={"/"}>Back to home page</Link>
    </div>
  );
};

export default NotFound;
