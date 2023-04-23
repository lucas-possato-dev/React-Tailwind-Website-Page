import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='w-full h-[80px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between h-full items-center'>
        <div>
          <h1 className='text-[--primary-blue]'>Defi</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li className='hover:text-slate-500 cursor-pointer'>Platform</li>
            <li className='hover:text-slate-500 cursor-pointer'>Developers</li>
            <li className='hover:text-slate-500 cursor-pointer'>Community</li>
            <li className='hover:text-slate-500 cursor-pointer'>About</li>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        </div>
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center visible'  : 'absolute invisible'}>
          <ul>
            <li className='text-2xl hover:text-slate-500 cursor-pointer'>Platform</li>
            <li className='text-2xl hover:text-slate-500 cursor-pointer'>Developers</li>
            <li className='text-2xl hover:text-slate-500 cursor-pointer'>Community</li>
            <li className='text-2xl hover:text-slate-500 cursor-pointer'>About</li>
            <button className='m-8'>Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar