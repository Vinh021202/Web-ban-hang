import { memo } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/rotuer";


const Breadcrumb = (props) => {
    return (
        <>
        <div className="Breadcrumb">
            <div className="Breadcrumb__text">
                <h2>
                    Happy Food 
                </h2>
                <div className="Breadcrumb__option">
                    <ul>
                        <li className="link"> 
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li> 
                           {props.name}</li>
                    </ul>

                </div>
            </div>
        </div>
        </>
    );
}

export default memo(Breadcrumb);