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
            item: {},
        }
    }

    componentDidMount() {
        const { classify } = this.state;
        let id = `vihat_omi_default`;
        this.props.getCreates(classify.create, { id: id, lang: 'vi' });
    }

    componentDidUpdate(prevProps, prevState) {
        const { classify } = this.state;
        const { createContent } = this.props;
        if (prevProps.createContent !== createContent) {
            this.setState({          //update the state after checking
                item: createContent[classify.create]
            });
        }
    }

    onColor(color) {
        this.setState({
            item: {
                color: color,
            }
        })
    }

    handleInput = (e, key) => {
        this.setState({
            item: {
                ...this.state.item,
                [key]: e.target.value
            }
        });
    };

    _renderRoleInput() {
        const { classes } = this.props;
        const { classify, item } = this.state;
        const { createContent, createFetching } = this.props;

        return (
            <div>
                {createFetching[classify.create]
                    ? 'Loading...' :
                    <RoleInput
                        item={item}
                        onColor={(color) => this.onColor(color)}
                        handleInput={(e, key) => this.handleInput(e, key)}
                    />}
            </div>
        )
    }

    _renderRoleForm() {
        const { classify, item } = this.state;
        const { createContent, createFetching } = this.props;
        let modules = createContent[classify.create] ? createContent[classify.create].modules : [];

        return (
            <div>
                {createFetching[classify.create] ? 'Loading...' : modules.map((module, index) => <RoleForm module={module} key={index} />)}
            </div>
        );
    }

    render() {
        const { classes } = this.props;
        const { item, classify } = this.state;

        let color = item.color || `rgb(76, 167, 80)`;

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
        createFetching: state.create.fetching,
        createContent: state.create.content,
    }
}

const mapDispatchToProps = dispatch => ({
    // create
    getCreates: (classify, params) => dispatch(CreateActions.getCreatesRequest(classify, params)),
});

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RoleCreate);