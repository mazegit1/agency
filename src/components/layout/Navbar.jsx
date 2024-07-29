import Logo from "../ui/Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (

    <div className="py-[50px]">
        <header className="container">
        <nav className="flex items-center justify-between">
        <Logo />
        <NavbarLinks />
        <button className="border transition-all duration-300 font-bold border-[#377DFF] text-[#377DFF] py-3 px-[50px] rounded-3xl hover:bg-slate-200 active:bg-zinc-600 active:border-none active:text-[#ffffff]">Contact Us</button>
        </nav>
        </header>
    </div>  

  )
}

export default Navbar
