import s from './App.module.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
  return (
      <BrowserRouter>
        <div className={s.App}>
            <div className={s.container}>
                <Header />
                <Route path='/Main' render={()=><Content/>}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
