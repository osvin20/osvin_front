import React,{useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function OsbinModal2({title,children,bnt_title,class_name,modalFun,modalId}){
    const [open,setOpen] = useState(false);
    const openModal = () =>{
        setOpen(true);
    }
    const closeModal = () =>{
        setOpen(false);
    }
    return (
        <div className="osbinModal2">
            <span onClick={openModal} className={class_name}>{bnt_title}</span>
            <Dialog open={open} onClose={closeModal} id={modalId}>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}
