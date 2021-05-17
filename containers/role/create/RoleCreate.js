import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// hocs
import withAuth from '../../../hocs/AuthHocs';

// actions
import CreateActions from '../../../redux/user/CreateRedux';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// components
import RoleForm from '../../../components/common/role-form'
import RoleInput from '../../../components/common/role-input/RoleInput';

class RoleCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                create: 'creates',
            },
        }
    }

    componentDidMount() {
        const { classify } = this.state;
        let id = `vihat_omi_default`;
        this.props.getCreates(classify.create, { id: id, lang: 'vi' });
    }


    render() {
        console.log(this.props.createContent)
        return (<><h1>Nam</h1></>);
    }
}

const mapStateToProps = state => {
    return {
        createFetching: state.create.fetching,
        createContent: state.create.content,
    }
}

const mapDispatchToProps = dispatch => ({
    // create
    getCreates: (classify, params) => dispatch(CreateActions.getCreatesRequest(classify, params)),
});

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RoleCreate);;