import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 4394839</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-400 rounded-full w-2 h-2" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Érica Matos</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (51) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                ericardmatosz@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Table>
        <TableHeader>
          <TableHead>Produto</TableHead>
          <TableHead className="text-right">Qtd.</TableHead>
          <TableHead className="text-right">Preço</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Pizza Peperoni Familia</TableCell>
            <TableCell className="text-right">2</TableCell>
            <TableCell className="text-right">R$ 50,00</TableCell>
            <TableCell className="text-right">R$ 100,00</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Pizza Mussarela M</TableCell>
            <TableCell className="text-right">4</TableCell>
            <TableCell className="text-right">R$ 12,00</TableCell>
            <TableCell className="text-right">R$ 48,00</TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="font-medium text-right">R$ 148,00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DialogContent>
  )
}
