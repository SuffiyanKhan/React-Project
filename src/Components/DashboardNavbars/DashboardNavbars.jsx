import DashboardSideMenu from "../DashboardSideMenu/DashboardSideMenu";
import NotificationButton from "../NotificationButton/NotificationButton";
import ProfileButton from "../ProfileButton/ProfileButton";

function DashboardNavbars() {
    return (
        <>
            <nav className="navbar py-3 px-4 bg-white sticky-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="d-xl-none">
                            <DashboardSideMenu />
                        </div>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <NotificationButton />
                        <ProfileButton />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardNavbars