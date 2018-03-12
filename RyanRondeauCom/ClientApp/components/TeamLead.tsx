import * as React from 'react';
import { Fade, Slide } from 'react-reveal';

export default class TeamLead extends React.Component<{}> {

    public render() {
        return <section className="sectionTeamLead" id="TeamLead">
            <div className="content">
                <Slide bottom>
                    <h1>Team Lead.</h1>
                </Slide>
                <Fade right cascade>
                    <div className="column">
                        <h3>SDLC</h3>
                        <h3>UI/UX Design</h3>
                        <h3>MVC</h3>
                        <h3>MVVM</h3>
                        <h3>Git</h3>
                    </div>
                    <div className="column">
                        <h3>DevOps</h3>
                        <h3>CI / CD</h3>
                        <h3>Docker</h3>
                        <h3>OpenShift</h3>
                        <h3>Azure</h3>
                    </div>
                    <div className="column">
                        <h3>SOA</h3>
                        <h3>MicroServices</h3>
                        <h3>Azure</h3>
                        <h3>TFS 2017</h3>
                        <h3>Visual Studio</h3>
                    </div>
                </Fade>
            </div>
        </section>;
    }
}