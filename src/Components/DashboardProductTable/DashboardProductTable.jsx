import image1 from '../../assets/fc-1.jpg'
import DashboardProductStatus from '../DashboardProductStatus/DashboardProductStatus'
import DashboardProductStatusButton from '../DashboardProductStatusBtton/DashboardProductStatusBtton'
function DashboardProductTable() {
    return (
        <>
            <div className="container">
                <div className="row px-4">
                    <div className="col-12 mt-5 py-3 border rounded-4">
                        <header className='py-4 d-flex justify-content-between'>
                            <div className="">
                                <input type="text"
                                    className='form-control'
                                    placeholder='Search'
                                     />
                            </div>
                            <DashboardProductStatus />
                        </header>
                        <table className='table table-borderless '>
                            <thead>
                                <tr className='table-secondary' >
                                    <th>Image</th>
                                    <th>Proudct Name</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                    <th>Create at</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={image1} width={40} alt="" />
                                    </td>
                                    <td>
                                        Haldirams Sev Bhujia
                                    </td>
                                    <td>Snack & Munchies</td>
                                    <td>
                                        <span
                                            className="border ms-3 p-1 fw-semibold rounded-2"
                                            style={{ fontSize: '13px', backgroundColor: 'lightblue', color: 'blue' }}
                                        >
                                            Active
                                        </span>
                                    </td>
                                    <td>$18.00</td>
                                    <td>24 Nov 2022</td>
                                    <td>
                                        <DashboardProductStatusButton />
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardProductTable