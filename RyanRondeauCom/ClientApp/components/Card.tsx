import * as React from 'react';
import { Slide, Rotate } from 'react-reveal';
import { SocialIcon } from 'react-social-icons';

export default class Card extends React.Component<{}> {

    public render() {
        return <section className="sectionCard" id="Card">
            <div className="content">
                <div className="pageSpacer" />
                <Rotate top left>
                    <div className="container">
                        <div className="card">

                            <div className="front side">
                                <h1 className="logo">Ryan Rondeau</h1>
                            </div>

                            <div className="back side">
                                <h3 className="name">Ryan Rondeau</h3>
                                <div className="property">Software Developer. Team Lead. Scrum Master.</div>
                                <div className="info">
                                    <table>
                                        <tr>
                                            <td>
                                                <p className="property">Email: </p>
                                                <p className="property">Phone: </p>
                                                <p className="property">Website: </p>
                                            </td>
                                            <td>
                                                <p className="property">&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                            </td>
                                            <td>
                                                <p className="property">ryan_rondeau@live.ca</p>
                                                <p className="property">(250) 891-4089</p>
                                                <p className="property">http://www.ryanrondeau.com/</p>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </Rotate>

                <div className="pageSpacer" />

                <div className="pageCentered">
                    <Slide bottom cascade>
                        <div>
                            <SocialIcon url="https://www.linkedin.com/in/ryanrondeau/" />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                                <SocialIcon url="mailto:ryan_rondeau@live.ca" />
                        </div>
                    </Slide>
                </div>
            </div>
        </section>;
    }
}