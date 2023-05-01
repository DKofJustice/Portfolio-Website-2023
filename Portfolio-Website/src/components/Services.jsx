import services from './Services/ServiceList'
import SquareImage from './../assets/Square_side_image.svg'

export default function Services() {
  return (
    <div id='services' className='w-full px-8 md:px-40 flex flex-col justify-center items-center'>
      <div className='relative w-full max-w-[90rem] py-[6rem] md:py-[10rem] flex flex-col justify-start items-center gap-y-16 md:gap-y-24'>
        <div>
          <p className="text-red text-xl md:text-2xl font-light">Services</p>
        </div>

        <div className='relative z-20 max-w-3xl'>
          <h2 className="text-center text-4xl md:text-6xl font-light text-white">I can deliver digital products that look outstanding</h2>
        </div>

        <div className='absolute -right-[20rem] z-10'>
          <img src={SquareImage} alt="" />
        </div>

        <div className='relative z-20 w-full max-w-[80rem] p-12 bg-[#111111]'>
          <div className='border-2 border-grey-100 rounded-2xl py-20'>
            <ul className='w-full max-w-[40rem] mx-auto flex flex-col justify-center items-start md:py-12 
            px-3 gap-y-6 md:gap-y-20 md:grid md:grid-cols-2'>
              {services.map(service => {
                return (
                  <li key={service.id}
                  className="text-left text-base md:text-xl font-light text-white/70 border-l border-white/70
                  px-3"
                  >{service.service}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
