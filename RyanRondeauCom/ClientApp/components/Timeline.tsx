import * as React from 'react';
import { Fade, Slide } from 'react-reveal';

export default class Timeline extends React.Component<{}> {

    public render() {
        return <section className="sectionTimeline" id="Timeline">
            <div className="content">
                <Slide bottom>
                    <h1>Experienced.</h1>
                </Slide>
                <br />
                <Fade right>
                    <div className="column verticalLine">
                        <Fade right>
                            <h3 className="h3Bold">Consultant</h3>
                            <h3>Sierra Systems</h3>
                            <h3>Feb 2018 - Present</h3>
                        </Fade>
                        <div className="pageSpacer" />
                        <Fade right>
                            <h3 className="h3Bold">Senior Software Engineer</h3>
                            <h3>INgrooves</h3>
                            <h3>Aug 2010 - Mar 2012</h3>
                        </Fade>
                    </div>
                    <div className="column verticalLine">
                        <Fade right>
                            <h3 className="h3Bold">Director, Software Development</h3>
                            <h3>Sierra Systems</h3>
                            <h3>Jul 2016 - Jan 2018</h3>
                        </Fade>
                        <div className="pageSpacer" />
                        <Fade right>
                            <h3 className="h3Bold">Programmer, Enterprise Applications</h3>
                            <h3>ACL Services Ltd.</h3>
                            <h3>Sep 2005 - Jun 2010</h3>
                        </Fade>
                    </div>
                    <div className="column verticalLine">
                        <Fade right>
                            <h3 className="h3Bold">Programming Supervisor</h3>
                            <h3>DFC Global Corp.</h3>
                            <h3>May 2012 - Jul 2016</h3>
                        </Fade>
                        <div className="pageSpacer" />
                    </div>
                </Fade>
            </div>
        </section>;
    }
}