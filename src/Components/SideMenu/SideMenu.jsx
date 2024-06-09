import logo from '../../assets/logo.svg'
import SideMenuList from '../SideMenuList/SideMenuList'
function SideMenu() {
    return (
        <>
            <div style={{ height: "100vh", overflow: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <header className='sticky-top py-3  px-2 bg-white '>
                    <img src={logo} style={{width:"140px"}} alt="" />
                </header>
                <section className='mt-3'>
                    <SideMenuList />
                </section>
            </div>

        </>
    )
}

export default SideMenu