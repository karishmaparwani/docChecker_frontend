import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default function BasicModal({closeModal, showModal, modalTitle, modalActions, modalContent}) {


  return (
      <Dialog open={showModal} onClose={closeModal} sx={{textAlign: 'center'}} >
        {modalTitle &&
            <DialogTitle>
                {modalTitle}
            </DialogTitle>
        }
        {modalContent && 
            <DialogContent >
                {modalContent}
            </DialogContent>
        }
        {modalActions &&
            <DialogActions>
                {modalActions}
            </DialogActions>
        }
      </Dialog>
    
  );
}