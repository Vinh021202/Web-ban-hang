import { memo, useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { BsFacebook, BsInstagram, BsCardText, BsChatDots, BsPersonHeart, BsEnvelope ,BsCart ,BsFillMenuButtonWideFill, BsTelephone  } from "react-icons/bs";
import { fomater } from "utils/fomater";
import { ROUTERS } from "utils/rotuer";


export const categories = [
    "Thịt tươi",
    "Rau củ",
    "Nước trái cây",
    "Trái cây",
    "Hải sản",
];

const HederLayout = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname.length <= 1);
    const [isShowCategories, setShowCategories] = useState(isHome);

    const [menus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu : false,
            child : [
                {
                    name: "thịt",
                    path: "",
                },
                {
                    name: "rau củ",
                    path: "",
                },
                {
                    name: "thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);

    useEffect(() => {
        const isHome = location.pathname.length <= 1;
        setIsHome(isHome);
        setShowCategories(isHome);
    }, [location])

    return (
    <>
        <div className="herder_top">
            <div className="container">
                <div className="row">
                <div className="col-6 herder_top_left">
                    <ul>
                        <li>
                            <Link to={""}><BsEnvelope />  </Link>
                            vinhtran02122002@gmail.com
                        </li>
                        <li>Miễn Phí ship nội thành {fomater(200000)}
                        </li>
                    </ul>
                </div>
                <div className="col-6 herder_top_right">
                    <ul>
                        <li>
                            <Link to={""}> <BsFacebook /></Link ></li>
                            <li>
                            <Link  to={""}> <BsInstagram /></Link ></li>
                            <li>
                            <Link  to={""}> <BsCardText /></Link ></li>
                            <li>
                            <Link  to={""}> <BsChatDots /></Link ></li>
                            <li>
                            <Link  to={""}><BsPersonHeart /> </Link >
                            <span>Đăng Nhập</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row">

            <div className="col-xl-3  ">
                <div className="header_logo">
                    <h1>Shop Food</h1>
                </div>
            </div>
            <div className="col-xl-6 ">
                <nav className="header_menu">
                    <ul>
                        {
                             menus?.map((menu , menukey) => (
                                <li key={menukey} className={menukey ===0 ? "active" : ""}>
                                <Link to={menu?.path}>{menu?.name}</Link>
                                 { menu.child && (
                                     <ul className="header_menu_dropdown">
                                        {menu.child.map((childItem, childKey) =>(
                                         <li key={`${menukey}-${childKey}`}>
                                         <Link to={childItem.path}>{childItem.name}</Link>
                                     </li>
                                      ))}
                                    </ul>
                                 )}   
                                 </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="col-xl-3">
                <div className="header_cart">
                    <div className="header_cart_price">
                        <span>{fomater(2000000)}</span>
                    </div>
                    <ul>
                        <li>
                            <Link to={""}>
                            <BsCart /> <span>5</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        
        </div>
        </div>
        <div className="container">
        <div className="row hero_categories_container">
        <div className="col-xl-3 hero_categories">
            <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
            <BsFillMenuButtonWideFill />
                Danh sách sản phẩm</div>
                     <ul className={isShowCategories ? "" : "hidden"}>
                        {
                            categories.map((category, key) => (
                                <li key={key}>
                                <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                            </li>
                            ))
                        }
                </ul>        
            </div>
        <div className="col-xl-9 hero_search_container" >
            <div className="hero_search">
                <div className="hero_search_from">
                    <form>
                        <input type="Text" placeholder="bạn đang tìm gì"></input>
                        <button type="submit">Tìm Kiếm</button>
                    </form>
                </div>
                    <div className="hero_search_phone">
                    <div className="hero_search_phone_icon">
                        <BsTelephone />
                    </div>
                    <div className="hero_search_phone_text">
                        <p>0946.565.316</p>
                        <span>hỗ trợ 24/7</span>
                    </div>
                </div>
            </div>
            {
                isHome && (
                    <div className="hero_item">
                 <div className="hero_test">
                     <span>Trái cây tươi</span>
                     <h2>Rau quả <br />
                         sạch 100%
                     </h2>
                     <p>Miễn phí giao hàng tận nơi</p>
                     <Link to={""} className="primary-btn">Mua ngay</Link>
                 </div>
             </div>
                )
            }
        </div>
        </div>
        </div>
    </>
    );
}

export default memo(HederLayout);