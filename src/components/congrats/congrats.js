import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';

const src = require('../../assets/images/certificate.jpg');

export class Congrats extends Component {
    render() {
        const caption = 'Попробовать ещё раз!';
        const { handleClickMore } = this.props;

        return (
            <section className="congrats">
                <div className="certificate">
                    <img src={src} alt="certificate" />
                </div>
                <Button caption={caption} activated handler={handleClickMore} />
            </section>
        );
    }
}

Congrats.propTypes = {
    handleClickMore: PropTypes.func,
};

Congrats.defaultProps = {
    handleClickMore: '',
};
