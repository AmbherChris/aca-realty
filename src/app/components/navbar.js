import { Poppins } from 'next/font/google'



const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
});



export default function NavBar() {
    return (

        <div className='sticky top-2 flex gap-30 bg-[white] py-4 px-8 size-fit shadow-lg items-center rounded-2xl z-20'>
            <div className='flex'>
                <a href='#' className='flex gap-1'>
                    <img src="aca.png" className='h-6' alt='logo' />
                    <span role="banner" className={` ${poppins.variable} font-bold text-[#1A1C20]`}>Realty</span>
                </a>
            </div>
            <nav role="navigation">
                <ul className='flex gap-8 items-center'>

                    <a href='#'><li>Sellers</li></a>
                    <a href='#about'><li>Buyers</li></a>
                    <a href='#about'><li>Tenants</li></a>
                    <a href='#'><li>Property Search</li></a>

                    <div className='flex ml-20'>
                        <a className="bg-[#C55A11] p-1 px-3 text-[white] rounded-md" href='#'><li>Sign up</li></a>
                        <a className=" p-1 px-3 rounded-md" href='#'><li>Sign In</li></a></div>
                </ul>
            </nav>



        </div>

    )


}