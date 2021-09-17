import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

let Menu = () =>{
    return(
        <div className={s.menu}>
            <NavLink to='/Main' className={s.navLink} activeClassName={s.active}>Main</NavLink>
            <NavLink to='/About' className={s.navLink} activeClassName={s.active}>About</NavLink>
            <NavLink to='/Карзина' className={s.navLink} activeClassName={s.active}>Карзина</NavLink>
            <NavLink to='/Contacts' className={s.navLink} activeClassName={s.active}>Contacts</NavLink>
        </div>
    )
}

export default Menu;