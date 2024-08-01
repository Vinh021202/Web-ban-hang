import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss"
import Cat1Img from "assets/user/image/categories/cat-1.jpg";
import Cat2Img from "assets/user/image/categories/cat-2.jpg";
import Cat3Img from "assets/user/image/categories/cat-3.jpg";
import { BsCardText, BsFacebook, BsFillEyeFill, BsInstagram } from "react-icons/bs";
import { fomater } from "utils/fomater";



const ProductDeitailPage = () => {
    
    const imgs = [
        Cat1Img,
        Cat2Img,
        Cat3Img,
    ]

    return (
        <>
            <Breadcrumb name="Chi tiết sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 product__detail__pic">
                        <img src={Cat3Img} alt="product-pic" />
                        <div className="main">
                        {imgs.map((item, key)=> (
                               <img src={item} alt="product-pic" key={key} />
                        ))}
                        </div>
                    </div>
                    <div className="col-xl-6 product__detail__text ">
                        <h2>Rau củ xanh</h2>
                        <div className="seen-icon">
                        <BsFillEyeFill />
                            {`10 lượt xem`}
                        </div>
                        <h3>{fomater(2000000)}</h3>
                        <p>
                        HAPPY FOOD là một trong những hệ thống cửa hàng hoa quả nhập 
                        khẩu ở Đà Nẵng cung cấp cho quý khách những trái
                        dưa lưới Egardentươi ngon nhất cũng như các loại hoa
                        quả nhập khẩu, hoa quả vùng miền khác.
                        </p>
                        <ul>
                            <li>
                                <b>Tình trạng:</b> <span>Còn hàng</span>
                            </li>
                            <li>
                                <b>Số lượng:</b> <span>20</span>
                            </li>
                            <li>
                                <b>Chia sẽ:</b>{" "}<span>
                                <BsFacebook />
                                <BsInstagram />
                                <BsCardText />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ProductDeitailPage);  