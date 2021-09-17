import s from './Content.module.css'
import Items from "./Items/Items";
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

export let arrCount=[0,0,0,0,0,0];

let Content = () =>{
    return(
        <div className={s.items}>
            <Items count={arrCount[0]} id={0} navLink='/Main/1' src={img1}/>
            <Items count={arrCount[1]} id={1} navLink='/Main/2' src={img2}/>
            <Items count={arrCount[2]} id={2} navLink='/Main/3' src={img3}/>
            <Items count={arrCount[3]} id={3} navLink='/Main/4' src={img4}/>
            <Items count={arrCount[4]} id={4} navLink='/Main/5' src={img5}/>
            <Items count={arrCount[5]} id={5} navLink='/Main/6' src={img6}/>
        </div>
    )
}

export default Content;