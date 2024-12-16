
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/60 px-14 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home">Joseph Armstrong</a>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer">
          <li>Home</li>
        </a>

        <a href="#about" className="cursor-pointer">
          <li>About</li>
        </a>

        <a href="#projects" className="cursor-pointer">
          <li>Projects</li>
        </a>

        <a href="#contacts" className="cursor-pointer">
          <li>Contacts</li>
        </a>

      </ul>  

      <ul classname="hidden md:flex gap-5"> </ul>
      <li className="cursor=pointer text-xl opacity-70"></li>
    </nav>
  )
}

export default Navbar