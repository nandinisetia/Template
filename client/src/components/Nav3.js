import React from 'react'
import { useNavigate } from "react-router-dom";

function Nav3() {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/login");
      };
  return (
    <div className='hidden lg:flex fixed flex-col top-[45%] left-0'>
          <li className='w-[160px] h-[100px] flex justify-between items-center ml-[-100px] hover:ml-[-2px] duration-300 bg-[#637373]'>
            <a
              className='flex justify-left items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/noordeepkaur/'
              rel="noopener noreferrer" target="_blank"
            >
              
            </a>
          </li>
      </div>
  )
}

export default Nav3