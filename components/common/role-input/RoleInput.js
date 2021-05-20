import React from 'react';
import { compose } from 'redux';

// components
import { WebContent, ImageViewer } from '../../common';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// assets
const icons = {
    checked: require('../../../assets/icons/common/ic_delete_white.png')
};

class RoleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                create: 'creates',
                edit: 'edits',
            },
        }
    }

    colors = [
        '#2d4563',
        '#a540b8',
        '#e94440',
        '#fea220',
        '#4ca750',
        '#267aff',
        '#494949',
        '#585d71',
        '#fb7b65',
        '#ffa850',
        '#e9bc5a',
        '#5890dc',
        '#57bfdb',
    ];

    _renderInput() {
        const { classes, item, onInput } = this.props;
        return (
            <div className={classes.inputArea}>
                <div className={classes.inputItem}>
                    <label htmlFor="role">Tên quyền</label>
                    <input
                        type='text'
                        id="role"
                        value={item.name || ""}
                        onChange={(e) => onInput(e, "name")}
                    />
                </div>
                <div className={classes.inputItem}>
                    <label htmlFor="desc">Mô tả</label>
                    <textarea
                        type='text'
                        value={item.description || ""}
                        onChange={(e) => onInput(e, "description")}
                        rows='7' cols='40' id="desc" />
                </div>
            </div>
        )
    }

    _renderColor() {
        const { classes, item, onColor } = this.props;
        let colorProp = item.color || `#4ca750`;
        return (
            <div className={classes.colorArea}>
                <lable>Màu nổi bật</lable>

                <div className={classes.group} >
                    {
                        this.colors.map((color, index) => (
                            <div onClick={() => onColor(color)} className={classes.color} style={{ background: `${color}` }} key={index}>
                                <ImageViewer src={icons['checked']} size={40} style={{ display: colorProp === color ? 'block' : 'none' }} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div className={classes.inputColor}>
                <div className={classes.container}>
                    {this._renderInput()}
                    {this._renderColor()}
                </div>
            </div>
        );
    }
}

export default compose(withStyles(styles))(RoleInput);