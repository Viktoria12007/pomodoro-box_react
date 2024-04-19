import "./index.css";
import {Link} from "react-router-dom";
import {FC} from "react";

const NotFound: FC = () => {
    return (
        <div className="errorLayout">
            <div className="error">
                <div>404 — страница не найдена!</div>
                <Link to="/">Вернуться назад</Link>
            </div>
        </div>
    )
}
export default NotFound;
