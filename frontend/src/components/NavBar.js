import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "../css/NavBar.css";

// ACTIONS
import { searchFilter } from "../redux/actions/searchAction";

const NavBar = ({ click }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const searchHandler = () => {
    dispatch(searchFilter(searchTerm));
  };

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history("/login");
    history.go(0);
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h2>
          <a href="/">E-Kars</a>
        </h2>
      </div>

      <form className="navbar__search">
        <input
          className="navbar__input"
          type="search"
          placeholder="Search Tesla, BMW, Audi, 2021, or click a brand below"
          onChange={setSearchTerm}
        />

        <Link to="/products">
          <button
            type="submit "
            className="navbar__search__button"
            onClick={searchHandler}
          >
            Search
          </button>
        </Link>
      </form>

      <ul className="navbar__links">
        <li>
          {localStorage.getItem("authToken") ? (
            <a href="/login" onClick={logoutHandler}>
              Logout
            </a>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>

        <li>
          <a
            href="/products"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Shop
          </a>
        </li>

        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
