import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../hooks/reduxhook'
import { 
    selectUserList,
    resetUserList,
    setUserList,
    UserListState
 } from "../../react-wrapper/redux/slices/userListSlice";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { getLoadingState } from "../../helpers/supportFunctions";


const Result = () => {

    //Hooks
    const userList = useAppSelector<UserListState>(selectUserList);
    const dispatch = useAppDispatch();

    console.log(userList)

    console.log(getLoadingState(userList.loading, 'GET_USER_LIST_DATA'))

    return (
        <div data-testid="result-component" className=' h-full w-full flex flex-row justify-center items-start'>
           <div className='w-full px-8 xl:px-0 xl:w-1/2 mt-10'>
           <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase">
                                       <div className='flex justify-start space-x-1'>
                                            <span>Id</span>
                                            <FaArrowDown title='Click to sort' className='mt-1.5 w-3 h-3 cursor-pointer'/>
                                       </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase">
                                    Avatar URL
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase">
                                       <div className='flex justify-start space-x-1'>
                                            <span>Login</span>
                                            <FaArrowDown title='Click to sort' className='mt-1.5 w-3 h-3 cursor-pointer'/>
                                       </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase">
                                        <div className='flex justify-start space-x-1'>
                                            <span>Type</span>
                                            <FaArrowDown title='Click to sort' className='mt-1.5 w-3 h-3 cursor-pointer'/>
                                        </div>
                                    </th>
                                    <th scope="col" className="p-4">
                                    <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">837843</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple Imac 27"</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Desktop PC</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$1999</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">09949</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple MacBook Pro 17"</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Laptop</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$2999</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">090302</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">iPhone 13 Pro</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Phone</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$999</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">909020</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple Magic Mouse 2</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Accessories</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$99</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">0726737</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple Watch Series 7</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Accessories</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$599</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">0903893</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple Watch Series 7</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Accessories</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$599</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100">
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">5367363</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">Apple Watch Series 7</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">Accessories</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">$599</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <a href="#" className="text-pink-500 hover:text-pink-700 hover:underline">View</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button type="button" className="text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2">Prev</button>
                    <button type="button" className="text-pink-500 hover:text-pink-700 border border-pink-500 hover:border-pink-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2">Next</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Result;
 