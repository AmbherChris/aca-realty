
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Landing() {
  return (
    <>
      <div className="relative mb-10 text-center flex flex-col items-center rounded-t-lg ">
        <h3 className={`${openSans.className} text-[#2E073F] text-[5.1rem] font-bold rounded-lg`}>
          Where Dreams Meet Realty
        </h3>

        <p
          className={`${openSans.className} text-[#2E073F] text-[1rem] font-regular text-center  max-w-[1000px] mx-auto mb-10 `}
        >
          Whether you're buying your first home, investing in property, or selling with confidence, we're here to guide you every step of the way. With a focus on transparency, efficiency, and personalized service, we help turn your real estate goals into reality.
        </p>



        <img
          className="bg-blue-500 h-[30rem] w-300 object-cover clip-hero-shape "
          
          src="house.jpeg" alt="house"
        />

        <div className="flex absolute top-150 left-0  bg-opacity-50  gap-6 rounded-lg w-fit text-black">
          <div className='flex flex-col bg-white p-4 text-left w-60 h-fit drop-shadow-md'>
            <p>Selling or letting?</p>
            <h3 className='font-bold text-[23px]'>Instant valuation</h3>
          </div>
          <div className='flex flex-col bg-white  p-4 text-left w-60 h-fit drop-shadow-md'>
            <p>Buying or renting?</p>
            <h3 className='font-bold text-[23px]'>Find property</h3>
          </div>
        </div>
      </div>

      <div id="about" className="bg-gray-50 py-16 px-6 sm:px-12 w-full mt-230">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-5 ">About Us</h2>
          <p className="text-lg text-gray-600 mb-4 max-w-prose">
            At ACA Realty, we are passionate about helping our clients find their dream homes. With a commitment to personalized service and a focus on making real estate easy and transparent, we stand out as a trusted partner in the home-buying process.
          </p>
        </div>

        <div className="flex items-center text-center max-w-screen-xl mx-auto gap-10">
          <div className="about-card">
            <h3 className="about-title  ">Our Mission</h3>
            <p className="about-p">
              Our mission is simple: to help people make informed real estate decisions that align with their personal and financial goals. Whether you're buying your first home or selling a property, we offer expert advice and guidance at every step.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-title  ">Our Values</h3>
            <p className="about-p">
              We believe in honesty, integrity, and excellence in everything we do. Our team is dedicated to providing unmatched customer service, ensuring that every client feels supported and confident throughout their real estate journey.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-title ">Why Choose Us</h3>
            <p className="about-p">
              Why choose ACA Realty? Because we understand that real estate decisions are life-changing. Our personalized approach ensures that your experience is seamless, transparent, and stress-free. We focus on your needs and help you make decisions that are best for you.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}