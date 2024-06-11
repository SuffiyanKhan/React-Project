import logo from '../../assets/logo.svg'

function SignupLoginNavbar() {
  return (
    <>
        <nav className="d-flex justify-content-between bg-white align-items-center px-5 border-bottom sticky-top py-3">
            <div className="">
            <img src={logo} width={140} alt="" />
            </div>
            <div className="">
                <button className="btn btn-dark"><span></span> Google</button>
            </div>
        </nav>
    </>
  )
}

export default SignupLoginNavbar