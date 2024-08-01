import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import cat1Img from "assets/user/image/categories/cat-1.jpg";
import cat2Img from "assets/user/image/categories/cat-2.jpg";
import cat3Img from "assets/user/image/categories/cat-3.jpg";
import cat4Img from "assets/user/image/categories/cat-4.jpg";
import cat5Img from "assets/user/image/categories/cat-5.jpg";
import feature1Img from "assets/user/image/feature/feature-1.jpg";
import feature2Img from "assets/user/image/feature/feature-2.jpg";
import feature3Img from "assets/user/image/feature/feature-3.jpg";
import feature4Img from "assets/user/image/feature/feature-4.jpg";
import feature5Img from "assets/user/image/feature/feature-5.jpg";
import feature6Img from "assets/user/image/feature/feature-6.jpg";
import feature7Img from "assets/user/image/feature/feature-7.jpg";
import feature8Img from "assets/user/image/feature/feature-8.jpg";
import banner1Img from "assets/user/image/banner/banner-1.jpg";
import banner2Img from "assets/user/image/banner/banner-2.jpg";
import "./style.scss";
import { fomater } from "utils/fomater";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { BsCart2, BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductCard from "component/ProductCard/index";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi",
        },
        {
            bgImg: cat2Img,
            name: "Hoa quả khô",
        },
        {
            bgImg: cat3Img,
            name: "Rau củ tươi",
        },
        {
            bgImg: cat4Img,
            name: "Sữa hộp",
        },
        {
            bgImg: cat5Img,
            name: "Thịt bò",
        },
    ];

    const featProducst = {
        all:{
            title : "Toàn bộ",
            products :[
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
            ],
        },
        freshMeat:{
            title : "Thịt tươi",
            products :[
                {
                    img: feature1Img,
                    name: "thịt bò nạt",
                    price : 20000,
                },
            ],
        },
        fruits: {
            title: "Trái cây",
            products : [
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
                    img: feature7Img,
                    name: "Xoài",
                    price : 69000,
                },
                {
                    img: feature8Img,
                    name: "Táo Úc",
                    price : 57000,
                },
            ],
        },
        fastFood: {
            title: "Thức ăn nhanh",
            products : [
                {
                    img: feature6Img,
                    name: "hamburger",
                    price : 860000,
                },
            ],
        },
    };

    const renderFeatureProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <ProductCard name = {item.name} img = {item.img} price = {item.price} />
                </div>);
            });
            tabPanels.push(tabPanel);
        });

    // const renderFeatureProducts = (data) => {
    //     const tabList = [];
    //     const tabPanels = [];
    
    //     Object.keys(data).forEach((key, index) => {
    //         tabList.push(<Tab key={index}>{data[key].title}</Tab>);
    
    //         const tabPanel = [];
    //         data[key].products.forEach((item, j) => {
    //             tabPanel.push(<h1 key={j}>{item.name}</h1>);
    //         });
    
    //         tabPanels.push(<TabPanel key={index}>{tabPanel}</TabPanel>);
    //     });
        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className="row">{item}
                            </div>
                    </TabPanel>
                    ))}
          </Tabs>
        );
    };

    return (
        <>
        {/* Categories Begin */}
        <div className="container container_Categories_slider">
            <Carousel 
                responsive={responsive} 
                className="Categories_slider"
                autoPlay={true}
                autoPlaySpeed={300}
                infinite={true}
            >
                {sliderItems.map((item, key) => (
                    <div 
                        className="Categories_slider_item" 
                        style={{ backgroundImage: `url(${item.bgImg})` }}
                        key={key}
                    >
                        <p>{item.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
        {/* Categories End */}

        {/* Featured Begin */}
        <div className="container ">
            <div className="Featured">  
                <div className="section-title">
                    <h2>
                        Sản Phẩm nổi bật
                    </h2>
                </div>
                {renderFeatureProducts(featProducst)}
            </div>
        </div>
        {/* Featured End*/}
        
        {/* Banner Begin*/}
            <div className="container">
                <div className="banner">
                    <div className="banner_pic">
                        <img src={banner1Img} alt="" />
                    </div>
                    <div className="banner_pic">
                        <img src={banner2Img} alt="" />
                    </div>
                </div>

            </div>
        {/* Banner End*/}

        </>
    );
}

export default memo(HomePage);
