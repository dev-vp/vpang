import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Notables extends React.Component{
  constructor(){
    super()
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(){this.setState({open: true})}
  handleClose(){this.setState({open: false})}

  render(){
    return (
        <div id="notables" className="project">
          <Button id="notables-button" onClick={this.handleClick}>
            Notables
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="notables-dialog-title">Notables</DialogTitle>
            <DialogContent>
              <DialogContentText id="notables-description">
              Notables is a plain text editor that was built primarily with vanilla Javascript, HTML, and CSS. This application can not only convert your documents into Markdown syntax, but also run arbitrary code through its integrated sandbox built with Docker, Express, and VM2 for added security.
              </DialogContentText>
              <DialogContent><a class="dialog-link" href="https://github.com/2011-libra/notables" target="_blank">GitHub</a></DialogContent>
              <DialogContent><a class="dialog-link" href="#">AWS (EC2) - Currently Unavailable</a></DialogContent>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
  }
};

export default Notables;
