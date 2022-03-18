import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { 
    selectUserList,
    resetUserList,
    setUserList
 } from "../../react-wrapper/redux/slices/userListSlice";


const Footer = () => {
    return (
        <div data-testid="footer-component" className='w-full h-24 border-t'>
            <div className='containe h-full w-full mx-auto flex flex-col justify-center items-center'>
                <p>Design and Coded by the only fire coder <strong className='text-pink-500'>{`<Junicodes />`}</strong></p>
                <p>© 2022 scal.io™. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
 