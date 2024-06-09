import DashboardNavbars from "../DashboardNavbars/DashboardNavbars";
import SideMenu from "../SideMenu/SideMenu";

function DashboardNavbar(children) {
    return (
        <>
            <div className="d-none d-xl-block" style={{ position: "fixed", top: "0px", width: "20%", height: "100vh", overflow: "auto", borderRight: "1px dashed grey" }}>
                <SideMenu />
            </div>
            <div className="d-none d-xl-block" style={{ marginLeft: "20%" }}>
                <DashboardNavbars />
                <main>{children.children}</main>
            </div>
            <div className="d-xl-none">
                <DashboardNavbars />
                <main>{children.children}</main>
            </div>
        </>
    );
}

export default DashboardNavbar;
