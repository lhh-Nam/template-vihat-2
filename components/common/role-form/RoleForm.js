import React from 'react';
import { compose } from 'redux';
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { checked } from 'glamor';


class RoleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            funcName: [],
            actions: [],
            isDiable: false,
            isCollapse: false,
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
        let { funcName } = this.state;
        let funcs = this.props.module.functions;

        let a = [];


        funcs.map(func => {
            let nam = func.name.split(".")[0];
            let huy = func.name.split(".")[1];
            a.indexOf(nam) === -1 ? a.push(nam) : false
        });

        // funcs.map(func => {
        //     let le = func.name;
        //     let nam = func.name.split(".")[0];
        //     let huy = func.name.split(".")[1];
        //     if (a.indexOf(nam) === -1) {
        //         a.push(le);
        //     }
        // });

        console.log("🚀 ~ a", a)

        //let name = result[0];
        //func.name.split(".")
        //funcName.indexOf(result[0]) === -1 ? funcName.push(result[0]) : false;
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
        const { name } = this.state;

        return (
            <div className={classes.wrapper}>
                <div className={classes.name}>
                    <p>{name}</p>
                </div>

                <div className={classes.downUpBtn}>
                    <img className={classes.nam} src={require('../../../assets/icons/common/ic_arrow_down_g.png')} />
                </div>

                <div >
                    <Switch
                        checked={this.state.checkedB}
                        onChange={(e) => this.onDisable(e)}
                        color="primary"
                        name="isCollap"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    {/* <input type='checkbox' className={classes.appleSwitch} /> */}
                </div>
            </div>
        )
    }

    _render

    _renderInfor() {
        return (
            <div>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
                <p>nam</p>
            </div>
        )
    }

    render() {
        const { classes, module } = this.props;
        const { name } = this.state;
        return (
            <div className={classes.roleItem}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.isCollapse}
                            onChange={() => this.onCollapse()}
                            className={classes.displayNone}
                        />
                    }
                    label={this._renderWrapper()}
                />

                <div className={classes.container}>
                    <Collapse in={this.state.isCollapse}>
                        <Paper elevation={4} className={classes.paper}>
                            <p>ádgasdgasdg</p>
                        </Paper>
                    </Collapse>
                </div>

            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleForm);