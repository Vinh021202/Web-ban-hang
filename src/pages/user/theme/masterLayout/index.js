import { memo } from "react";
import HederLayout from "../hederLayout";
import FooterLayout from "../footerLayout";
import HomePage from "../../homePage";

const MasterLayout = ({children, ...props }) => {
    return (
        <div {...props}>
        <HederLayout />
        {children}
        <FooterLayout />
        </div>
    );
}

export default memo(MasterLayout);