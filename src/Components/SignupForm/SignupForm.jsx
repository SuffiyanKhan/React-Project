import { useGlobalState } from '../../Context/Context';

function SignupForm() {
    const { firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        password, setPassword, } = useGlobalState()

    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="FirstName"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="LastName"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder='*****'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </>
    );
}

export default SignupForm;
