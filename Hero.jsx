import image from "/public/image.png"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img src={image} alt="" className="w-[300px]"/>
        </motion.div>
        <motion.div 
         initial={{y: 50, opacity: 0}}
         animate={{y: 0, opacity:1}}
         transition={{duration: 0.8, delay:0.2}}
        
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-black  text-5xl">Joseph Armstrong</h1>
          <h3 className="text-black text-3xl">Working harder for a better future</h3>
          <p>
          I’m a CSUf student in my 3rd year studying computer science. I am focused on learning more about coding and cybersecurity during the year while also working a part time job. I try and keep up with the latest social trends as I also am very interested in video editing and working on larger scale projects in the technology field.

          </p>

        </motion.div>
      </div>

    </div>
  )
}

export default Hero