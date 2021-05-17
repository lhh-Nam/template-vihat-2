import React from 'react';
import { compose } from 'redux';
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class RoleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isDiable: false,
            isCollapse: false,
            actions: []
        }
    }

    componentDidMount() {
        this.onName();
        this.onFunc();
        // console.log(this.state);
    }

    onDisable = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    onCollapse = () => {
        this.setState(
            { isCollapse: !this.state.isCollapse }
        );
        //this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    onFunc() {
        let funcs = this.props.module.functions;
        let aArr = [];
        let bArr = [];

        funcs.map(func => {
            aArr.push(func.name.split("."))
            let nam = func.name.split(".")[0];
            let huy = func.name.split(".")[1];
            bArr.indexOf(nam) === -1 ? bArr.push(nam) : false
        });

        let result = bArr.map((b) => {
            let a1 = aArr.filter((a) => a[0] === b).map((a) => a[1]);
            return {
                name: b,
                items: a1,
            }
        })

        this.setState({
            actions: result
        })
    }

    onName() {
        let name = this.props.module.name;

        switch (name) {
            case "admin":
                this.setState({ name: "Quản trị" });
                break;

            case "record_ticket":
                this.setState({ name: "Phiếu ghi" });
                break;

            case "phonebook":
                this.setState({ name: "Khách hàng" });
                break;

            case "marketing":
                this.setState({ name: "Marketing" });
                break;

            case "integrated":
                this.setState({ name: "Tích hợp" });
                break;

            case "switchboard":
                this.setState({ name: "Tổng đài" });
                break;

            case "employees":
                this.setState({ name: "Nhân viên" });
                break;

            case "statistical":
                this.setState({ name: "Thống kê" });
                break;

            case "configure_the_switchboard":
                this.setState({ name: "Cấu hình tổng đài" });
                break;

            case "other_configuration":
                this.setState({ name: "Cấu hình khác" });
                break;

            case "login_configuration":
                this.setState({ name: "Cấu hình đăng nhập" });
                break;

            default:
                break;
        }
    }

    _renderWrapper() {
        const { classes, module } = this.props;
        const { name, isDiable } = this.state;

        return (
            <div >
                <div className={classes.wrapper}>
                    <div className={classes.name}>
                        <p>{name}</p>
                    </div>

                    <div className={classes.downUpBtn}>
                        <img className={classes.nam} src={require('../../../assets/icons/common/ic_arrow_down_g.png')} />
                    </div>

                    <div >
                        <Switch
                            checked={isDiable}
                            onChange={(e) => this.onDisable(e)}
                            color="primary"
                            name="isDiable"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        {/* <input type='checkbox' className={classes.appleSwitch} /> */}
                    </div>
                </div>
            </div>
        )
    }

    _renderFunction() {
        const { name, actions } = this.state;
        const { classes } = this.props;
        //console.log("🚀 ~ RoleForm ~ _renderFunction ~ actions", actions)

        return (
            <div className={classes.func}>
                {actions.length > 0 ? actions.map((action, index) =>
                    <div key={index}>
                        <p style={{ color: 'red' }}>{action.name}</p>

                        {action.items.map((item, index) => <p key={index}>{item}</p>)}
                    </div>) : "......"}
            </div>
        )

    }

    render() {
        const { classes, module } = this.props;
        const { isCollapse } = this.state;
        return (
            <div >
                <div>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isCollapse}
                                onChange={() => this.onCollapse()}
                                className={classes.displayNone}
                            />
                        }
                        label={this._renderWrapper()}
                        className={classes.roleItem}
                    />
                </div>

                <div className={classes.container}>
                    <Collapse in={isCollapse}>
                        <Paper elevation={4} className={classes.paper}>
                            {this._renderFunction()}
                        </Paper>
                    </Collapse>
                </div>

            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleForm);