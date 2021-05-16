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
                role: 'roles',
                edit: 'edits',
            },
            item: {},
            luan: 'ádfasdf'
        };
    }

    componentDidMount() {
        const { classify } = this.state;
        const { query } = this.props;
        let id = query.id;
        //this.onFindItem();
        this.props.getEdits(classify.edit, { id: id, lang: 'vi' });

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editContent !== prevState.editContent) {
            return { item: nextProps.editContent };
        }
        else return null;
    }

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    // get id from url
    static getInitialProps({ query }) {
        return { query };
    }


    handleInput = (e, key) => {

        const { classify } = this.state;
        this.setState({

            //
            item: {
                ...this.state.item,
                [classify.edit]: {
                    [key]: e.target.value
                },
            }

        });


    };

    _renderRoleInput() {
        const { classes } = this.props;
        const { classify, item, luan } = this.state;
        console.log("🚀 ~ RoleEdit ~ _renderRoleInput ~ item", item)
        const { editContent, editFetching } = this.props;

        let nam = item;

        return (
            <div>
                {editFetching[classify.edit] ? 'Loading...' : <RoleInput item={nam} luan={luan} handleInput={(e, key) => this.handleInput(e, key)} />}
            </div>
            //editContent[classify.edit] ? <RoleInput item={item} name={editContent[classify.edit].name} desc={editContent[classify.edit].description} /> : "Loading..."
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

        let color = item[classify.edit] ? item[classify.edit].color : ""

        return (
            <div className={classes.roleEdit} >
                <div className={classes.heading} style={{ background: `${color}` }}>
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
        roleFetching: state.role.fetching,
        roleContent: state.role.content,
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
