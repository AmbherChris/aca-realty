import {  Poppins} from 'next/font/google'



 const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
 });



export default function NavBar() {
    return (

        <div className='sticky top-2 flex gap-15 bg-[white] py-4 px-8 size-fit shadow-lg items-center rounded-2xl z-20'>
            <div className='flex'>
            <a href='#' className='flex gap-1'>
                <img src="aca.png" className='h-6' />
                <span className= {` ${poppins.variable} font-bold text-[#1A1C20]`}>Realty</span>
            </a>
        </div>
        <div>
            <ul className='flex gap-6 items-center'>

                <a href='#'><li>Home</li></a>
                
                <a href='#about'><li>About Us</li></a>
                
                <a href='#'><li>Property</li></a>
                
                <a href='#'><li>Blogs</li></a>


                <a  className="bg-[#C55A11] p-1 px-3 text-[white] rounded-md" href='#'><li>Signup</li></a>
            </ul>
        </div>



        </div>

    )


}