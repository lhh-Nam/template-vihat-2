import React from 'react';
import { compose } from 'redux';


// components
import { WebContent, ImageViewer } from '../../common';

// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { checked } from 'glamor';

// assets
const icons = {
    checked: require('../../../assets/icons/common/ic_delete_white.png')
};

class RoleInput extends React.Component {
    constructor(props) {
        super(props);
        const { color } = this.props;
        this.state = {
            classify: {
                edit: 'edits',
            },
            colorChecked: color || '#4ca750',
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

    handleColor(color) {
        const { onColor } = this.props;

        onColor(color);
        this.setState({
            colorChecked: color
        })
    }

    _renderInput() {
        const { classes, item, handleInput } = this.props;
        return (
            <div className={classes.inputArea}>
                <div className={classes.inputItem}>
                    <label htmlFor="role">Tên quyền</label>
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
        )
    }

    _renderColor() {
        const { classes } = this.props;
        const { colorChecked } = this.state;

        return (
            <div className={classes.colorArea}>
                <lable>Màu nổi bật</lable>

                <div className={classes.group} >
                    {
                        this.colors.map((color, index) => (
                            <div onClick={() => this.handleColor(color)} className={classes.color} style={{ background: `${color}` }} key={index}>
                                <ImageViewer src={icons['checked']} size={40} style={{ display: colorChecked === color ? 'block' : 'none' }} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render() {
        const { classes } = this.props;
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