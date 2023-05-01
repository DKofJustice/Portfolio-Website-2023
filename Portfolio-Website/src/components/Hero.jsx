import CornerIll from '../assets/Corner Line Illustration.svg'
import { useState, useEffect, useRef } from 'react';

export default function Hero() {

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div id='hero' ref={ref} className='w-full px-8 md:px-40 flex flex-col justify-center items-center'>
      <div className='w-full max-w-[90rem] flex flex-col justify-start items-start gap-y-16 md:gap-y-24'>
        <div className="mt-[13rem] md:mt-[20rem]">
          <p className={`text-4xl md:text-6xl lg:text-8xl font-light text-left
          transition-all duration-1000 ${inView ? 'opacity-100 ml-0' : 'opacity-0 -ml-[10rem]'}`}>Hello, I&apos;m <span className="font-normal">Alex</span>,</p>
          <p className={`text-4xl md:text-6xl lg:text-8xl pt-12 font-light text-left text-transparent bg-clip-text 
          bg-gradient-to-r from-[#91C2E5] to-[#E12CFF80]
          transition-all duration-[1000ms] delay-[300ms] ${inView ? 'opacity-100 ml-[5rem] md:ml-[8rem] lg:ml-[14rem]' : 'opacity-0 -ml-[10rem]'}`}>Web Developer</p>
        </div>

        <div className={`transition-all duration-1000 delay-[600ms] ${inView ? 'opacity-100 ml-0' : 'opacity-0 -ml-[10rem]'}`}>
          <p className="text-left text-base md:text-xl font-light text-white/70">Creating digital products and experiences, from designs to fullstack websites</p>
        </div>

        <div className={`transition-all duration-1000 delay-[900ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10rem]'}`}>
          <a href="#contact"><button className="bg-red scale-1 hover:bg-red/70 hover:scale-[1.04] transition-bg duration-200 py-3 md:py-4 px-12 md:px-20 rounded-2xl text-lg md:text-2xl">Hire me</button></a>
        </div>
      </div>

      <div className="w-full py-12 md:-ml-24 flex flex-row justify-start items-end">
        <div>
          <img src={CornerIll} alt="corner-illustration" />
        </div>

        <div className="w-full">
          <ul className="flex flex-row justify-end items-center gap-x-4 md:gap-x-16 text-base md:text-xl font-light text-white/70">
            <li className='cursor-pointer'><a href="https://www.linkedin.com/in/alex-benta-4718a3143/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
            <li className='cursor-pointer'><a href="https://dribbble.com/tahu2332" target='_blank' rel='noreferrer'>Dribbble</a></li>
            <li className='cursor-pointer'><a href="https://www.facebook.com/profile.php?id=100089471928790" target='_blank' rel='noreferrer'>Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
