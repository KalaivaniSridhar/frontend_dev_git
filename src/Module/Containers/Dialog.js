import React, { FunctionComponent } from 'react'
import Dialog from '@mui/material/Dialog';
type DialogProps = {
    open: boolean,
    onClose: () => void,
    fullWidth: boolean,
    fullScreen: boolean,
    maxWidth: string
}

const DialogBox: FunctionComponent<DialogProps> = ({ open, onClose, fullWidth, fullScreen, maxWidth, ...restProps }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth={fullWidth}
            fullScreen={fullScreen}
            maxWidth={maxWidth}
        >
            {restProps.children}
        </Dialog>
    )
}

export default DialogBox;


