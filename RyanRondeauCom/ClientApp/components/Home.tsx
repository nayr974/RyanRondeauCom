import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import { Fade, Slide, Rotate, LightSpeed, Pulse } from 'react-reveal'; 

const image = require('../assets/Headshot.jpg'); 
const down = require('../assets/arrows.svg');   

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>

            <section className="intro">
                <div className="introContent">
                    <div className="pageCentered">
                        <Image alt='image' src={String(image)} width='25%' height='25%' circle />
                        <Slide bottom>
                            <h1>Ryan</h1>
                        </Slide>
                    </div>
                </div>
            </section>

            <section className="sectionArrow">
                <div className="content">
                    <div className="pageCentered">
                        <Image alt='down' src={String(down)} width='64px' height='64px' />
                    </div>
                </div>
            </section>

            <section className="sectionDeveloper">
                <div className="content">
                    <Slide bottom>
                        <h1>Developer.</h1>
                    </Slide>
                    <Fade right cascade>
                        <div className="column">
                            <h3>C# / .NET</h3>
                            <h3>TypeScript</h3>
                            <h3>JavaScript</h3>
                            <h3>WPF</h3>
                            <h3>WCF</h3>
                            <h3>SQL</h3>
                        </div>
                        <div className="column">
                            <h3>ASP.NET Core</h3>
                            <h3>React & Redux</h3>
                            <h3>Webpack</h3>
                            <h3>Babel</h3>
                            <h3>JQuery</h3>
                            <h3>Entity Framework</h3>
                        </div>
                        <div className="column">
                            <h3>ASP.NET MVC</h3>
                            <h3>HTML5</h3>
                            <h3>CSS</h3>
                            <h3>Bootstrap</h3>
                            <h3>REST</h3>
                            <h3>XML</h3>
                        </div>
                    </Fade>
                </div>
            </section>

            <section className="sectionTeamLead">
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
            </section>

            <section className="sectionScrumMaster">
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
            </section>
            
            <section className="sectionCard">
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
            </section>
            
            <section className="sectionFooter">
                <div className="content">
                    <div className="pageCentered">
                        <h5>This site was created using</h5>
                        <h4>ASP.NET Core - TypeScript - React - Redux - Webpack - HTML5 - CSS - SVG - NPM - Git</h4>
                        <h5>over a few days, and is hosted on Azure.</h5>
                    </div>
                </div>
            </section>
        </div>;
    }
}
