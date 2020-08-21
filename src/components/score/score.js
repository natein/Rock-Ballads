import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';

export class Score extends Component {
    render() {
        const caption = 'Попробовать ещё раз!';
        const { handleClickMore, score } = this.props;

        return (
            <section className="results">
                <div className="results_container">
                    <h1>Поздравляем!</h1>
                    <p>
                        <span>Вы прошли викторину и набрали </span>
                        <span>{ score }</span>
                        <span> из 30 возможных баллов</span>
                    </p>
                </div>
                <Button caption={caption} activated handler={handleClickMore} />
            </section>
        );
    }
}

Score.propTypes = {
    score: PropTypes.number,
    handleClickMore: PropTypes.func,
};

Score.defaultProps = {
    score: 0,
    handleClickMore: '',
};
