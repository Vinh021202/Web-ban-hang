
import { ROUTERS } from "./utils/rotuer";
import HomePage from "./pages/user/homePage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ProductsPage from "pages/user/productsPage";
import ProductDeitailPage from "pages/user/ProductDeitailPage";

const renderUserRouter = () => {
    const UserRouters = [
        {
            path : ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path : ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path : ROUTERS.USER.PRODUCTS,
            component: <ProductsPage />
        },
        {
            path : ROUTERS.USER.PRODUCT,
            component: <ProductDeitailPage />
        },
    ];

    return(
        <MasterLayout>
        <Routes>
             {UserRouters.map((item, key) => (
                 <Route key={key} path={item.path} element={item.component} />
             ))}
        </Routes>
        </MasterLayout>
    );
}


const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;