import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "utils/rotuer";
const { BsFillEyeFill, BsCart2 } = require("react-icons/bs");
const { Link, generatePath } = require("react-router-dom");
const { fomater } = require("utils/fomater");

const ProductCard = ({img,name , price }) => {
    return (
        <>

                    <div className="Feature_item pl-pr-10">
                        <div className="Feature_item_pic"
                        style={{
                            backgroundImage: `url(${img})`,
                        }}
                        >
                            <ul className="Feature_item_pic_hover">
                                <li>
                                <BsFillEyeFill />
                                </li>
                                <li>
                                <BsCart2 />
                                </li>
                            </ul>
                        </div>
                        <div className="Feature_item_text">
                            <h4>
                                <Link to={generatePath(ROUTERS.USER.PRODUCT, {id : 1})}>{name}</Link>
                            </h4>
                            <h3>
                                {fomater(price)}
                            </h3>
                        </div>
                    </div>
        </>
    );
}

export default memo(ProductCard);