import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work_carousel from '../components/Work/Work_carousel'

export default function Work() {
  return (
    <div id="work" className='w-full px-8 md:px-40 flex flex-col justify-center items-center'>
      <div className='w-full max-w-[90rem] py-[13rem] md:py-[25rem] flex flex-col justify-start items-start gap-y-16 md:gap-y-24'>
        <div>
          <p className="text-red text-xl md:text-2xl font-light">Portfolio</p>
        </div>
          <h2 className="text-left text-4xl md:text-6xl font-light text-white">Selected Work <br />
            2020 - 2023
          </h2>
        <div className="w-full pt-24">
          <Work_carousel />
        </div>
      </div>
    </div>
  )
}
