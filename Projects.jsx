import image2 from "/public/hurdle.png";
import image3 from "/public/recursion.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image2,
    title: "Hurdle Backend",
    description: "Tracks the state of the game of a Hurdle(wordle copycat) and adjusts accordingly, C++ used, I had a huge challenge with the hurdleStateClass and it tormented me for months as I struggled to figure out how to solve it but alas with the help of a group we brainstormed the error",
  },
  {
    image: image3,
    title: "Recursion Lab",
    description: "Works on recurrsion and how its implemeted in code, C++, this is a lab work I had struggled a little to figure out the general concept of recurrsion but overtime I figured it out",
  },


]

const ProjectCard = ({project}) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24"> 
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
         <div className="text=xl font-semibold">{project.title}</div>
         <p className="text-black">{project.description}</p>
        </div>
      </div>
    </div>

  )
  
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
    <h1 className="text-4xl text-black md:text-6xL"> My Projects </h1>
    <div className="flex w-full max-w-w[1000px] flex-col gap-16 text-black">
    {
      projectsData.map((project,index) => (
        <ProjectCard key={index} project={project}/>
      ))
    }

    </div>
    <a className="flex flex-col items-center justify-center gap-10 text-black" href="https://github.com/CSUF-CPSC121L-2023S/hurdle-backend-armstrongj862" target="_blank">Click here to view Hurdle Backend</a>
    <a className="flex flex-col items-center justify-center gap-10 text-black" href="https://github.com/CSUF-CPSC121L-2023S/lab12-armstrongj862/tree/main" target="_blank">Click here to view Recurrsion Lab</a>

    </div>
  )
}

export default Projects