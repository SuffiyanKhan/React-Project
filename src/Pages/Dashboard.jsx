import DashboardBanner from "../Components/DashboardBanner/DashboardBanner"
import DashboardBottom from "../Components/DashboardBottom/DashboardBottom"
import DashboardChart from "../Components/DashboardChart/DashboardChart"
import DashboardRecentOrder from "../Components/DashboardRecentOrder/DashboardRecentOrder"
import DashboardSaleOverview from "../Components/DashboardSaleOverview/DashboardSaleOverview"

function Dashboard() {
  return (
    <div>
      <DashboardBanner/>
      <DashboardBottom/>
      <DashboardChart/>
      <DashboardSaleOverview/>
      <DashboardRecentOrder/>
    </div>
  )
}

export default Dashboard