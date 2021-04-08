import React from "react";
import {Paper, Tabs} from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import TabPanel from "../tab-panel/TabPanel";
import {a11yProps} from "../../ts/utils/a11y-props";
import InfinityLoader from "../infinity-loader/InfinityLoader";
import {ItemListPropsDto} from "../../ts/types/item-list.type";
const ItemList : React.FC<ItemListPropsDto> = ({tabValue, handleTabValueChange, products, RowProduct, categories, RowCategory}) => {

    return (
        <div>
            <Paper className='paper' square>
                <Tabs
                    value={tabValue}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="disabled tabs example"
                    onChange={handleTabValueChange}
                >
                    <Tab label="Товары" {...a11yProps(0)}/>
                    <Tab label="Категории" {...a11yProps(1)}/>

                </Tabs>
            </Paper>
            <TabPanel value={tabValue} index={0}>
                {
                   products.length ?
                        <InfinityLoader itemSize={80} itemsCount={products.length}>{RowProduct}</InfinityLoader> :
                        'Товаров не найдено'
                }
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                {
                    categories.length ?
                        <InfinityLoader itemSize={80} itemsCount={categories.length}>{RowCategory}</InfinityLoader> :
                        'Категорий не найдено'
                }
            </TabPanel>
        </div>
    )
}

export default ItemList
