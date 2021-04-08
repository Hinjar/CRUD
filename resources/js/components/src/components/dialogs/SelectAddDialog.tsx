import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Dialog.css'
import { Link } from 'react-router-dom';
import {DialogAddPropsDto} from "../../ts/types/dialogs-props.type";

const SelectAddDialog : React.FC<DialogAddPropsDto> = ({open, handleClose}) => {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className='dialog-title' id="alert-dialog-title">{"Добавить"}</DialogTitle>
                <DialogContent className='dialog-content'>
                    <h5 className='select-text'>Необходимо добавить новую категорию?</h5>
                    <Link className='select-link' to={`/add/category`}>
                        <Button onClick={handleClose} className='select-btn' color={'primary'}>Добавить категорию</Button>
                    </Link>
                    <hr/>
                    <h5 className='select-text'>Необходимо добавить новый товар?</h5>
                    <Link className='select-link' to={`/add/product`}>
                        <Button onClick={handleClose} className='select-btn' color={'primary'}>Добавить товар</Button>
                    </Link>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SelectAddDialog
