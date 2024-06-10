import { Link } from 'react-router-dom'
import signupimage from '../assets/signup-g.svg'
function Signup() {
    return (
        <>
            <div className="container mt-5 mb-5 py-5">
                <div className="row  d-flex align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-12  py-3 px-4">
                    <div className="mb-5">
                    <h2 className=' fw-bold'>Get Start Shopping</h2>
                    <p className='fw-semibold text-secondary' style={{fontSize:"14px"}}>Welcome to FreshCart! Enter your email to get started.</p>
                    </div>
                        <div className="d-flex justify-content-between">
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="First Name"
                                aria-describedby="emailHelp"
                                placeholder='First Name'
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="Last Name"
                                aria-describedby="emailHelp"
                                placeholder='Last Name'
                            />
                        </div>
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
                            <p className='fw-semibold text-center mt-4'>Already have an account? <Link to={'/login'} className='text-dark text-decoration-none'>Sign in</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                        <img src={signupimage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup