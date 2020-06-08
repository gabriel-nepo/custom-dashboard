import React, { useState, useEffect } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';

export default function DeleteDialog(props) {

    const [open, setOpen] = useState(false)
    const [user,setUser] = useState({});

    useEffect(() => {
        setOpen(props.deleteStatus);
        setUser(props.user);
    },[props.deleteStatus,props.user])

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={()=>props.close()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Delete user</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Are you sure you want to delete the user ${user.name}?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>props.close()} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>props.confirm()} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}