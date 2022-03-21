import React, { useEffect, useState } from "react";
import styles from "./Result.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxhook";
import { GET_USER_LIST_DATA_ASYNC_ACTION } from "../../react-wrapper/redux/actions/userList";
import { LoaderState, ResultProps } from "./Interfaces";
import UserListTable from "../sub-components/UserListTable/UserListTable";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

const Result = ({ payload }: ResultProps) => {

  //State
  const [loaderInfo, setLoaderInfo] = useState<LoaderState>({
      status: false,
      loader: ""
  });

  //Hooks
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Effect
  useEffect(() => {
    //redirect if payload item is null or localstorage is empty
    if(!payload.userList.items) {
        navigate("/")
    }
    return () => {}
  }, [payload.userList.items, navigate])
  

  //handler function
  const handleNextpage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
        e.preventDefault();

        if(payload.userList.total_count <= payload.per_page
            || Math.trunc(payload.userList.total_count/payload.per_page) === Math.trunc(payload.page)) return false;

        setLoaderInfo({status: true, loader: 'Loading Next Page...'});
        triggerPageLoad(action === 'last' ? payload.userList.total_count/payload.per_page : payload.page + 1);
  };

    const handlePrevpage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
        e.preventDefault();
        if(payload.page <= 1) return false;
        
        setLoaderInfo({status: true, loader: 'Loading Prev Page...'});
        triggerPageLoad(action === 'first' ? 1 : payload.page - 1);
    };

    //triggerApi 
    const triggerPageLoad = (page: number) => {
        //Simulate a temperary delay 
        const delay = setTimeout(async () => {
            await dispatch(GET_USER_LIST_DATA_ASYNC_ACTION([payload.searchQuery, payload.per_page, page]));
            setLoaderInfo({status: false, loader: ''});
        }, 500);

        return () => clearTimeout(delay);
    }

  return (
    <div
      data-testid="result-component"
      className=" h-full w-full flex flex-row justify-center items-start"
    >
      <div className="w-full px-8 xl:px-0 xl:w-4/6">
        <div className="flex flex-col">
          <div className={`h-14`}>
            <div data-testid="loading-new-page" className={`${loaderInfo.status ? styles.showloader : "hidden"} my-2 h-24`}>
                <p className="animate-pulse text-md mt-2">{loaderInfo.loader}</p>
                <div className={`${styles.loader}`}>
                    <div className={`${styles.loaderBar}`}></div>
                </div>
            </div>
          </div>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <div className="flex justify-between mb-1">
                  <div className="flex justify-start">
                        
                        <small>Ascending</small> 
                        &nbsp;<FaArrowUp
                            title="Click to sort in descending order"
                            className="mt-1 w-3 h-3 cursor-pointer text-gray-300"
                        />
                        &nbsp;<span className="text-pink-500">|</span>&nbsp;
                        <small>Descending</small> 
                        &nbsp;<FaArrowDown
                            title="Click to sort in descending order"
                            className="mt-1 w-3 h-3 cursor-pointer text-gray-300"
                        />
                        &nbsp;<span className="text-pink-500">|</span>&nbsp;
                        <small>Sorted</small>(
                            <FaArrowUp
                                title="Click to sort in descending order"
                                className="mt-1 w-3 h-3 cursor-pointer text-pink-500"
                            />
                            <FaArrowDown
                                title="Click to sort in descending order"
                                className="mt-1 w-3 h-3 cursor-pointer text-pink-500"
                            />
                        )
                  </div>
                  <div className="flex justify-start">
                    <small data-testid="page-view">Page: {Math.trunc(payload.page)}</small>
                    &nbsp;<span className="text-pink-500">|</span>&nbsp;
                    <small>Per Page: {payload.per_page}</small>
                    &nbsp;<span className="text-pink-500">|</span>&nbsp;
                    <small>Total Loaded: {payload.page * payload.per_page}</small>
                    &nbsp;<span className="text-pink-500">|</span>&nbsp;
                    <small>Total Found: {payload.page * payload.userList.total_count}</small>
                  </div>
                </div>
                <UserListTable payload={payload} />
              </div>
            </div>
          </div>
          {/* Show no login user found here */}
          <div>
            {
                payload?.userList?.items && payload?.userList?.items.length <= 0 &&
                <div className="mt-5">
                    <p className="text-lg">No Login User Found</p>
                </div>
            }
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={(e) => handlePrevpage(e, 'first')}
              disabled={payload.page <= 1 ? true : false}
              type="button"
              className={`${payload.page <= 1 ? 'text-gray-200 hover:text-gray-200 border border-gray-200 cursor-not-allowed' 
                : 'text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700'}
                focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 cursor-pointer`} 
                >
              First
            </button>
            <button
              onClick={(e) => handlePrevpage(e, 'prev')}
              disabled={payload.page <= 1 ? true : false}
              type="button"
              className={`${payload.page <= 1 ? 'text-gray-200 hover:text-gray-200 border border-gray-200 cursor-not-allowed' 
                : 'text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700'}
                focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 cursor-pointer`} 
                >
              Prev
            </button>
            <button 
              onClick={(e) => handleNextpage(e, 'next')}
              disabled={
                   payload.userList.total_count <= payload.per_page ||
                   Math.trunc(payload.userList.total_count/payload.per_page) === Math.trunc(payload.page)
                   ? true : false
              }
              type="button"
              className={`${
                payload.userList.total_count <= payload.per_page ||
                  Math.trunc(payload.userList.total_count/payload.per_page) === Math.trunc(payload.page) 
                  ? 'text-gray-200 hover:text-gray-200 border border-gray-200 cursor-not-allowed' 
                    : 'text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700'
                }
              focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 cursor-pointer`} 
              >
              Next
            </button>
            <button
              onClick={(e) => handleNextpage(e, 'last')}
              disabled={
                    payload.userList.total_count <= payload.per_page ||
                    Math.trunc(payload.userList.total_count/payload.per_page) === Math.trunc(payload.page)
                    ? true : false
            }
              type="button"
              className={`${
                payload.userList.total_count <= payload.per_page ||
                  Math.trunc(payload.userList.total_count/payload.per_page) === Math.trunc(payload.page) 
                  ? 'text-gray-200 hover:text-gray-200 border border-gray-200 cursor-not-allowed' 
                    : 'text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700'
                }
              focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 cursor-pointer`} 
              >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
