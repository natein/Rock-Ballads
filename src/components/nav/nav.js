import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navigation extends Component {
    render() {
        const { levels, level } = this.props;
        const list = levels.map((elem, idx) => {
            if (idx === level - 1) { return <li key={elem} className="selected">{elem}</li>; }
            return <li key={elem}>{elem}</li>;
        });

        return (
            <nav>
                <ul className="groups">
                    {list}
                </ul>
            </nav>
        );
    }
}

Navigation.propTypes = {
    levels: PropTypes.arrayOf(PropTypes.string),
    level: PropTypes.number,
};

Navigation.defaultProps = {
    levels: [],
    level: 1,
};
