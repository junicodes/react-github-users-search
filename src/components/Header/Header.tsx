import React, { useState } from 'react'
import styles from './Header.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { 
    selectUserList,
    resetUserList,
    setUserList
 } from "../../react-wrapper/redux/slices/userListSlice";
 import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { HeaderProps } from './Interfaces';


const Header = ({headerText, heroText, heroTextAuthor}: HeaderProps) => {

    return (
        <div data-testid="header-component" className={`${styles.container} h-96 w-full flex justify-center items-center`}>
          <div>
            <h1 className='text-5xl text-white font-bold drop-shadow-3xl text-shadow-xl p-5 rounded-full'>
              {headerText}
            </h1>
                <blockquote className='text-white text-2xl w-1/2 mx-auto text-shadow-xl'>  
                  <span data-testid="hero-text">{heroText}</span>
                  <strong data-testid="hero-text-author" className='text-pink-500'>&nbsp;{heroTextAuthor}</strong>
                </blockquote>
            FaArrowDown
            <div className='flex justify-center mt-5 cursor-pointer'>
                 <FaArrowDown className="animate-bounce text-white w-10 h-10" />
            </div>
          </div>
        </div>
    )
}

export default Header;
 