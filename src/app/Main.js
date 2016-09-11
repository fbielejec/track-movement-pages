/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React, {PropTypes, Component} from 'react'
// import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Drawer from 'material-ui/Drawer';
import {Drawer, AppBar, MenuItem} from 'material-ui'
// <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
//      </MuiThemeProvider>

//---MODULE EXPORTS---//

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        });
        console.log("click")
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <Drawer docked={false} open={this.state.open}>
                    <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Connecting</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Example code</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Download</MenuItem>
                </Drawer>

                <AppBar title="Track Movement" onLeftIconButtonTouchTap={this.handleToggle} />

            </div>
        );
    }
}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default Main;
