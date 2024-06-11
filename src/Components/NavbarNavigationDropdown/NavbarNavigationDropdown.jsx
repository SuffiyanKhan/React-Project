import { useNavigate } from "react-router-dom"
import { Logout } from "../../Services/logout"
import { useGlobalState } from "../../Context/Context"

function NavbarNavigationDropdown() {
    const navigate = useNavigate()
    const{setUserAuth}=useGlobalState()

    const LogoutButton = async () => {
        const response = await Logout()
        if (response) {
            navigate('/login')
            localStorage.clear();
            setUserAuth(false)
        }
    }
    return (
        <>
            <div className="dropdown">
                <button
                    className="nav-link fw-bold text-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Account
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item fw-semibold" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item fw-semibold" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <button className="dropdown-item fw-semibold" onClick={() => { LogoutButton() }}>Logout</button>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default NavbarNavigationDropdown