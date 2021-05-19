import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// hocs
import withAuth from '../../../hocs/AuthHocs';

// actions
import EditActions from '../../../redux/user/EditRedux';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// components
import RoleForm from '../../../components/common/role-form'
import RoleInput from '../../../components/common/role-input/RoleInput';

class RoleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                edit: 'edits',
            },
            item: {},
        };
    }

    componentDidMount() {
        const { classify } = this.state;
        const { query } = this.props;
        let id = query.id;
        this.props.getEdits(classify.edit, { id: id, lang: 'vi' });
    }

    componentDidUpdate(prevProps, prevState) {
        const { classify } = this.state;
        const { editContent, editFetching } = this.props;
        if (prevProps.editContent !== editContent) {
            this.setState({          //update the state after checking
                item: editContent[classify.edit]
            });
        }
    }

    // get id from url
    static getInitialProps({ query }) {
        return { query };
    }

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    handleInput = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                [key]: e.target.value
            }
        });
    };

    onColor(color) {
        this.setState({
            item: {
                ...this.state.item,
                color: color,
            }
        })
    }

    _renderRoleInput() {
        const { classes } = this.props;
        const { classify, item } = this.state;
        const { editContent, editFetching } = this.props;

        let color = editContent[classify.edit] ? editContent[classify.edit].color : '';
        return (
            <div>
                {editFetching[classify.edit]
                    ? 'Loading...' :
                    <RoleInput
                        color={color}
                        item={item}
                        onColor={(color) => this.onColor(color)}
                        handleInput={(e, key) => this.handleInput(e, key)}

                    />}
            </div>
        )
    }

    _renderRoleForm() {
        const { classify, item } = this.state;
        const { editContent, editFetching } = this.props;
        let modules = editContent[classify.edit] ? editContent[classify.edit].modules : [];

        return (
            <div>
                {editFetching[classify.edit] ? 'Loading...' : modules.map((module, index) => <RoleForm module={module} key={index} />)}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const { item, classify } = this.state;
        const { editContent, editFetching } = this.props;

        return (
            <div className={classes.roleEdit} >
                <div className={classes.heading} style={{ background: `${item.color}` }}>
                    <div className={classes.fixed}></div>
                </div>

                <div className={classes.main}>
                    {this._renderRoleInput()}
                    {this._renderRoleForm()}
                </div>
            </div>);
    }
}



const mapStateToProps = state => {
    return {
        // roleFetching: state.role.fetching,
        // roleContent: state.role.content,
        editFetching: state.edit.fetching,
        editContent: state.edit.content,
    }
}

const mapDispatchToProps = dispatch => ({
    // edit
    getEdits: (classify, params) => dispatch(EditActions.getEditsRequest(classify, params)),
});

//export default RoleEdit;
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RoleEdit);
