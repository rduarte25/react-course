import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/16/solid';

import { ShoppingCartContext } from '../../Context';

function Navbar() {
    const activeStyle = "underline underline-offset-4";
    const { count,setSearchByCategory } = useContext(ShoppingCartContext);
  return (
    <nav className='flex justify-between items-center fixes z-10 w-full py-5 px-8 text-sm font-light top-0'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink 
                    to="/"
                    onClick={() => setSearchByCategory(null)}
                >Shopi</NavLink>
            </li>
            <li>
                <NavLink to="/" 
                    onClick={() => setSearchByCategory(null)}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>All</NavLink>
            </li>
            <li>
                <NavLink to="/clothes" 
                    onClick={() => setSearchByCategory("clothes")}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Clothes</NavLink>
            </li>
            <li>
                <NavLink to="/electronics" 
                    onClick={() => setSearchByCategory("electronics")}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Electronics</NavLink>
            </li>
            <li>
                <NavLink to="/fornitures" 
                    onClick={() => setSearchByCategory("fornitures")}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Furnitures</NavLink>
            </li>
            <li>
                <NavLink to="/toys" 
                    onClick={() => setSearchByCategory("toys")}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Toys</NavLink>
            </li>
            <li>
                <NavLink to="/others" 
                    onClick={() => setSearchByCategory("others")}
                    className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Others</NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                elyouus@gmail.com
            </li>
            <li>
                <NavLink to="/my-orders" className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>My orders</NavLink>
            </li>
            <li>
                <NavLink to="/my-account" className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>My account</NavLink>
            </li>
            <li>
                <NavLink to="/sign-in" className={
                    ({isActive}) => 
                    isActive ? activeStyle : undefined
                }>Sign In</NavLink>
            </li>
            <li className='flex items-center'>
                <ShoppingBagIcon className="size-6 text-black" /> 
                <div>
                    {count}
                </div>
            </li>
        </ul>
    </nav>
  )
}

export { Navbar };
