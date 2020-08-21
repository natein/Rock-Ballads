import React, { Component } from 'react';
import PropTypes from 'prop-types';

import soundCorrect from '../../assets/audio/correct.mp3';
import soundError from '../../assets/audio/error.mp3';

export class Answers extends Component {
    static countErrors(arr) {
        const ERROR_VALUE = 1;
        return arr.reduce((acc, value) => ((value === ERROR_VALUE) ? acc + 1 : acc), 0);
    }

    handleClick(evt) {
        const MAX_SCORE = 5;
        const MAX_LEVEL = 6;
        const {
            addScore,
            indicators,
            isGuessed,
            level,
            rightAnswer,
            setFinished,
            setIndicator,
            setGuessed,
            setSelected,
        } = this.props;

        let elem = evt.target;
        if (elem.tagName === 'DIV' || elem.tagName === 'SPAN') {
            elem = elem.parentElement;
        }
        setSelected(elem.dataset.id);

        if (!isGuessed) {
            if (rightAnswer === elem.lastChild.outerText) {
                new Audio(soundCorrect).play();
                setIndicator(elem.dataset.idx, 2);
                setGuessed();
                addScore(MAX_SCORE - Answers.countErrors(indicators));
                if (level === MAX_LEVEL) {
                    setFinished();
                }
            } else {
                new Audio(soundError).play();
                setIndicator(elem.dataset.idx, 1);
            }
        }
    }

    render() {
        const CLASSNAMES = ['noanswer', 'wrong', 'correct'];
        const { artists, indicators } = this.props;
        const list = artists.map((elem, idx) => {
            const classname = CLASSNAMES[indicators[idx]];
            return (
                <li key={elem.id} data-id={elem.id} data-idx={idx}>
                    <div className={classname} />
                    <span>
                        {elem.name}
                    </span>
                </li>
            );
        });
        return (
            <section className="answers">
                <ul className="answers_bands_name" onClick={this.handleClick.bind(this)}>
                    {list}
                </ul>
            </section>
        );
    }
}

Answers.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    })),
    isGuessed: PropTypes.bool,
    indicators: PropTypes.arrayOf(PropTypes.number),
    setIndicator: PropTypes.func,
    setGuessed: PropTypes.func,
    setSelected: PropTypes.func,
    setFinished: PropTypes.func,
    addScore: PropTypes.func,
    level: PropTypes.number,
    rightAnswer: PropTypes.string,
};

Answers.defaultProps = {
    artists: [],
    isGuessed: false,
    indicators: [],
    setIndicator: '',
    setGuessed: '',
    setSelected: '',
    setFinished: '',
    addScore: '',
    level: 1,
    rightAnswer: '',
};
