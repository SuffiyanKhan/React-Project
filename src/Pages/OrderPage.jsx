import { memo, useEffect, useState } from "react";
import { GetDataFromLocalStorage } from "../Services/getDataFromLocalStorage";
import BackButton from "../Components/BackButton/BackButton";
import TotalPrice from "../Components/TotalPrice/TotalPrice";
import { useGlobalState } from "../Context/Context";
import DataNotFoundComp from "../Components/DataNotFoundComp/DataNotFoundComp";
import OrderTable from "../Components/OrderTable/OrderTable";
import Loader from "../Components/Loader/Loader";
import { BackButtonf } from "../Services/backbutton";

function OrderPage() {
    const { orderData, setOrderData } = useGlobalState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetDataFromLocalStorage();
                setOrderData(data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (loading) {
        return <Loader />
    }

    if (!orderData || orderData.length === 0) {
        return <DataNotFoundComp />;
    }

    return (
        <div className="container mt-5">
            <div className="row mt-4 px-4">
                <div className="">
                    <BackButton />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h3 className="ms-4 border">Order Place</h3>
                    <div className="border">
                    <TotalPrice />
                    </div>
                </div>
                <div className="mt-5">
                    <OrderTable />
                </div>
                <div className="d-flex justify-content-between px-4">
                    <button className="btn bg-color fw-semibold text-light" onClick={() => { BackButtonf() }}>More Shopping</button>
                    <button className="btn bg-color fw-semibold text-light">Order Place</button>
                </div>
            </div>
        </div>
    );
}

export default memo(OrderPage);
