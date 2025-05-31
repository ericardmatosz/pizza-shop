import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { date: '10/06', revenue: 1200 },
  { date: '11/06', revenue: 1100 },
  { date: '12/06', revenue: 900 },
  { date: '13/06', revenue: 1200 },
  { date: '14/06', revenue: 800 },
  { date: '15/06', revenue: 1200 },
  { date: '16/06', revenue: 7652 },
  { date: '17/06', revenue: 1200 },
  { date: '18/06', revenue: 1000 },
]

export function ChartRevenue() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row justify-between items-center pb-8">
        <div className="space-y-1">
          <CardTitle className="font-medium text-base">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-Br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
