import React, { PropTypes, Component } from 'react';

class User extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <p>Привет, {name}!</p>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;