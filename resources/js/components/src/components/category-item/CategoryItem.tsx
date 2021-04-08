import React from "react";
import {Avatar, Icon, IconButton, Paper} from "@material-ui/core";
import './CategoryItem.css'
import {CategoryItemPropsDto} from "../../ts/types/list-items-props.type";
import {Link} from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ConfirmDeleteCategoryDialog from "../dialogs/ConfirmDeleteCategoryDialog";
import {getProductCount} from "../../ts/utils/get-category";

const CategoryItem : React.FC<CategoryItemPropsDto> = ({style, item, deletingCategory}) => {

    const openDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const deleteItem = () => {
        setOpen(false);
        deletingCategory(item.category_id)
    }

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Paper elevation={0} style={style} className={'wrapper'} square>
                <div className='left-side'>
                    <Avatar className={'avatar'}>{item.name}</Avatar>
                    <div className='name'>
                        <div >{item.name}</div>
                        <div >Количество продуктов: <b>{getProductCount(item.category_id)}</b></div>
                    </div>
                </div>
                <div className='name'>
                    <Link to={`/add/category/:${item.category_id}`}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Icon>edit</Icon>
                        </IconButton>
                    </Link>
                    <IconButton onClick={openDialog} aria-label="upload picture" component="span">
                        <HighlightOffIcon color="secondary"></HighlightOffIcon>
                    </IconButton>
                </div>
            </Paper>
            <ConfirmDeleteCategoryDialog
                open={open}
                handleClickOpen={openDialog}
                handleClose={handleClose}
                categoryName={item.name}
                deleteItem={deleteItem}
            />
        </>
    )
}

export default CategoryItem
