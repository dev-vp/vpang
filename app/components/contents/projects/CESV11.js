import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CESV11 extends React.Component{
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
        <div id="cesv11" className="project">
          <Button id="cesv-button" onClick={this.handleClick}>
            <img src="./CESV11.png"/>
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="cesv-dialog-title" className="dialog-title">CESV-11</DialogTitle>
            <DialogContent>
              <DialogContentText id="cesv-description" className="dialog-content">
                CESV-11 is a mock e-commerce website that offers the latest selection of smartphones on the market. Developed with CRUD in mind, this single page application was created with React, Redux, Express, PSQL, Sequelize, Node, Passport, and Heroku for deployment.
              </DialogContentText>
              <DialogContent><a className="dialog-link" href="https://github.com/2011-FSA-Team-Iota/GraceShopper" target="_blank">GitHub</a></DialogContent>
              <DialogContent><a className="dialog-link" href="https://fsa-graceshopper.herokuapp.com" target="_blank">Deployed on Heroku</a></DialogContent>
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

export default CESV11;
