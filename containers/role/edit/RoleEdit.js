import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// hocs
import withAuth from '../../../hocs/AuthHocs';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// components
import RoleForm from '../../../components/common/role-form'

class RoleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                role: 'roles',
            },
            item: {},

        }
    }

    componentDidMount() {
        this.onFindItem();
    }

    // get id from url
    static getInitialProps({ query }) {
        return { query };
    }

    onFindItem() {
        const { classify } = this.state;
        const { query, roleFetching, roleContent } = this.props;
        let roles = roleContent[classify.role] ? roleContent[classify.role].items : [];
        let id = query.id;

        // find item in redux array
        let item = roles.find(element => element._id === id)
        this.setState({ item: item });
    }

    handleInput = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                [key]: e.target.value,
            }
        });
    };

    _renderRoleForm() {
        const { item } = this.state;
        let modules = item.modules ? item.modules : [];
        return modules.map((module, index) => <RoleForm module={module} key={index} />);
    }

    _renderInputColor() {
        const { classes } = this.props;
        const { item, nam } = this.state
        return (
            <div className={classes.inputColor}>
                <div className={classes.container}>
                    <div className={classes.inputArea}>
                        <div className={classes.inputItem}>
                            <label className={classes.nam} htmlFor="role">Tên quyền</label>
                            <input
                                type='text'
                                id="role"
                                value={item.name}
                                onChange={(e) => this.handleInput(e, "name")} />
                        </div>

                        <div className={classes.inputItem}>
                            <label htmlFor="desc">Mô tả</label>
                            <textarea
                                type='text'
                                value={item.description}
                                onChange={(e) => this.handleInput(e, "description")}
                                rows='7' cols='40' id="desc" />
                        </div>
                    </div>

                    <div className={classes.colorArea}>
                        <lable>Màu nổi bật</lable>

                        <div className={classes.group} >
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                            <div className={classes.color}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        //console.log("🚀 ~ classes", classes)
        const { item } = this.state;

        return (
            <div className={classes.roleEdit}>
                <div className={classes.heading}>
                    <div className={classes.fixed}></div>
                </div>

                <div className={classes.main}>
                    {this._renderInputColor()}
                    {this._renderRoleForm()}
                </div>
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        //role
        roleFetching: state.role.fetching,
        roleContent: state.role.content,
    }
}

//export default RoleEdit;
export default compose(withStyles(styles), connect(mapStateToProps))(RoleEdit);
