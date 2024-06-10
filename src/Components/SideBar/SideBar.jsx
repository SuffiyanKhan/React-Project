import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.svg'
import './SideBar.css'
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../Context/Context';

function SideBar() {
    const { checkAuthentication } = useGlobalState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', color: '#0cac0c' }} onClick={handleShow}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="currentColor"
                    className=" bi-text-indent-left "
                    viewBox="0 0 16 16"
                >
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <div className="d-flex border w-100 bg-white rounded me-3">
                            <input
                                className="form-control  border-none shadow-none outline-none border-light me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn rounded-circle" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>

                        </div>
                        <button
                            className='btn btn-light w-100 border mt-2'
                        >
                            <i className="fa-solid fa-location-dot me-3"></i>
                            <span>Pick Location</span>
                        </button>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
                            <button className="btn bg-color d-flex align-items-center justify-content-center text-light fw-semibold px-3 py-2">
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
                                <span className="ms-2" >
                                    All Department
                                </span>
                            </button>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark ms-4" aria-current="page" to={'/'} >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to={'/o'}>
                                    Shop Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark " aria-current="page"  >
                                    About us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark " aria-current="page"  >
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark " aria-current="page"  >
                                    Contact Us
                                </Link>
                            </li>
                            {
                                checkAuthentication ? (
                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link fw-bold text-dark" href="#">
                                                Account
                                            </a>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;