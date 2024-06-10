const DashboardProductStatus = () => (
    <>
        <div className="">
            <select className="px-3 py-2 rounded-2 fw-bold">
                <option defaultValue={true}>Status</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
                <option value="draft">Draft</option>
            </select>
        </div>
    </>
);
export default DashboardProductStatus;