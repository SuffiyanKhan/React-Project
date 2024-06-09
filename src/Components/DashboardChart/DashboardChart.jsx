import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'March',
        'Total Income': 25,
        'Total Expense': 45,
    },
    {
        name: 'April',
        'Total Income': 51,
        'Total Expense': 79,
    },
];

const DashboardChart = () => {
    return (
        <>
            <div className="container">
                <div className="row px-4 mt-4">
                    <div className="col-lg-12 border rounded-4 py-4 px-3" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
                        <h2 className='fw-bold' style={{ fontSize:"18px" }}>Revenue</h2>
                        <p style={{  color: '#666',fontSize:"14px" }}>(+63%) than last year</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Total Income" stroke="#8884d8" />
                                <Line type="monotone" dataKey="Total Expense" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardChart;