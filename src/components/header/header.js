import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '../nav/nav';

export class Header extends Component {
    render() {
        const { levels, level, score } = this.props;
        return (
            <header>
                <div className="score">
                    <div className="logo">
                        <h1>
                            <span>Rock</span>
                            <span className="red">Ballads</span>
                        </h1>
                    </div>
                    <div>
                        <span>Баллы: </span>
                        <span>{score}</span>
                    </div>
                </div>
                <Navigation levels={levels} level={level} />
            </header>
        );
    }
}

Header.propTypes = {
    levels: PropTypes.arrayOf(PropTypes.string),
    level: PropTypes.number,
    score: PropTypes.number,
};

Header.defaultProps = {
    levels: [],
    level: 1,
    score: 0,
};
