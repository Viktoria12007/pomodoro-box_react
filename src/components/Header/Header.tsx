import {FC} from "react";
import {Link} from "react-router-dom";
import IconChart from "../icons/IconChart";
import './index.css';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container header__wrap'>
        <Link to="/">
          <img alt="Логотип" className="logo" src="./src/assets/logo.svg" width="205" height="40"/>
        </Link>
        <nav>
          <Link to="/statistics" className='header__link'>
            <IconChart className='header__icon'/>
            <div>Статистика</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
export default Header;
