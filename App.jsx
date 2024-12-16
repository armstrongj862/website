import Navbar from "./compoments/Navbar";
import Hero from "./compoments/Hero";
import About from "./compoments/About";
import Projects from "./compoments/Projects";
import Contacts from "./compoments/Contacts";


function App() {
  return  <>
  <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
  

<main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
  <Navbar/>
  <Hero/>
  <About/>
  <Projects/>
  <Contacts/>

</main>

    </>
}

export default App
