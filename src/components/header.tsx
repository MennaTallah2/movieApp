import MenuItem from './MenuItem';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center align-middle py-6 px-6'>
        <div className='flex'>
            <MenuItem title="HOME" address='/' Icon={AiFillHome} />
            <MenuItem title="ABOUT" address='/about' Icon={AiFillInfoCircle} />

        </div>
        <div className='flex items-center space-x-5'>
          <DarkModeSwitch/>
          <Link href='/' >
            <h2 className=''><span className=' font-bol
             bg-amber-500 py-1 px-2 rounded-lg mr-2'>IMDB</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
          </Link>
        </div>
    </div>
  )
}
