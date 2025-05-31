import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()

  const navigate = useNavigate()

  async function handleSignUp(data: signUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
      console.log(data)
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="top-8 right-8 absolute">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex flex-col justify-center gap-6 w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-2xl tracking-tight">
              Criar conta grátis
            </h1>

            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-muted-foreground text-sm text-center leading-relaxed">
              Ao continuar você concord a com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de Serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                Políticas de Privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
