import * as React from 'react';
import { Fade } from 'react-reveal';
import { Image } from 'react-bootstrap';

const image = require('../assets/Headshot.jpg');

export default class Me extends React.Component<{}> {

    public render() {
        return <section className="intro">
            <div className="introContent">
                <div className="pageCentered">
                    <Image alt='image' src={String(image)} width='25%' height='25%' circle />
                    <Fade top>
                        <h1>Ryan</h1>
                    </Fade>
                </div>
            </div>
        </section>;
    }
}