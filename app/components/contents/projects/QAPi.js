import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class QAPi extends React.Component{
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
        <div id="qap" className="project">
          <Button id="qap-button" onClick={this.handleClick}>
            Q+AP Interactive
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="qap-dialog-title" className="dialog-title" >Q+AP Interactive</DialogTitle>
            <DialogContent>
              <DialogContentText id="qap-description" className="dialog-content">
              Q+AP Interactive is a real-time polling application that was built as part of a five-day Stackathon. This application allows users to create survey poll(s) where any user with a given participant key may vote in real-time; making this application perfect for live-presentations whether remote / in-person. Survey results persist, and may be accessed at any time. As part of this build, the application leverages Socket.io, D3.js, React, Redux, Node, Sequelize, Express, PSQL, and Heroku for deployment.
              </DialogContentText>
              <DialogContent><a className="dialog-link" href="https://github.com/dev-vp/qaap" target="_blank">GitHub</a></DialogContent>
              <DialogContent><a className="dialog-link" href="https://qap-interactive.herokuapp.com/" target="_blank">Deployed on Heroku</a></DialogContent>
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

export default QAPi;
