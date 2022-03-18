import React, { useState } from 'react'
import styles from './Home.module.scss'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { 
    selectUserList,
    resetUserList,
    setUserList
 } from "../../react-wrapper/redux/slices/userListSlice";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Result from '../Result/Result';


const Home = () => {
    return (
        <div data-testid="home-component">
            <Header />
            <div className={`${styles.body}`}>
                <Search />
                {/* <Result /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home;
 