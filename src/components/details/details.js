import React, { Component } from 'react';

import {Player} from '../player/player';

export class Details extends Component {
    render() {
        const { selected} = this.props;
        
        if (selected === -1) {
            return (
                <section className="details">
                    <p className="details_listen_player">Послушайте плеер и выберите исполнителя из списка.</p>
                </section>
            );
        }
        const {
            id, name, title, description,
        } = this.props.curBallad;
        const { level, isGuessed } = this.props;
        const src = require(`../../assets/images/level${level}/${id}.jpg`);
        const audioSrc = require(`../../assets/audio/level${level}/0${id}.mp3`);

        return (
            <section className="details">
                <div className="details_container">
                    <div className="details_image">
                        <img src={src} alt="artist" />
                    </div>
                    <div className="details_player">
                        <h3 className="details_band red">{name}</h3>
                        <p className="details_title">{title}</p>
                    </div>
                    <Player
                        isStopped={isGuessed}
                        src={audioSrc}
                    />                    
                    <p className="details_description">{description}</p>
                </div>
            </section>
        );
    }
}
