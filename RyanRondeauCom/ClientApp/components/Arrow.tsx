import * as React from 'react';
import { Slide, Rotate } from 'react-reveal';
import { Image } from 'react-bootstrap';

const down = require('../assets/arrows.svg');

export default class Arrow extends React.Component<{}> {

    public render() {
        return <section className="sectionArrow">
            <div className="content">
                <div className="pageCentered">
                    <Image alt='down' src={String(down)} width='64px' height='64px' />
                </div>
            </div>
        </section>;
    }
}