import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">Food Crew</h2>
        <ul>
            <li className="nav_link">
                <Link to={"/"} className="nav">Home</Link>
            </li>
            <li className="nav_link">
                <Link to={"/Cart"} className="nav">View Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;
