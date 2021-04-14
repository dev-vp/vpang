import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ArchiveVault extends React.Component{
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
        <div id="archivevault" className="project">
          <Button id="archivevault-button" onClick={this.handleClick}>
            <img src="./archive-vault.png"/>
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="cesv-dialog-title" className="dialog-title">UX/UI - Archive Vault</DialogTitle>
            <DialogContent>
              <DialogContentText id="cesv-description" className="dialog-content">
                An experimental UI/UX Design for an Archive Vault where emails are searchable by date range. User can filter by column and also inspect the body of each email.
              </DialogContentText>
              <DialogContent><a className="dialog-link" href="https://github.com/dev-vp/UIUX-Design_ArchiveVault" target="_blank">GitHub</a></DialogContent>
              {/* <DialogContent><a className="dialog-link" href="#" target="_blank">Deployed on Heroku</a></DialogContent> */}
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

export default ArchiveVault;
