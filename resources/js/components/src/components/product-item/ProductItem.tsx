import React from "react";
import {Avatar, Icon, IconButton, Paper} from "@material-ui/core";
import './ProductItem.css'
import { Link } from "react-router-dom"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {ProductItemPropsDto} from "../../ts/types/list-items-props.type";

const ProductItem: React.FC<ProductItemPropsDto> = ({item, style, deletingProduct, getCategory}) => {

    function deleteItem(){
        deletingProduct(item.product_id)
    }

   function photo(){
        return `http://127.0.0.1:8000/storage/${item.photo}`
    }

    return (
        <Paper elevation={0} style={style} className={'wrapper'} square>
            <div className='left-side'>
                <Avatar src={photo()} className={'avatar'}>{item.name}</Avatar>
                <div className='name'>
                    <div >{item.name}</div>
                    <div>Категория: <b>{getCategory(Number(item.category_id))?.name}</b></div>
                </div>
            </div>
            <div className='name'>

                <Link to={`/add/product/:${item.product_id}`}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <Icon>edit</Icon>
                    </IconButton>
                </Link>
                <IconButton onClick={deleteItem} aria-label="upload picture" component="span">
                    <HighlightOffIcon color="secondary"></HighlightOffIcon>
                </IconButton>

            </div>
        </Paper>
    )
}

export default ProductItem
