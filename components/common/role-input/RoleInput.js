import React from 'react';
import { compose } from 'redux';
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

class RoleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                edit: 'edits',
            }
        }
    }
    render() {
        const { classify } = this.state;
        const { classes, item, handleInput } = this.props;

        return (
            <div className={classes.inputColor}>
                <div className={classes.container}>
                    <div className={classes.inputArea}>
                        <div className={classes.inputItem}>
                            <label className={classes.nam} htmlFor="role">Tên quyền</label>
                            <input
                                type='text'
                                id="role"
                                value={item.name || ""}
                                onChange={(e) => handleInput(e, "name")}
                            />
                        </div>

                        <div className={classes.inputItem}>
                            <label htmlFor="desc">Mô tả</label>
                            <textarea
                                type='text'
                                value={item.description || ""}
                                onChange={(e) => handleInput(e, "description")}
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
        );
    }
}

export default compose(withStyles(styles))(RoleInput);