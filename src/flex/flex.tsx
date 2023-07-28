import React from 'react';
import s from './flex.module.css'

export const Flex = () => {
    return (<>
        <div className={s.flex1}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCSD3gcrp0S5WWq8H19oHiZCZwXYPqGlv6Q&usqp=CAU'} alt=""/>
           <h2 className={s.p}> Телефон</h2>
            <p className={s.p}>{'We introduce MusicLM, a model generating high-fidelity music from text descriptions such as "a calming violin melody backed by a distorted guitar riff". MusicLM'}</p>
        </div>
            <div className={s.flex2}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCSD3gcrp0S5WWq8H19oHiZCZwXYPqGlv6Q&usqp=CAU'} alt=""/>
                <h2 className={s.p}> Почта</h2>
                <p className={s.p}>{'We introduce MusicLM, a model generating high-fidelity music from text descriptions such as "a calming violin melody backed by a distorted guitar riff". MusicLM'}</p>
            </div>
            <div className={s.flex3}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCSD3gcrp0S5WWq8H19oHiZCZwXYPqGlv6Q&usqp=CAU'} alt=""/>
                <h2 className={s.p}> Aдресс</h2>
                <p className={s.p}>{'We introduce MusicLM, a model generating high-fidelity music from text descriptions such as "a calming violin melody backed by a distorted guitar riff". MusicLM'}</p>
            </div>
        </>
    );
};

// type FlexType={
//     src:string
//     name:string
//
// }