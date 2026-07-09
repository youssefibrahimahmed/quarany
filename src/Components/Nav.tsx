import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='text-center items-center w-[80%] mx-auto my-4 rounded-lg fixed top-0 left-0 right-0 flex bg-gray-900 text-white p-4 z-10 '>
            <h1 className='text-sm text-green-600 font-bold'>🎵 Quran Player       </h1>
            <div className='flex gap-4 ml-auto text-sm'>

                <NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}> All Suwar       </NavLink>
         

            </div>

        </div>
    )
}

export default Nav