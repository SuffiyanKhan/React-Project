import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import OrderPage from "./Pages/OrderPage"
import Navbar from './Components/Navbar/Navbar.jsx'
import Dashboard from "./Pages/Dashboard.jsx"
import Customers from "./SideMenuPages/Customers.jsx"
import SellersVendors from "./SideMenuPages/SellersVendors.jsx"
import Orders from "./SideMenuPages/Orders.jsx"
import Reviews from "./SideMenuPages/Reviews.jsx"
import Product from "./SideMenuPages/Products.jsx"
import Categories from "./SideMenuPages/Categories.jsx"
import DashboardNavbar from "./Components/DashboardNavbar/DashboardNavbar.jsx"
import AddProduct from "./SideMenuPages/AddProduct.jsx"
import AddCategory from "./SideMenuPages/AddCategory.jsx"
import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import SignupLoginNavbar from "./Components/SignupLoginNavbar/SignupLoginNavbar.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { useGlobalState } from "./Context/Context.jsx"

function App() {
  const { userAuth } = useGlobalState()
  const router = createBrowserRouter([
    {
      path: '*',
      element: <PageNotFound />
    },
    {
      path: '/',
      element: <>
        <Navbar /> <Home />
        {/* {
          userAuth ? (<>
          </>) : (<Navigate to={'/signup'} />)
        } */}
      </>
    },
    {
      path: '/d/:id',
      element: <>
        <Navbar /> <DetailPage />
        {/* {
          userAuth ? (<>
          </>) : (<Navigate to={'/signup'} />)
        } */}
      </>
    }, {
      path: '/o',
      element: <>
        {
          userAuth ? (<>
            <Navbar /> <OrderPage />
          </>) : (<Navigate to={'/signup'} />)
        }</>
    },
    {
      path: '/dashboard',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Dashboard /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    },
    {
      path: '/customers',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Customers /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/sellers',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><SellersVendors /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/orders',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Orders /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/reviews',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Reviews /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/products',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Product /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/categories',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><Categories /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/addproduct',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><AddProduct /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/addcategory',
      element: <>
        {
          userAuth ? (<>
            <DashboardNavbar ><AddCategory /></DashboardNavbar>
          </>) : (<Navigate to={'/signup'} />)
        }
      </>
    }, {
      path: '/signup',
      element: <>
        <SignupLoginNavbar /><Signup /><Footer />
        {/* {
          userAuth ? (<>
            <Navigate to={'/'} />
          </>) : (<>  </>)
        } */}
      </>

    }, {
      path: '/login',
      element: <>
        <SignupLoginNavbar /><Login /><Footer />
        {/* {
          userAuth ? (<>
            <Navigate to={'/'} />
          </>) : (<>  </>)
        } */}
      </>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App