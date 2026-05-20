import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>404 - Pagina nu exista</h1>
      <h1><Link to="/">Home</Link></h1>
      
    </div>
  );
}

export default NotFound;
