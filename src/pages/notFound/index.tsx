import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Página não Encontrada</p>

      <Link to={"/"}>Acessar Produtos</Link>
    </div>
  );
};

export default NotFound;
