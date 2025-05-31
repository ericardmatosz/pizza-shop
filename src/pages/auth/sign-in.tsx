import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
      console.log(data)
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="top-8 right-8 absolute">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex flex-col justify-center gap-6 w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Acessar Painel
            </h1>

            <p className="text-muted-foreground text-sm">
              Acompanhe suas vendas pelo painel parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
