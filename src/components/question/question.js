import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

export class Question extends Component {
    render() {
        const { isGuessed, level, curBallad } = this.props;
        const { id, name } = curBallad;
        const src = require(`../../assets/images/level${level}/${id}.jpg`);
        const audioSrc = require(`../../assets/audio/level${level}/${id}.mp3`);
        const srcDefault = require('../../assets/images/default.jpg');

        const imgSrc = (isGuessed) ? src : srcDefault;
        const bandName = (isGuessed) ? name : '******';
        
        return (
            <section className="question">
                <div className="question_image">
                    <img src={imgSrc} alt="artist" />
                </div>
                <div className="question_nameplayer">
                    <p className="question_band_name">{bandName}</p>
                    <AudioPlayer
                        layout="horizontal-reverse"
                        src={audioSrc}
                        showDownloadProgress={false}
                        showJumpControls={false}
                        autoPlayAfterSrcChange = {false}
                        customControlsSection={[
                            RHAP_UI.MAIN_CONTROLS,
                            RHAP_UI.VOLUME_CONTROLS
                        ]}
                    />
                </div>
            </section>
        );
    }
}
