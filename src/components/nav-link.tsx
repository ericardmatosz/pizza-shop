import { Link, LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkProps extends LinkProps {}

export function NavLinks(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 font-medium text-muted-foreground data-[current=true]:text-foreground hover:text-foreground text-sm"
      {...props}
    ></Link>
  )
}
