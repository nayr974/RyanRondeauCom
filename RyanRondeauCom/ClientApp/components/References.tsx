import * as React from 'react';
import { Slide, Fade } from 'react-reveal';

export default class References extends React.Component<{}> {

    public render() {
        return <section className="sectionTrusted" id="Trusted">
            <div className="content">
                <Slide bottom>
                    <h1>Trusted.</h1>
                </Slide>
                <div>
                    <div className="halfColumn">
                        <Fade right cascade>
                            <div className="blockQuote">
                                <p>Ryan is a strong leader who possesses both expert-level technical expertise and the ability to strategically translate business objectives into IT solutions.</p>
                            </div>
                            <div className="blockQuote">
                                <p>He is a true champion for our customer and will do his best to ensure that any project he is involved in delivers not only the technical requirements but extreme value-add for our customers.</p>
                            </div>
                            <div className="blockQuote">
                                <p>He has natural hands on project execution and his ability to comprehend complex business cases with ease has always amazed me.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="halfColumn">
                        <Fade right cascade>
                            <div className="blockQuote">
                                <p>Ryan has a foundation of technical quality which is only surpassed by his excellent leadership and interpersonal skills.</p>
                            </div>
                            <div className="blockQuote">
                                <p>Ryan would be a true asset for any positions requiring IT Solutions and/or Leadership.</p>
                            </div>
                            <div className="blockQuote">
                                <p>His goal is always on collaboration, problem solving, and serving the needs of others. What stands out most is his authenticity and honesty, which translates into respect from the people that work with him.</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>;
    }
}