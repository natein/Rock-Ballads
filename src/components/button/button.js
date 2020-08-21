import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        const { activated, caption, handler } = this.props;
        const buttonClass = (activated) ? 'next_btn' : 'next_btn disabled';

        return (
            <section className="btn_container">
                <button
                    type="button"
                    className={buttonClass}
                    onClick={handler}
                >
                    <span>{caption}</span>
                </button>
            </section>
        );
    }
}

Button.propTypes = {
    activated: PropTypes.bool,
    caption: PropTypes.string,
    handler: PropTypes.func,
};

Button.defaultProps = {
    activated: false,
    caption: '',
    handler: '',
};
