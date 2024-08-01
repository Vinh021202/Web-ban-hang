import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss"
import { Link } from "react-router-dom";
import { categories } from "../theme/hederLayout";
import { ROUTERS } from "utils/rotuer";

import feature1Img from "assets/user/image/feature/feature-1.jpg";
import feature2Img from "assets/user/image/feature/feature-2.jpg";
import feature3Img from "assets/user/image/feature/feature-3.jpg";
import feature4Img from "assets/user/image/feature/feature-4.jpg";
import feature5Img from "assets/user/image/feature/feature-5.jpg";
import feature6Img from "assets/user/image/feature/feature-6.jpg";
import feature7Img from "assets/user/image/feature/feature-7.jpg";
import feature8Img from "assets/user/image/feature/feature-8.jpg";
import { ProductCard } from "component";


const productsPage = () => {
    const sorts =[
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "bán chạy nhất",
        "Đang giảm giá",
    ];

const products = [
    {
        img: feature1Img,
        name: "thịt bò nạt",
        price : 20000,
    },
    {
        img: feature2Img,
        name: "chuối",
        price : 17000,
    },
    {
        img: feature3Img,
        name: "Ổi",
        price : 22000,
    },
    {
        img: feature4Img,
        name: "Dưa hấu",
        price : 44020,
    },
    {
        img: feature5Img,
        name: "Nho tím",
        price : 17000,
    },
    {
        img: feature6Img,
        name: "hamburger",
        price : 860000,
    },
    {
        img: feature7Img,
        name: "Xoài",
        price : 69000,
    },
    {
        img: feature8Img,
        name: "Táo Úc",
        price : 57000,
    },

]

    return (
        <>
            <Breadcrumb name="Danh sách sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="sidebar">
                            <div className="sideber__item">
                                <h2>Tìm kiếm</h2>
                                <input type="text" />
                            </div>
                            <div className="sideber__item">
                                <h2>Mức giá</h2>
                                    <div className="price-range-wrap">
                                        <div>
                                            <p>Từ:</p>
                                            <input type="number" min={0}/>
                                        </div>
                                        <div>
                                            <p>Đến:</p>
                                            <input type="number" min={0}/>
                                        </div>
                                    </div>
                            <div className="sideber__item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                {
                                    sorts.map((item, key) => (
                                        <div className={`tag ${key ===0 ? "active" : ""}`} key={key}>{item} </div>
                                    ))
                                }
                                </div>

                            </div>
                            <div className="sideber__item">
                            <h2>Thể loại khác</h2>
                                <ul>
                                {
                                    categories.map((name, key) => (
                                        <li key={key}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>{name}
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-xl-9"> 
                        <div className="row">
                                {
                                    products.map((item, key) => (
                                        <div className="col-lg-4" key={key}>
                                            <ProductCard name = {item.name} img = {item.img} price = {item.price} />
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(productsPage);  