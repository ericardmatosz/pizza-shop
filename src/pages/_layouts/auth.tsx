import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-between bg-muted p-10 border-foreground/5 border-right h-full text-muted-foreground">
        <div className="flex items-center gap-3 font-medium text-foreground text-lg">
          <Pizza className="w-5 h-5" />
          <span className="semi-bold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
