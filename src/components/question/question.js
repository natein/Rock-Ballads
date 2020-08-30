import React, { Component } from 'react';

import {Player} from '../player/player';

export class Question extends Component {
    render() {
        const { isGuessed, stopQuestionPlayer, level, curBallad } = this.props;
        const { id, name } = curBallad;
        const src = require(`../../assets/images/level${level}/${id}.jpg`);
        const audioSrc = require(`../../assets/audio/level${level}/0${id}.mp3`);
        const srcDefault = require('../../assets/images/default.jpg');

        const imgSrc = (isGuessed) ? src : srcDefault;
        const bandName = (isGuessed) ? name : '******';
        const stopped = isGuessed === true && stopQuestionPlayer === true;

        return (
            <section className="question">
                <div className="question_image">
                    <img src={imgSrc} alt="artist" />
                </div>
                <div className="question_nameplayer">
                    <p className="question_band_name">{bandName}</p>
                    <Player 
                        src={audioSrc}
                        isStopped={stopped}
                    />
                </div>
            </section>
        );
    }
}
