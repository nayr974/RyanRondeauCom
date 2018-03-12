import * as React from 'react';
import { Fade, Slide } from 'react-reveal';

export default class ScrumMaster extends React.Component<{}> {

    public render() {
        return <section className="sectionScrumMaster" id="ScrumMaster">
            <div className="content">
                <Slide bottom>
                    <h1>Scrum Master.</h1>
                </Slide>
                <Fade right cascade>
                    <div className="column">
                        <h3>Servant-leadership</h3>
                        <h3>Collaboration</h3>
                        <h3>Gamification</h3>
                        <h3>Continuous improvment</h3>
                    </div>
                    <div className="column">
                        <h3>Facilitation</h3>
                        <h3>Agile</h3>
                        <h3>Coach</h3>
                        <h3>Processes</h3>
                    </div>
                    <div className="column">
                        <h3>Kanban</h3>
                        <h3>Transformation</h3>
                        <h3>Analysis</h3>
                        <h3>Communication</h3>
                    </div>
                </Fade>
            </div>
        </section>;
    }
}