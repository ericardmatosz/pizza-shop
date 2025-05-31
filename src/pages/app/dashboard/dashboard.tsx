import { Helmet } from 'react-helmet-async'
import { CardDayOrdersAmount } from './card-day-orders-amount'
import { CardMonthCanceledOrdersAmount } from './card-month-canceled-orders-amout'
import { CardMonthOrdersAmount } from './card-month-orders-amount'
import { CardMontRevenue } from './card-month-revenue'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>

        <div className="gap-4 grid grid-cols-4">
          <CardMontRevenue />
          <CardMonthOrdersAmount />
          <CardDayOrdersAmount />
          <CardMonthCanceledOrdersAmount />
        </div>

        <div className="grid grid-cols-9 gap04">
          <RevenueChart />
        </div>
      </div>
    </>
  )
}
