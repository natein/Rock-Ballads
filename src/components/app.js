import React, { Component } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './app.scss';

import * as Data from '../constants/data';
import * as Utils from '../utils/utils';

import { Answers } from './answers/answers';
import { Button } from './button/button';
import { Congrats } from './congrats/congrats';
import { Details } from './details/details';
import { Header } from './header/header';
import { Question } from './question/question';
import { Score } from './score/score';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
            isGuessed: false,
            stopQuestionPlayer: true,
            ballads: Data.rockBallads[0],
            order: Utils.generateRandomArray(6),
            score: 0,
            level: 1,
            question: 0,
            selected: -1,
            indicators: [0, 0, 0, 0, 0, 0], // 0 - не выбирался, 1 - неправильно, 2 - правильно
        };
    }

    componentDidMount() {
        this.nextLevel(1);
    }

    nextLevel(level) {
        const ballads = Data.rockBallads[level - 1];
        const rnd = Utils.getRandom(0, 5);
        const order = Utils.generateRandomArray(6);
        console.log(`right answer: ${ballads[rnd].name}`);
        this.setState({
            isGuessed: false,
            stopQuestionPlayer: true,
            ballads,
            order,
            level,
            question: rnd,
            selected: -1,
            indicators: [0, 0, 0, 0, 0, 0],
        });
    }

    handleNextLevel() {
        const MAX_LEVEL = 6;
        if (this.state.isGuessed) {
            const { level } = this.state;
            if (level === MAX_LEVEL) {
                this.setFinished();
            }
            else {
                this.nextLevel(level + 1);
            }            
        }
    }

    handleClickMore(evt) {
        this.clearState();
        this.nextLevel(1);
    }

    clearState() {
        this.setState({
            isFinished: false,
            score: 0,
        });
    }

    clearStopQuestionPlayer() {
        this.setState({
            stopQuestionPlayer: false,
        });
    }

    setSelected(index) {
        this.setState({
            selected: index,
        });
    }

    setGuessed() {
        this.setState({
            isGuessed: true,
        });
    }

    setFinished() {
        this.setState({
            isFinished: true,
        });
    }

    setIndicator(idx, value) {
        const { indicators } = this.state;
        indicators[idx] = value;
        this.setState({
            indicators,
        });
    }

    addScore(score) {
        this.setState((prevState) => ({ score: prevState.score + score }));
    }

    render() {
        const MAX_SCORE = 30;
        const {
            isFinished, isGuessed, stopQuestionPlayer,
            ballads, order, score, level,
            question, selected, indicators,
        } = this.state;
        const artists = order.map((elem) => {
            const { id } = ballads[elem];
            const { name } = ballads[elem];
            return { id, name };
        });

        if (isFinished) {
            let control;
            if (this.state.score === MAX_SCORE) { control = <Congrats handleClickMore={this.handleClickMore.bind(this)} />; } else { control = <Score score={score} handleClickMore={this.handleClickMore.bind(this)} />; }
            return (
                <div className="container">
                    <Header levels={Data.levels} level={level} score={score} />
                    <main>
                        {control}
                    </main>
                </div>
            );
        }
        const caption = 'Следующий уровень';
        let name = '';
        if (ballads.length !== 0) { name = ballads[question].name; }
        return (
            <div className="container">
                <Header levels={Data.levels} level={level} score={score} />
                <main>
                    <Question curBallad={ballads[question]}
                        isGuessed={isGuessed} level={level}
                        stopQuestionPlayer={stopQuestionPlayer}
                    />
                    <div className="answersdetails">
                        <Answers
                            artists={artists}
                            rightAnswer={name}
                            isGuessed={isGuessed}                            
                            addScore={this.addScore.bind(this)}
                            selected={selected}
                            indicators={indicators}
                            setSelected={this.setSelected.bind(this)}
                            setIndicator={this.setIndicator.bind(this)}
                            setGuessed={this.setGuessed.bind(this)}
                            clearStopQuestionPlayer={this.clearStopQuestionPlayer.bind(this)}
                        />

                        <Details curBallad={ballads[selected - 1]} selected={selected} level={level} />
                    </div>
                    <Button caption={caption} activated={isGuessed} handler={this.handleNextLevel.bind(this)} />
                </main>
            </div>
        );
    }
}
