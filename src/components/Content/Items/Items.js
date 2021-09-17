import s from './Items.module.css'
import {NavLink} from "react-router-dom";
import React from 'react';
import {arrCount} from '../Content'

let Items = (props) =>{
    const [likes, changeFunc] = React.useState(props.count);
    console.log(props.id);
    return(
        <div className={s.item}>
            <NavLink to={props.navLink} className={s.link}>
                <img src={props.src} alt="photo" className={s.img}/>
            </NavLink>
            <div className={s.info}>
                <div className={s.author}>
                    Krot K.
                </div>
                <div className={s.likes}>
                    <span>{likes} </span>
                    <button onClick={() => changeFunc(arrCount[props.id]+=1)}>Like</button>
                </div>
            </div>
        </div>
    )
}

export default Items;