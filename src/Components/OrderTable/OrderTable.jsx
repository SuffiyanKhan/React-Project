import { useGlobalState } from "../../Context/Context"
import { SetDataToLocalStorage } from "../../Services/SetDataToLocalStorage";

function OrderTable() {
    const { deleteCount, setDeleteCount, orderData, setOrderData } = useGlobalState()

    const handleDelete = (index) => {
        const updatedOrderData = [...orderData];
        updatedOrderData.splice(index, 1);
        setOrderData(updatedOrderData);
        SetDataToLocalStorage(updatedOrderData);
        setDeleteCount(deleteCount + 1)
    };
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Image</th>
                        <th className="">Product Title</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={data.img} width={60} alt={data.title} />
                            </td>
                            <td className="">{data.title}</td>
                            <td>{data.price.toFixed(2)}</td>
                            <td>{data.quantity}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderTable