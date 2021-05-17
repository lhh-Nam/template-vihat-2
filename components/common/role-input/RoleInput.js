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
    checked: require('../../../assets/icons/common/ic_add_data.png')
};

class RoleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                edit: 'edits',
            },
        }
    }

    colors = [
        "rgb(45, 69, 99)",
        "rgb(165, 64, 184)",
        "rgb(233, 68, 64)",
        "rgb(254, 162, 32)",
        "rgb(76, 167, 80)",
        "rgb(38, 122, 255)",
        "rgb(73, 73, 73)",
        "rgb(88, 93, 113)",
        "rgb(251, 123, 101)",
        "rgb(255, 168, 80)",
        "rgb(233, 188, 90)",
        "rgb(88, 144, 220)",
        "rgb(87, 191, 219)",
    ];

    _renderInput() {
        const { classes, item, handleInput } = this.props;
        return (
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
        )
    }

    _renderColor() {
        const { classes, onColor, block, item } = this.props;
        const { colors } = this.state;


        let check = this.colors.map(color => color === item.color ? true : false)

        console.log("🚀 ~ colors", this.colors)
        console.log("🚀 ~ item", item.color)
        console.log("🚀 ~ check", check)

        return (
            <div className={classes.colorArea}>
                <lable>Màu nổi bật</lable>

                <div className={classes.group} >
                    {
                        this.colors.map((color, index) => (
                            <div onClick={() => onColor(color)} className={classes.color} style={{ background: `${color}` }} key={index}>
                                <ImageViewer src={icons['checked']} size={40} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render() {
        const { classes, item, handleInput } = this.props;
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