import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function CardMonthOrdersAmount() {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center space-y-0 pb-2">
        <CardTitle className="font-semibold text-base">Pedidos (mês)</CardTitle>
        <Utensils className="w-4 h-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="font-bold text-2xl tracking-tight">246</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
