// // import MegaPage from '../MegaPage/MegaPage'
// import { Link } from 'react-router-dom'
// import './NavbarNavigation.css'
// import { CheckAuthentication } from '../../Services/checkAuthentication'
// import { useEffect, } from 'react'
// import { useGlobalState } from '../../Context/Context'
// import NavbarNavigationDropdown from '../NavbarNavigationDropdown/NavbarNavigationDropdown'


// function NavbarNavigation() {
//     const { checkAuthentication, setCheckAuthentication,  } = useGlobalState()
//     useEffect(() => {
//         (async () => {
//             const checkAuth = await CheckAuthentication()
//             if (!checkAuth) {
//                 setCheckAuthentication(false)
//             }
//         })()
//     }, [])
//     return (
//         <>
//             <div className="container navigation mt-4  ">
//                 <button className="btn bg-color d-flex align-items-center text-light fw-semibold px-3 py-2">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={20}
//                         height={18}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="feather feather-grid"
//                     >
//                         <rect x={3} y={3} width={7} height={7} />
//                         <rect x={14} y={3} width={7} height={7} />
//                         <rect x={14} y={14} width={7} height={7} />
//                         <rect x={3} y={14} width={7} height={7} />
//                     </svg>
//                     <span className="ms-2" >
//                         All Department
//                     </span>
//                 </button>
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-felx align-items-center">
//                     <li className="nav-item">
//                         <Link className="nav-link fw-bold text-dark ms-4" aria-current="page" to={'/'} >
//                             Home
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link fw-bold text-dark" to={'/o'}>
//                             Shop Cart
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link fw-bold text-dark " aria-current="page"  >
//                             About us
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link fw-bold text-dark " aria-current="page"  >
//                             Blogs
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link fw-bold text-dark " aria-current="page"  >
//                             Contact Us
//                         </Link>
//                     </li>
//                     {
//                         checkAuthentication ? (
//                             <>
//                                 <li className="nav-item">
//                                     <NavbarNavigationDropdown />
//                                     {/* <a className="nav-link fw-bold text-dark" href="#">
//                                         Account
//                                     </a> */}
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link fw-bold text-dark" to={'/dashboard'}>
//                                         Dashboard
//                                     </Link>
//                                 </li>
//                             </>
//                         ) : (
//                             <>
//                                 <li className="nav-item">
//                                     <Link className="nav-link fw-bold text-dark" to={'/signup'}>
//                                         Signup
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link fw-bold text-dark" to={'/login'}>
//                                         Login
//                                     </Link>
//                                 </li>
//                             </>
//                         )
//                     }
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default NavbarNavigation

import { Link } from 'react-router-dom'
import './NavbarNavigation.css'
import {  CheckAuthenticationUser } from '../../Services/checkAuthentication'
import { useEffect } from 'react'
import { useGlobalState } from '../../Context/Context'
import NavbarNavigationDropdown from '../NavbarNavigationDropdown/NavbarNavigationDropdown'

function NavbarNavigation() {
    const { checkAuthentication, setCheckAuthentication } = useGlobalState()

    useEffect(() => {
        (async () => {
            const checkAuth = await CheckAuthenticationUser()
            if (!checkAuth) {
                setCheckAuthentication(false)
            }
        })()
    }, [])

    

    return (
        <div className="container navigation mt-4">
            <button className="btn bg-color d-flex align-items-center text-light fw-semibold px-3 py-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                >
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                </svg>
                <span className="ms-2">
                    All Department
                </span>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark ms-4" aria-current="page" to={'/'}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to={'/o'}>
                        Shop Cart
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" aria-current="page">
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" aria-current="page">
                        Blogs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" aria-current="page">
                        Contact Us
                    </Link>
                </li>
                {
                    checkAuthentication ? (
                        <>
                            <li className="nav-item">
                                <NavbarNavigationDropdown />
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to={'/dashboard'}>
                                    Dashboard
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to={'/signup'}>
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to={'/login'}>
                                    Login
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default NavbarNavigation
