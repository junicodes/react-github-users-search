import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './ResultList.module.scss'
import { useAppSelector } from '../../hooks/reduxhook'
import { selectUserList, UserListState} from "../../react-wrapper/redux/slices/userListSlice";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Result from '../../components/Result/Result';
import { useNavigate } from "react-router-dom";


const ResultList = () => {

    //Hooks
    const userList = useAppSelector<UserListState>(selectUserList);
    const navigate = useNavigate();

    //Effect
    useEffect(() => {
        //redirect if payload item is null or localstorage is empty
        if(!userList.userList.items) {
            navigate("/")
        }
        return () => {}
    }, [userList.userList.items, navigate])

    return (
        <div data-testid="resultlist-component" className='w-full'>
            <Header headerText={
                <>
                    <strong>
                        Be Happy and Smile,&nbsp;
                        <strong className='text-pink-500'>
                            Great
                        </strong> 
                        &nbsp;Mind
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
                <p className='mt-3 text-2xl'>
                    Search Query:&nbsp;
                    <span data-testid="search-query" className='italic'>"{userList.searchQuery}"</span>
                </p>
                <Result payload={userList} />
            </div>
            <div className='mb-5'>
                <p>Click here to search with another&nbsp;
                    <Link to="/">
                        <span className='text-pink-500 hover:text-pink-700 cursor-pointer'>
                        Login
                        </span>
                    </Link>
                    &nbsp;user
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default ResultList;
 