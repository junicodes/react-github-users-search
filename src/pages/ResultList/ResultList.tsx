import React, { useState } from 'react'
import { Link } from "react-router-dom";
import styles from './ResultList.module.scss'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { 
    selectUserList,
    UserListState
 } from "../../react-wrapper/redux/slices/userListSlice";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Result from '../../components/Result/Result';


const ResultList = () => {

    return (
        <div data-testid="resultlist-component">
            <Header headerText={
                <>
                    <strong>
                        Welcome To This 
                        <strong className='text-pink-500'>
                            Awesome
                        </strong> 
                        App
                    </strong>
                </>
            } heroText="“There are no secrets to success. It is the result of preparation, hard work, and learning from failure.”"
              heroTextAuthor="General Colin Powell, former US Secretary of State"
            />
            <div className={`${styles.body}`}>
                <h1 className='pt-10'>
                    <strong data-testid="title" className='text-pink-500 text-3xl'>
                        Result
                    </strong>
                </h1>
                <Result />
            </div>
            <div className='mb-5'>
                <p>Click to search with another&nbsp;
                    <Link to="/">
                        <span className='text-pink-500 hover:text-pink-700 cursor-pointer'>
                        Login
                        </span>
                    </Link>
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default ResultList;
 