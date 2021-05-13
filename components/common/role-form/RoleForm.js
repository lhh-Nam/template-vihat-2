import React from 'react';
import { compose } from 'redux';
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

class RoleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }

    componentDidMount() {
        this.onName();
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

                <div className={classes.toggleBtn}>
                    <input type='checkbox' className={classes.appleSwitch} />
                </div>
            </div>
        )
    }

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
                {this._renderWrapper()}
                {/* {this._renderInfor()} */}

            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleForm);