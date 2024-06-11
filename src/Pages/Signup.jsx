import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import signupimage from '../assets/signup-g.svg';
import { SignupAuthentication } from '../Services/authentication';
import SignupForm from '../Components/SignupForm/SignupForm';
import { useGlobalState } from '../Context/Context';
import Loaders from '../Components/Loaders/Loader';

function Signup() {
    const { firstName, lastName, email, password } = useGlobalState();
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();
    const data = {
        firstName, lastName, email, password
    };

    const signup = async () => {
        try {
            setLoader(true)
            const response = await SignupAuthentication(data);
            if (response) {
                console.log()
                setLoader(false)
                Swal.fire({
                    title: "Good job!",
                    text: "Signup Successfully!",
                    icon: "success"
                }).then((result) => {
                    if (result) {
                        localStorage.setItem('token', JSON.stringify({TOKEN: response.accessToken, uid: response.uid}))
                        navigate('/')
                    }
                })
            } else {
                alert('Signup failed:' + response);
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed: ' + error.message);
        }
    };
    if (loader) {

        return <Loaders />
    }

    return (
        <>
            <div className="container mt-5 mb-5 py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-5 col-md-5 col-sm-12 py-3 px-4">
                        <div className="mb-5">
                            <h2 className='fw-bold'>Get Start Shopping</h2>
                            <p className='fw-semibold text-secondary' style={{ fontSize: "14px" }}>
                                Welcome to FreshCart! Enter your email to get started.
                            </p>
                        </div>
                        <SignupForm />
                        <div className="w-100">
                            <button className='btn bg-btn-color fw-semibold text-light w-100' onClick={signup}>
                                Register
                            </button>
                        </div>
                        <div>
                            <p className='fw-semibold text-center mt-4'>
                                Already have an account? <Link to={'/login'} className='text-dark text-decoration-none'>Sign in</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                        <img src={signupimage} alt="Signup illustration" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
