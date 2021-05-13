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

	// componentDidMount() {
	// 	const { classify } = this.state;
	// 	this.props.getRoles(classify.role, { page: 1, size: 15 });
	// }

	onItems = (item) => {
		pushRoute(`/role/edit/${item._id}`, {
			params: { data: item }
		});
	}

	_renderListRole = () => {
		const { classify } = this.state;
		const { classes, roleFetching, roleContent } = this.props;

		// get array roles 
		let roles = roleContent[classify.role] ? roleContent[classify.role].items : [];

		//formatdate
		let nam = getDateFormat('default', 1620029387223);
		console.log("🚀 ~ nam", nam);

		return (
			<table className={classes.table}>
				<thead>
					<tr>
						<th><div className={classes.resize}>Tên quyền</div></th>
						<th><div className={classes.resize}>Tạo bởi</div></th>
						<th><div className={classes.resize}>Ngày tạo</div></th>
						<th><div className={classes.resize}>Ngày sửa đổi</div></th>
					</tr>
				</thead>
				<tbody>
					{roleFetching[classify.role] ?
						(
							<tr>
								<td>Loading...</td>
								<td>Loading...</td>
								<td>Loading...</td>
								<td>Loading...</td>
							</tr>
						) :
						roles?.map((role, index) => (
							<tr key={index} onClick={() => this.onItems(role)}>
								<td>{role.name}</td>
								<td>{role.create_by.name}</td>
								<td>{role.created_date}</td>
								<td>{role.last_updated_date}</td>
							</tr>
						))
					}
				</tbody>
			</table>
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