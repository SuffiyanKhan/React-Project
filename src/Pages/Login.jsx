import { Link } from 'react-router-dom'
import login from '../assets/signin-g.svg'
function Login() {
    return (
        <>
            <div className="container mt-5 mb-5 py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-12  py-3 px-4">
                        <div className=" mb-5">
                            <h2 className=' fw-bold'>Sign in to FreshCart</h2>
                            <p className='fw-semibold text-secondary' style={{ fontSize: "14px" }}>Welcome back to FreshCart! Enter your email to get started.</p>
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Email Address'
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="Password"
                                aria-describedby="emailHelp"
                                placeholder='*****'
                            />
                        </div>
                        <div className="w-100">
                            <button className='btn bg-btn-color fw-semibold text-light w-100'>Register</button>
                        </div>
                        <div className="">
                            <p className='fw-semibold text-center mt-4'>I have no account? <Link to={'/signup'} className='text-dark text-decoration-none'>Sign up</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                        <img src={login} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login