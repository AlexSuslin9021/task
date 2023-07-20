import React, {useEffect} from 'react';


import {getData} from "../reducers/users.slice";
import {useAppSelector} from "./useAppSelector";
import {useAppDispatch} from "../useAppDispatch";


export const Tables = () => {

    const data = useAppSelector(state => state.users)
    console.log(data)

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getData())
    },[ dispatch])
    return (

        <>
            {data.map((el)=>{
                return <div key={el.id}>
                    <img style={{width:'50px',height:'50px'}} src={el.imageUrl} alt=""/>
                    <p>{el.title}</p>
                </div>
            })}
        </>
    );
};



