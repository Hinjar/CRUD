import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {DialogConfirmDeleteCategoryPropsDto} from "../../ts/types/dialogs-props.type";
import './Dialog.css'

const ConfirmDeleteCategoryDialog : React.FC<DialogConfirmDeleteCategoryPropsDto> = ({open, handleClose, categoryName,deleteItem}) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className='dialog-title' id="alert-dialog-title">Удаление</DialogTitle>
                <DialogContent className='dialog-content'>
                    <h5 className='select-text'>Вы уверены что хотите удалить категорию: <b>{categoryName}</b>
                    </h5>
                    <h5 className='select-text'>Все продукт из данной категории будут удалены</h5>
                    <Button onClick={deleteItem} className='select-btn' color={'primary'}>Удалить</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ConfirmDeleteCategoryDialog
