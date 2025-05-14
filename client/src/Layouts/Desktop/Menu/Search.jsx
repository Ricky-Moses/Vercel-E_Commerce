// Icons
import { CiSearch } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

const Search = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log('Search - Auth state:', { user, isAuthenticated });
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleCartClick = () => {
    if (!isAuthenticated) {
      alert('Please log in to access your cart.');
      navigate('/login');
      return;
    }
  };

  return (
    <div className="col2 flex items-center gap-5">
      <label className="input bg-neutral-200 !px-1 flex items-center">
        <CiSearch className="text-2xl" />
        <input type="search" className="grow" placeholder="Search" aria-label="Search products" />
      </label>
      <div className="btn_div">
        {isAuthenticated && user ? (
          <div className="flex items-center gap-2">
            <span className="text-xl"><FaUserCheck /></span>
            <span className="font-bold">{user.username || 'User'}</span>
          </div>
        ) : (
          <button className="btn" onClick={handleRegister}>
            Sign Up
          </button>
        )}
      </div>
      <div className="cart">
        <button
          className="flex items-center"
          onClick={handleCartClick}
          aria-label={isAuthenticated ? 'View cart' : 'Log in to view cart'}
        >
          <MdShoppingCartCheckout className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Search;