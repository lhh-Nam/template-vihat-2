import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

// hocs
import withAuth from '../../../hocs/AuthHocs';

// actions
import CreateActions from '../../../redux/user/CreateRedux';
import EditActions from '../../../redux/user/EditRedux';

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
                edit: 'edits',
            },
            item: {},
        }
    }

    componentDidMount() {
        const { classify } = this.state;
        const { router, isEdit } = this.props;
        if (isEdit) {
            let id = router.query.id;
            this.props.getEdits(classify.edit, { id: id, lang: 'vi' });
        } else {
            let id = `vihat_omi_default`;
            this.props.getCreates(classify.create, { id: id, lang: 'vi' });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { classify } = this.state;
        const { createContent, editContent } = this.props;
        if (prevProps.createContent !== createContent || prevProps.editContent !== editContent) {
            this.setState({          //update the state after checking
                item: createContent[classify.create] || editContent[classify.edit]
            });
        }
    }

    onColor(color) {
        this.setState({
            item: {
                ...this.state.item,
                color: color,
            }
        })
    }

    onInput = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                [key]: e.target.value
            }
        });
    };

    _renderRoleInput() {
        const { classify, item } = this.state;
        const { createFetching, editFetching } = this.props;
        return (
            <div>
                {createFetching[classify.create] || editFetching[classify.edit]
                    ? 'Loading...' :
                    <RoleInput
                        item={item}
                        onColor={(color) => this.onColor(color)}
                        onInput={(e, key) => this.onInput(e, key)}
                    />
                }
            </div>
        )
    }

    _renderRoleForm() {
        const { classify, item } = this.state;
        const { createFetching, editFetching } = this.props;
        let modules = item.modules ? item.modules : [];
        return (
            <div>
                {createFetching[classify.create] || editFetching[classify.edit]
                    ? 'Loading...' :
                    modules.map((module, index) => <RoleForm module={module} key={index} />)
                }
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const { item } = this.state;
        let color = item.color || `#4ca750`;
        return (
            <div className={classes.roleEdit} >
                <div className={classes.heading} style={{ background: `${color}` }}>
                    <div className={classes.fixed}></div>
                </div>
                <div className={classes.main}>
                    {this._renderRoleInput()}
                    {this._renderRoleForm()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //create
        createFetching: state.create.fetching,
        createContent: state.create.content,

        //edit
        editFetching: state.edit.fetching,
        editContent: state.edit.content,
    }
}

const mapDispatchToProps = dispatch => ({
    // create
    getCreates: (classify, params) => dispatch(CreateActions.getCreatesRequest(classify, params)),

    //edit
    getEdits: (classify, params) => dispatch(EditActions.getEditsRequest(classify, params)),
});

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps), withRouter)(RoleCreate);
