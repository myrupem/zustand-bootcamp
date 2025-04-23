import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">Random Insult</Link>
      <Link to="/insultpage">All insults</Link>
      <Link to="/addinsultpage">Add new insult</Link>
    </nav>
  );
}

export default Header;
