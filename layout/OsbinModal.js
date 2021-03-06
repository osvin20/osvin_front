import React,{useState,forwardRef, useImperativeHandle} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router'

const OsbinModal =forwardRef(({title,children,bnt_title,class_name,modalFun,modal_id,close_con,btn_label,action_label,modal_class},ref) => {
  const [open,setOpen] = useState(false);
  const openModal = () =>{
      setOpen(true);
  }
  const closeModal = () =>{
      setOpen(false);
  }
  const actionModal = (e) =>{
      modalFun(e);
      closeModal();
  }
  useImperativeHandle(ref, () => ({
     closeModal() {
       setOpen(false);
     }
  }));

  const router = useRouter()
  return (
      <div className="osbinModal">
          <span onClick={openModal} className={class_name}>{bnt_title}</span>
          <Dialog open={open} onClose={closeModal} id={modal_id} className={modal_class}>
              <DialogTitle>
                  {title}
              </DialogTitle>
              <DialogContent>
                  {children}
              </DialogContent>
              <DialogActions>
                  {typeof  modalFun == "function" ?
                  <Button variant="outlined" color="primary" className={'action_btn'} onClick={actionModal}>{action_label}</Button>:
                  ""}
                  {close_con !== false ?
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={closeModal}
                    className={'modal_close'}>
                    {btn_label}
                  </Button>:
                  ""}
              </DialogActions>
          </Dialog>
      </div>
  )
})
OsbinModal.defaultProps = {
  btn_label: "닫기",
  action_label: "네",
}
export default OsbinModal;
