import {MouseEventHandler} from "react";

export interface DialogAddPropsDto{
    open: boolean,
    handleClose: MouseEventHandler;
    handleClickOpen: () => void
}

export interface DialogConfirmDeleteCategoryPropsDto{
    open: boolean,
    handleClose: MouseEventHandler;
    deleteItem: MouseEventHandler;
    handleClickOpen: () => void;
    categoryName: string
}
