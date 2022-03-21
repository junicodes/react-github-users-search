import React, { useState } from 'react'
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { ResultProps } from '../../Result/Interfaces';
import { useAppDispatch } from '../../../hooks/reduxhook'
import { setUserList, setCurrentSort } from "../../../react-wrapper/redux/slices/userListSlice";
import { sortObjectItem } from '../../../helpers/supportFunctions';

const Table = ({payload}: ResultProps) => {

    //hook
    const dispatch = useAppDispatch();

    const handleSort = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, clickKey: string, clickType: string) => {
        e.preventDefault();

        if(payload.userList.items) {
            const temp = [...payload.userList.items];
            let key   = payload.current_sort.key;
            let order = payload.current_sort.order;
            //If the key is not the same with the redux state 
            key = clickKey;
            //If the key is the same with the redux state  
            if(key === clickKey) { order === 'asc' ? order = 'desc' : order = 'asc'}

            temp.sort(sortObjectItem(key, order, clickType));

            dispatch(setUserList(temp))
            dispatch(setCurrentSort({key, order, type: clickType}))
        }
    }
    
    return (
        <div data-testid="table-component" className="relative">
            <table
                    data-testid="result-table"
                    className="min-w-full divide-y divide-gray-200 table-fixed"
                >
                <thead className="bg-gray-100">
                <tr>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                    <div className="flex justify-start space-x-1">
                        <span>No</span>
                    </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                    <div onClick={(e) => handleSort(e, 'id', 'number')} data-testid="id-col" className="flex justify-start space-x-1  cursor-pointer">
                        <span>Id</span>
                        {
                            payload.current_sort.order === 'asc' &&
                            <FaArrowDown
                            title="Click to sort in descending order"
                            data-testid="id-down-icon"
                            className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'id' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                        {
                            payload.current_sort.order === 'desc' &&
                            <FaArrowUp
                            title="Click to sort in ascending order"
                            data-testid="id-up-icon"
                            className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'id' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                    </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                    Avatar URL
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                    <div onClick={(e) => handleSort(e, 'login', 'object')} data-testid="login-col" className="flex justify-start space-x-1  cursor-pointer">
                        <span>Login</span>
                        {
                            payload.current_sort.order === 'asc' &&
                            <FaArrowDown
                                title="Click to sort in descending order"
                                className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'login' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                        {
                            payload.current_sort.order === 'desc' &&
                            <FaArrowUp
                            title="Click to sort in ascending order"
                            className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'login' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                    </div>
                    </th>
                    <th
                    scope="col"
                    className="py-3 px-6 text-sm tracking-wider text-left font-bold uppercase"
                    >
                    <div onClick={(e) => handleSort(e, 'type', 'object')} data-testid="type-col" className="flex justify-start space-x-1 cursor-pointer">
                        <span>Type</span>
                        {
                            payload.current_sort.order === 'asc'&&
                            <FaArrowDown
                            title="Click to sort in descending order"
                            className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'type' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                        {
                            payload.current_sort.order === 'desc' &&
                            <FaArrowUp
                            title="Click to sort in ascending order"
                            className={`mt-1.5 w-3 h-3 cursor-pointer ${payload.current_sort.key === 'type' ? 'text-pink-500': 'text-gray-300'}`}
                            />
                        }
                    </div>
                    </th>
                    <th scope="col" className="p-4">
                    <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {payload?.userList?.items &&
                    payload.userList.items.map((item: any, i: number) => (
                    <tr
                        key={item.id}
                        data-testid="result-column"
                        className="hover:bg-gray-100"
                    >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                        {((payload.page * payload.per_page) - payload.per_page) + (i+1)}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                        {item.id}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                        {item.avatar_url}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap text-left">
                        {item.login}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-left">
                        {item.type}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                            href="#"
                            className="text-pink-500 hover:text-pink-700 hover:underline"
                        >
                            View
                        </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <p data-testid="sort-checker" className='absolute -mt-6 hidden'>{payload.current_sort.key}</p>
        </div>
    )
}

export default Table;
 