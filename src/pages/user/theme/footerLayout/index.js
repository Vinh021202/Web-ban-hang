import { memo } from "react";
import "./style.scss"
import { Link } from "react-router-dom";
import { BsCardText, BsFacebook, BsInstagram } from "react-icons/bs";

const FooterLayout = () => {
    return (
       <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-3">
                <div className="footer_about">
                    <h1 className="footer_about_logo">Happy Food</h1>
                    <ul>
                        <li>Địa Chỉ: 123 Đường số 9</li>
                        <li>Phone: 0946-565-316</li>
                        <li>Email: vinh02122002@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer_widget">
                    <h3>Cửa hàng</h3>
                    <ul>
                        <li>
                            <Link to={""}>Liên hệ</Link>
                        </li>
                        <li>
                            <Link to={""}>thông tin về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to={""}>sản phẩm kinh doanh</Link>
                        </li>
                        </ul>
                        <ul>
                        <li>
                            <Link to={""}>Thông tin tài khoản</Link>
                        </li>
                        <li>
                            <Link to={""}>giỏ hàng</Link>
                        </li>
                        <li>
                            <Link to={""}>Danh sách yêu thích</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="col-lg-3">
                <div className="footer_widget">
                <h3>Khuyến mãi với ưu đãi</h3>
                <p>Đăng ký nhận thông tin tại đây</p>
                <form action="#">
                    <div className="input-group">
                        <input type="Text" placeholder="Nhập email" />
                        <button type="submit" className="button-submit">Đăng ký</button>
                    </div>
                    <div className="footer_widget_social">
                        <div>
                        <BsFacebook />
                        </div>
                        <div>
                        <BsInstagram />
                        </div>
                        <div>
                        <BsCardText />
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
       </footer>
    );
}

export default memo(FooterLayout);