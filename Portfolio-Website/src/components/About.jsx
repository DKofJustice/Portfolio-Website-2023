import skills from './Skills/Skills'
import CodeImage from './../assets/Code_image.png'

export default function About() {
  return (
    <div id='about' className='w-full px-8 md:px-40 flex flex-col justify-center items-center'>
      <div className='w-full max-w-[90rem] py-[6rem] md:py-[10rem] flex flex-col justify-start items-start gap-y-16 md:gap-y-24'>
        <div>
          <p className="text-red text-xl md:text-2xl font-light">About me</p>
        </div>

        <div className='max-w-3xl'>
          <h2 className="text-left text-4xl md:text-6xl font-light text-white">I can deliver digital products that look outstanding</h2>
        </div>

        <div className='relative w-full pt-36'>
          <div className='absolute z-10 pt-8'>
            <img src={CodeImage} alt="" />
          </div>

          <div className='relative flex flex-col justify-start items-end z-20'>
            <div className='max-w-[40rem] bg-gray-800/80 2xl:bg-transparent p-4 2xl:p-0'>
              <p className='text-left text-lg md:text-2xl font-light text-white/70'>
                Hi, I&apos;m Alex Benta, I am a web developer and UI / UX designer, with an understanding of 
                implementing themes and designs that look clean, modern and elegant. I love to create 
                designs that look outstanding in this way, as if I were to own these, while developing 
                and coding in an efficient way, learning along the way new ideas and concepts to improve 
                my work. I prefer to design and create digital products that look in the best way possible, 
                while proritizing quality design and optimized development.
              </p>
            </div>

            <ul className='w-full max-w-[40rem] grid grid-cols-3 gap-8 py-20'>
              {skills.map(skill => {
                return (
                  <li key={skill.id} className='py-3 bg-gradient-to-r from-[#D92B2B] to-[#C030D8] text-xl font-light'>{skill.skill}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
