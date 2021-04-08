import React from "react";
import {TabPanelPropsDto} from "../../ts/types/tab-panel-props.type";

    const TabPanel: React.FC<TabPanelPropsDto> = (
        {children, value, index, ...other}
    ) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {children}
        </div>
    );
}

export default TabPanel
