import s from './Header.module.css'
import Menu from "./Menu/Menu";

let Header = () =>{
    return(
     <div className={s.header}>
        <Menu />
     </div>
    )
}

export default Header;