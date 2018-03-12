import * as React from 'react';
import { Fade, Slide, Reveal } from 'react-reveal';

//<Reveal effect="fadeInUp2">
//    <h1>Developer.</h1>
//</Reveal>

export default class Developer extends React.Component<{}> {
    
    public render() {
        return <section className="sectionDeveloper" id="Developer">
                <div className="content">
                    <Fade bottom>
                            <h1>Developer.</h1>
                    </Fade>
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
            </section>;
    }
}