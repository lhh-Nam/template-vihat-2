import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// hocs
import withAuth from '../../../hocs/AuthHocs';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import { useRouter } from 'next/router'



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
        this.onItem();
    }

    // get id from url
    static getInitialProps({ query }) {
        return { query };
    }

    onItem() {
        const { classify } = this.state;
        const { query, roleFetching, roleContent } = this.props;
        let roles = roleContent[classify.role] ? roleContent[classify.role].items : [];
        let id = query.id;

        // find item in redux array
        let item = roles.find(element => element._id === id)
        this.setState({ item: item });

    }

    _render() {
        const { item } = this.state

        return (<h1>render edit</h1>)
    }

    render() {
        return (<div>
            {this._render()}
            <h1>Edit</h1>
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
