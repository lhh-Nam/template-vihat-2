import React from 'react';
import { compose } from 'redux';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// components
import { ImageViewer } from '../../../components/common';

//  material
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// assets
const icons = {
    arrowDown: require('../../../assets/icons/common/ic_arrow_down_g.png'),
    checkboxChecked: require('../../../assets/icons/common/ic_checkbox_b.png'),
    checkboxNonecheck: require('../../../assets/icons/common/ic_checkbox_outline_g.png'),
};

class RoleForm extends React.Component {
    constructor(props) {
        super(props);

        const { module } = this.props

        this.state = {
            name: '',
            isDiable: true,
            isCollapse: false,
            isRotate: false,
            isOpacity: false,
            isChecked: false,

            isEnabledModule: module.enabled,
            actions: []
        }
    }

    componentDidMount() {
        this.onName();
        this.onFunc();
        // console.log(this.state);
    }

    onEnabledModule = (event) => {
        this.setState({
            [event.target.name]: event.target.checked,
        });
    };

    onCollapse = () => {
        const { isCollapse, isRotate } = this.state
        this.setState(
            {
                isCollapse: !isCollapse,
                isRotate: !isRotate,
            }
        );
    };

    onCheck() {
        const { isChecked } = this.state
        this.setState(
            {
                isChecked: !isChecked,
            }
        );
    }

    onFunc() {
        const { module } = this.props
        let funcs = module.functions;
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
        const { module } = this.props
        let name = module.name;

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
        const { name, isDiable, isRotate, isEnabledModule } = this.state;

        return (

            <div className={classes.wrapper}>
                <div className={classes.name}>
                    <p>{name}</p>
                </div>

                <div className={classes.downUpBtn}>
                    <ImageViewer
                        src={icons['arrowDown']}
                        size={11}
                        style={{

                            transition: `all 0.2s ease 0s`,
                            transform: isRotate && 'rotate(180deg)',
                        }} />

                </div>

                <div >
                    <Switch
                        checked={isEnabledModule}
                        onChange={(e) => this.onEnabledModule(e)}
                        color="primary"
                        name="isEnabledModule"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </div>

        )
    }

    _renderFunction() {
        const { name, actions, isOpacity, isChecked, isEnabledModule } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.funcContainer} style={{ opacity: isEnabledModule || '0.5' }}>
                {actions.length > 0 ? actions.map((action, index) =>
                    <div key={index} className={classes.funcGroup}>
                        <div className={classes.funcName}>
                            <p>{action.name}</p>
                        </div>

                        {action.items.map((item, index) =>
                            <div className={classes.action} onClick={() => this.onCheck()} key={index}>
                                <ImageViewer
                                    src={icons[`checkbox${isChecked ? 'Checked' : 'Nonecheck'}`]}
                                    size={20}
                                />
                                <p>{item}</p>
                            </div>
                        )}
                    </div>
                ) : "......"}
            </div>
        )
    }

    render() {
        const { classes, module } = this.props;
        const { isCollapse } = this.state;
        console.log(this.props.module)
        console.log(this.state.isEnabledModule)
        return (
            <div className={classes.collapse}>
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

                <Collapse in={isCollapse} >
                    <Paper elevation={4} className={classes.paper}>
                        {this._renderFunction()}
                    </Paper>
                </Collapse>
            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleForm);