import { Link } from "react-router-dom"

function SideMenuListComingSoon1() {
    return (
        <div className="" >
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-regular fa-address-card"></i>
                    </span> Blog
                </Link>
            </div>
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-regular fa-images"></i>
                    </span> Media
                </Link>
            </div>
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-solid fa-gear"></i>
                    </span> Store Settings
                </Link>
            </div>
        </div>
    )
}

export default SideMenuListComingSoon1