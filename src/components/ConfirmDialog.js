import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import Controls from "./controls/Controls"
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))
export default function ConfirmDialog(props) {

    const { confirmDialog, setConfirmDialog} = props;
    const classes = useStyles();
    return (
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                text="No"
                color="default"
                onClick={()=> setConfirmDialog({...confirmDialog, isOpen: false })}
                />
                 <Controls.Button
                text="Yes"
                color="Secondary"
                onClick={confirmDialog.onConfirm}
                />

            </DialogActions>
        </Dialog>
    )
}
