import { Link } from "react-router-dom"

function SideMenuListComingSoon2() {
    return (
        <div className="" >
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-solid fa-headphones"></i>
                    </span> Support Ticket
                </Link>
            </div>
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-regular fa-circle-question"></i>
                    </span> Help Center
                </Link>
            </div>
            <div>
                <Link style={{cursor:"not-allowed"}} className="text-dark text-start text-decoration-none p-3 btn  border-none w-100">
                    <span className='me-2'>
                    <i className="fa-solid fa-infinity"></i>
                    </span> How FreshCart Works
                </Link>
            </div>
        </div>
    )
}

export default SideMenuListComingSoon2