import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../reducers/store";

import {InitialStatetupe} from "../reducers/users.slice";


export const Tables = () => {

    const users = useSelector<RootState,InitialStatetupe[]>(state => state.users)

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};



