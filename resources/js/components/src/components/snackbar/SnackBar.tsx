import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert/Alert";
import React from "react";
import {SnackbarPropsDto} from "../../ts/types/product-form.type";

const MessageSnackbar : React.FC<SnackbarPropsDto> = ({handleClose, open, duration, text, severity = 'success'}) =>{
    return(
        <Snackbar onClose={handleClose} open={open} autoHideDuration={duration} >
            <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity={severity}>
                {text}
            </MuiAlert>
        </Snackbar>
    )
}

export default MessageSnackbar
