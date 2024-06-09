import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideMenuList.css';
import SideMenuListComingSoon1 from '../SideMenuListComingSoon/SideMenuListComingSoon1/SideMenuListComingSoon1';
import SideMenuListComingSoon2 from '../SideMenuListComingSoon/SideMenuListComingSoon2/SideMenuListComingSoon2';

function SideMenuList() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="px-3">
        <div>
          <Link
            to="/dashboard"
            className={`side-menu-list text-dark text-start text-decoration-none p-3 btn rounded-3 border-none w-100 ${activeLink === '/dashboard' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/dashboard')}
          >
            <span className="me-2">
              <i className="fa-solid fa-house"></i>
            </span>
            Dashboard
          </Link>
        </div>
        <div className="p-4 fw-semibold">
          Store Managements
        </div>
        <div>
          <Link
            to="/products"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/products' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/products')}
          >
            <span className="me-2">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            Products
          </Link>
        </div>
        <div>
          <Link
            to="/categories"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/categories' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/categories')}
          >
            <span className="me-2">
              <i className="fa-solid fa-list"></i>
            </span>
            Categories
          </Link>
        </div>
        <div>
          <Link
            to="/orders"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/orders' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/orders')}
          >
            <span className="me-2">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            Orders
          </Link>
        </div>

        <div>
          <Link
            to="/sellers"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/sellers' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/sellers')}
          >
            <span className="me-2">
              <i className="fa-solid fa-shop"></i>
            </span>
            Sellers / Vendors
          </Link>
        </div>
        <div>
          <Link
            to="/customers"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/customers' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/customers')}
          >
            <span className="me-2">
              <i className="fa-solid fa-users"></i>
            </span>
            Customers
          </Link>
        </div>
        <div>
          <Link
            to="/reviews"
            className={`side-menu-list text-dark text-start text-decoration-none fw-semibold p-3 btn rounded-3 border-none w-100 ${activeLink === '/reviews' ? 'active' : ''
              }`}
            onClick={() => handleLinkClick('/reviews')}
          >
            <span className="me-2">
              <i className="fa-regular fa-star"></i>
            </span>
            Reviews
          </Link>
        </div>
        <div className="p-4 fw-semibold">
          Site Settings
          <span
            className="border ms-3 p-1 fw-semibold rounded-2"
            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
          >
            Coming Soon
          </span>
        </div>
        <SideMenuListComingSoon1 />
        <div className="p-4 fw-semibold">
          Support
          <span
            className="border ms-3 p-1 fw-semibold rounded-2"
            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
          >
            Coming Soon
          </span>
        </div>
        <SideMenuListComingSoon2 />
        <div className="p-4 fw-semibold">
          Our Apps
        </div>
      </div>
    </>
  );
}

export default SideMenuList;
