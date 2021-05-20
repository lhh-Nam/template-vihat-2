import React from 'react';

import RoloCreate from '../create'
class RoleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props)
        return (<RoloCreate isEdit />);
    }
}

export default RoleEdit;
