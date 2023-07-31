import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function WhyUs({openWhy,setOpenWhy}) {
  //const [open, setOpen] = React.useState(false);
  //const [scroll, setScroll] = React.useState('paper');

  /* const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  }; */

  

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openWhy) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openWhy]);

  return (
    <div>
{/*       <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      <Dialog
        open={openWhy}
        onClose={()=>setOpenWhy(!openWhy)}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Why Us</DialogTitle>
        <DialogContent dividers={'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenWhy(!openWhy)}>Cancel</Button>
          <Button onClick={()=>setOpenWhy(!openWhy)}>Go</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
