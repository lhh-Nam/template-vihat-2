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

    _renderRoleForm() {
        const { item } = this.state;
        let modules = item.modules ? item.modules : [];
        console.log("🚀 ~ modules", modules)
        return modules.map((module, index) => <RoleForm module={module} key={index} />);
    }

    render() {
        const { classes } = this.props;
        const { item } = this.state;

        return (
            <div className={classes.roleEdit}>
                <div className={classes.heading}>
                    <div className={classes.fixed}></div>
                </div>
                <div className={classes.main}>
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
