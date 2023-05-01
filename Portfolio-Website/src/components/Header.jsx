import { IconContext } from "react-icons";
import AlexLogo from './../assets/Alex_Logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from "react";

export default function Header() {

    const [header, setHeader] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const [headerStyle, setHeaderStyle] = useState(false);

    const toggleHeader = () => {
        setHeader(!header);
    }

    useEffect(() => {
        const handleScrollBg = () => {
            const scrollPos = window.scrollY;
            if(scrollPos > 0) {
                setBgColor('bg-grey-100/70');
                setHeaderStyle(true);
            } else {
                setBgColor('');
                setHeaderStyle(false);
            }
        };

        window.addEventListener('scroll', handleScrollBg);
        return () => window.removeEventListener('scroll', handleScrollBg);
    }, []);

  return (
    <div className={`fixed z-50 w-full transition ease-in-out duration-200 ${bgColor} px-8 md:px-40 py-12 flex flex-col justify-center items-center`}>
        <header className='w-full max-w-[90rem] flex flex-row justify-start items-center'>
            <div>
                <a href="#hero"><img src={AlexLogo} alt="Website Logo" /></a>
            </div>

            <div className='md:hidden ml-auto' onClick={toggleHeader}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <AiOutlineMenu />
                </IconContext.Provider>
            </div>

            <ul className={`absolute md:static ${!header ? '-top-[30rem]' : 'top-0' } w-full md:w-fit bg-grey-100/70 md:bg-transparent
            md:ml-auto flex flex-col md:flex-row justify-center items-center 
            gap-y-8 md:gap-x-12 right-0 py-12 md:py-0 transition-all duration-500 md:transition-none`}>
                <li onClick={toggleHeader} className='md:hidden'>
                    <IconContext.Provider value={{ size: "1.5em" }}>
                        <AiOutlineClose/>
                    </IconContext.Provider>
                </li>
                <li className="text-white/70 hover:text-white/40 transition duration-200 cursor-pointer"><a href="#hero">Home</a></li>
                <li className="text-white/70 hover:text-white/40 transition duration-200 cursor-pointer"><a href="#work">Work</a></li>
                <li className="text-white/70 hover:text-white/40 transition duration-200 cursor-pointer"><a href="#about">About me</a></li>
                <li className="text-white/70 hover:text-white/40 transition duration-200 cursor-pointer"><a href="#services">Services</a></li>
                <li className="text-white/70 hover:text-white/40 transition duration-200 cursor-pointer"><a href="#contact">Contact</a></li>
            </ul>
        </header>
    </div>
  )
}
