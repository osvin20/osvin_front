import React,{useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function OsbinModal({title,children}){
    const [open,setOpen] = useState(false);
    const openModal = () =>{
        setOpen(true);
    }
    const closeModal = () =>{
        setOpen(false);
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={openModal}>보기</Button>
            <Dialog open={open} onClose={closeModal}>
                <DialogTitle>
                    <h2>{title}</h2>
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={closeModal}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}
