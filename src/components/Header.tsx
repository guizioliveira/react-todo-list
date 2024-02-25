import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="w-full h-[200px] flex items-center justify-center bg-zinc-950">
      <img src={logo} alt="" />
    </div>
  )
}
