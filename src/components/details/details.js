import React, { Component } from 'react';

export class Details extends Component {
    render() {
        const { selected } = this.props;
        if (selected === -1) {
            return (
                <section className="details">
                    <div className="details_container">
                        <p>Послушайте плеер</p>
                        <p>Выберите группу из списка</p>
                    </div>
                </section>
            );
        }
        const {
            id, name, title, description,
        } = this.props.curBallad;
        const { level } = this.props;
        const src = require(`../../assets/images/level${level}/${id}.jpg`);

        return (
            <section className="details">
                <div className="details_container">
                    <div className="details_image">
                        <img src={src} alt="artist" />
                    </div>

                    <h3 className="details_band">{name}</h3>
                    <p className="details_title">{title}</p>
                    <p className="details_description">{description}</p>
                </div>
            </section>
        );
    }
}
