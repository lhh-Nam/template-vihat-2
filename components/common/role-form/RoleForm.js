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
            isCollapse: false,
            isRotate: false,
            isEnabledModule: module.enabled,
            functions: [],
            checked: [],
        }
    }

    componentDidMount() {
        this.onName();
        this.onFunc();
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

    onCheck(funcName, indexFunc, action, enabled, indexAction) {
        const { checked, functions } = this.state;

        this.setState({
            functions: {
                ...functions,
                [indexFunc]: {
                    name: funcName,
                    items: {
                        ...functions[indexFunc].items,
                        [indexAction]: {
                            name: action,
                            enabled: !enabled,
                        }
                    }
                }
            }
        })
    }

    onSelectAll(isSelectAll) {
        const { checked, functions } = this.state;
        Object.keys(functions).map((func, indexFunc) => {
            let fn = functions[func];

            Object.keys(fn.items).map((action, indexAction) => {
                let act = fn.items[action];

                this.setState(prevState => ({
                    functions: {
                        ...prevState.functions,
                        [indexFunc]: {
                            name: fn.name,
                            items: {
                                ...prevState.functions[indexFunc].items,
                                [indexAction]: {
                                    name: act.name,
                                    enabled: isSelectAll ? true : false,
                                }
                            }
                        }
                    }
                }))
            });
        });
    }

    onFunc() {
        const { module } = this.props;
        const { checked } = this.state;
        let funcs = module.functions;
        let aArr = [];
        let bArr = [];

        funcs.map(func => {
            let action = func.name.split(".");
            let enabled = func.enabled;
            aArr.push({ action, enabled });
            let nam = func.name.split(".")[0];
            bArr.indexOf(nam) === -1 ? bArr.push(nam) : false
        });

        let result = bArr.map((b) => {
            let a1 = aArr.filter((a) => a.action[0] === b).map((a) => {
                return {
                    name: a.action[1],
                    enabled: a.enabled,
                }
            });
            return {
                name: b,
                items: Object.assign({}, a1),
            }
        })


        this.setState({
            functions: result,
            checked: Object.assign({}, result),
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
        const { classes } = this.props;
        const { name, isRotate, isEnabledModule } = this.state;

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
        const { functions, isEnabledModule, checked } = this.state;
        const { classes } = this.props;

        return (
            <div >
                {Object.keys(functions).length > 0 ? Object.keys(functions).map((func, indexFunc) => {
                    let fn = functions[func];
                    return (
                        <div key={indexFunc} className={classes.funcGroup}>
                            <div className={classes.funcName}>
                                <p>{fn.name}</p>
                            </div>

                            {
                                Object.keys(fn.items).map((action, indexAction) => {
                                    let act = fn.items[action];
                                    return (
                                        <div
                                            className={classes.action}
                                            onClick={() => isEnabledModule && this.onCheck(fn.name,
                                                indexFunc, act.name, act.enabled, indexAction)}
                                            key={indexAction}
                                            style={{ cursor: isEnabledModule ? 'pointer' : 'text' }}
                                        >
                                            <ImageViewer
                                                src={icons[`checkbox${act.enabled ? 'Checked' : 'Nonecheck'}`]}
                                                size={20}
                                            />
                                            <p style={{ color: act.enabled ? `#267aff` : '#494949' }}>{act.name}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                }) : "......"}
            </div>
        )
    }



    render() {
        const { classes } = this.props;
        const { isCollapse, isEnabledModule } = this.state;

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
                        <div className={classes.funcContainer} style={{ opacity: isEnabledModule ? 1 : 0.5 }}>
                            {this._renderFunction()}
                            <div className={classes.selects}>
                                <p
                                    onClick={() => isEnabledModule && this.onSelectAll()}
                                    style={{ cursor: isEnabledModule ? 'pointer' : 'text' }}
                                >Bỏ chọn tất cả</p>
                                <p
                                    onClick={() => isEnabledModule && this.onSelectAll("isSelectAll")}
                                    style={{ cursor: isEnabledModule ? 'pointer' : 'text' }}
                                >Chọn tất cả</p>
                            </div>
                        </div>
                    </Paper>
                </Collapse>
            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleForm);