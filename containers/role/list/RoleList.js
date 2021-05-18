import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// hocs
import withAuth from '../../../hocs/AuthHocs';

// actions
import RoleActions from '../../../redux/user/RoleRedux';

// utils
import { getDateFormat, getCustomDate, getTimestamp, } from '../../../utils/DateUtils';
import { pushRoute, routerPush } from '../../../utils/RouterUtils';
``
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Styles';
class RoleList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			classify: {
				role: 'roles',
			},
		}
	}

	componentDidMount() {
		const { classify } = this.state;
		this.props.getRoles(classify.role, { page: 1, size: 15 });
	}

	onItems = (item) => {
		pushRoute(`/role/edit/${item._id}`, {
			params: { data: item }
		});
	}

	_renderListRole() {
		const { classify } = this.state;
		const { classes, roleFetching, roleContent } = this.props;

		// get array roles 
		let roles = roleContent[classify.role];

		//formatdate
		let nam = getDateFormat('default', 1620029387223);
		console.log("🚀 ~ nam", nam);

		return (
			<div className={classes.tablee}>
				<div className={classes.heading}>
					<div className={classes.headingItem}><p>Tên quyền</p></div>
					<div className={classes.headingItem}><p>Tạo bởi</p></div>
					<div className={classes.headingItem}><p>Ngày tạo</p></div>
					<div className={classes.headingItem}><p>Ngày sửa đổi</p></div>
					<div className={classes.visible}></div>
				</div>
				<div className={classes.body}>
					{roleFetching[classify.role] ? '' : roles?.map((role, index) => (
						<div className={classes.bodyRow} key={index} onClick={() => this.onItems(role)}>
							<div className={classes.rowColor}>
								<div style={{ display: 'block', width: '8px', height: '100%', borderRadius: '8px', backgroundColor: `${role.color}` }}>
								</div>

								<div className={classes.test}>
									<input type='checkbox' />
								</div>
							</div>

							<div className={classes.rowInfo}>
								<div className={classes.infoItem}><p>{role.name}</p></div>
								<div className={classes.infoItem}><p>{role.create_by.name}</p></div>
								<div className={classes.infoItem}><p>{role.created_date}</p></div>
								<div className={classes.infoItem}><p>{role.last_updated_date}</p></div>
								<div className={classes.visible}>
									<p >Tạo bản sao</p>
									<img src={require('../../../assets/icons/common/ic_trash_can_r.png')} /></div>
							</div>
						</div>
					))}

				</div>
			</div>
		)

	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.wrapper}>
				{this._renderListRole()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		//role
		roleFetching: state.role.fetching,
		roleContent: state.role.content,
	}
}


const mapDispatchToProps = dispatch => ({
	// role
	getRoles: (classify, params) => dispatch(RoleActions.getRolesRequest(classify, params)),
});


export default compose(withAuth(), withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(RoleList);