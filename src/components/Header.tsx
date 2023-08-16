import { Logo } from './Logo'

export function Header () {
  return (
    <header
      className="w-full py-3 flex items-center justify-center bg-white border-b border-white">
      <Logo />
    </header>
  )
}
