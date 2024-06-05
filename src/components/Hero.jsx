import {motion} from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas' 
import photo from '../assets/photoo.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      {/* <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
      </div> */}
      <div className='text-center w-full mt-[15%]'>
        <div className='ellipse absolute z-1 top-[-42%] left-[50%] sm:left-[40%] w-[80px] sm:w-[280px] 2xl:h-[200px]'></div>
        <div className='w-full md:flex justify-center items-center'>
        <div className=' md:w-[25%] flex items-center justify-center'>
        <div className=' w-32 md:w-64 shadow-xl shadow-gray-950 rounded-full'>
          <img src={photo} className='w-32 md:w-64 rounded-full'/>
        </div>
        </div>
        <div className='text-wrap md:ml-8 w-full flex items-center justify-center flex-col'>
        <h1 className={`${styles.heroHeadText} text-[#fff]`}>Hi, I'm <span className='text-[#3fff7a]'>Parushi  Haria</span></h1>
        <p className={`${styles.heroSubText} text-white-100 mt-2`}>I am a frontend developer <br className='sm:block hidden'/> and UI/UX designer.</p>
        <br></br>
        <br></br>
        <div className='flex gap-4'>
      <a href="https://www.linkedin.com/in/parushi-haria-1290a4290/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-5xl cursor-pointer hover:text-[#3fff7a] drop-shadow-lg' />
      </a>
      <a href="https://www.instagram.com/_paru10_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className='text-5xl cursor-pointer hover:text-[#3fff7a] drop-shadow-lg' />
      </a>
      <a href="https://github.com/Parushii" target="_blank" rel="noopener noreferrer">
        <FaGithub className='text-5xl cursor-pointer hover:text-[#3fff7a] drop-shadow-lg' />
      </a>
      <a href="#contact">
        <IoMdMail className='text-5xl cursor-pointer hover:text-[#3fff7a] drop-shadow-lg' />
      </a>
    </div>
        </div>
        </div>
      </div>
    </div>
    {/* <ComputersCanvas/> */}
    {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-2'>
      <a href="#about">
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
          >
        </motion.div>
      </div>
      </a>
    </div> */}
   </section>
  )
}

export default Hero