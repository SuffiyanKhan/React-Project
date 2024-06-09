import { Link } from "react-router-dom"

function SideMenuListComingSoon1() {
    return (
        <div className="" >
            <li >
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-regular fa-address-card"></i>
                    </span> Blog
                </Link>
            </li>
            <li>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-regular fa-images"></i>
                    </span> Media
                </Link>
            </li>
            <li>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-solid fa-gear"></i>
                    </span> Store Settings
                </Link>
            </li>
        </div>
    )
}

export default SideMenuListComingSoon1