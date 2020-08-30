import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

export class Player extends Component {
    constructor(props) {
        super(props);
        this.playerRef = React.createRef();
    }

    stopPlayer() {
        this.playerRef.current.audio.current.pause();
        this.playerRef.current.audio.current.currentTime = 0;
    }

    shouldComponentUpdate() {
        const {isStopped} = this.props;
        if(isStopped) {
            this.stopPlayer();
            return true;
        }
        return true;
    }

    render() {
        const {src, isStopped} = this.props;
        if (isStopped) {
            this.stopPlayer();
        }
        return (
                <AudioPlayer
                    src={src}
                    ref={this.playerRef}
                    layout="horizontal-reverse"
                    onAbort={evt => this.stopPlayer()}
                    autoPlay={false}
                    showDownloadProgress={false}
                    showJumpControls={false}
                    customControlsSection={[
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS
                    ]}
                />
            )
    }
}
