import { HiOutlineMail } from 'react-icons/hi'
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <div id='contact' className='w-full px-8 md:px-40 flex flex-col justify-center items-center'>
      <div className='relative w-full max-w-[90rem] pt-[6rem] md:pt-[10rem] flex flex-col justify-start items-center gap-y-16 md:gap-y-24'>
        <div>
          <p className="text-red text-xl md:text-2xl font-light">Contact</p>
        </div>

        <div className='max-w-3xl'>
          <h2 className="text-center text-4xl md:text-6xl font-light text-white">Let’s collaborate on the next project</h2>
        </div>

        <footer className='w-full max-w-[90rem] border-grey-100 border rounded-xl p-12 lg:py-20
        flex flex-col md:flex-row justify-start items-center gap-y-12'>
          <div className='flex flex-row justify-start items-center gap-x-8'>
            <IconContext.Provider value={{ size: "1.5em", className: 'text-white/70' }}>
              <HiOutlineMail/>
            </IconContext.Provider>

            <p className="text-left text-base md:text-xl font-light text-white/70">contact@alexbenta.com</p>
          </div>

          <ul className='md:ml-auto flex flex-col lg:flex-row justify-start items-center gap-x-16 gap-y-8'>
            <li className="text-left text-base md:text-xl font-light text-white/70"><a href="https://www.linkedin.com/in/alex-benta-4718a3143/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
            <li className="text-left text-base md:text-xl font-light text-white/70"><a href="https://dribbble.com/tahu2332" target='_blank' rel='noreferrer'>Dribbble</a></li>
            <li className="text-left text-base md:text-xl font-light text-white/70"><a href="https://www.facebook.com/profile.php?id=100089471928790">Facebook</a></li>
          </ul>
        </footer>

        <div className='w-full pb-[4rem]'>
          <p className="text-left text-base md:text-xl font-light text-white/70">©Alex Bența. All rights reserved 2023</p>
        </div>
      </div>
    </div>
  )
}
