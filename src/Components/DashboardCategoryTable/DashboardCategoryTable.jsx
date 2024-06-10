import imgs from '../../assets/snacks.png'
import DashboardProductStatusButton from '../DashboardProductStatusBtton/DashboardProductStatusBtton'

function DashboardCategoryTable() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Icon</th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={imgs} width={40} alt="" />
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>12</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                        <span
                                            className=" ms-3 p-1 fw-bold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Published
                                        </span>
                                        <DashboardProductStatusButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={imgs} width={40} alt="" />
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>12</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                        <span
                                            className=" ms-3 p-1 fw-bold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Published
                                        </span>
                                        <DashboardProductStatusButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={imgs} width={40} alt="" />
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>12</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                        <span
                                            className=" ms-3 p-1 fw-bold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Published
                                        </span>
                                        <DashboardProductStatusButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={imgs} width={40} alt="" />
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>12</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                        <span
                                            className=" ms-3 p-1 fw-bold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Published
                                        </span>
                                        <DashboardProductStatusButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={imgs} width={40} alt="" />
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>12</td>
                                    <td>
                                        <div className='d-flex justify-content-between'>
                                        <span
                                            className=" ms-3 p-1 fw-bold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Published
                                        </span>
                                        <DashboardProductStatusButton/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCategoryTable