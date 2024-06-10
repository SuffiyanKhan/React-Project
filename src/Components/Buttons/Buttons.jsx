import Badge from '@mui/material/Badge';
import SideBar from '../SideBar/SideBar';
import AddToCart from '../AddToCart/AddToCart';

export default function Buttons() {
    return (
        <>
            <div className="d-flex align-items-center ">
                <div className="me-3">
                    <Badge badgeContent={4} color="primary">
                        <i className="fa-regular fa-heart fs-5"></i>
                    </Badge>
                </div>
                <div className="me-3">
                    <i className="fa-regular fa-user fs-5"></i>
                </div>
                <div className="">
                    <AddToCart/>
                </div>
                <div className="d-xl-none d-lg-none d-md-block">
                    <SideBar />
                </div>
            </div>
        </>
    );
}
