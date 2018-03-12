import * as React from 'react';

export default class Footer extends React.Component<{}> {

    public render() {
        return <section className="sectionFooter">
            <div className="content">
                <div className="pageCentered">
                    <h5>This site was created using</h5>
                    <h4>ASP.NET Core - NodeJS - TypeScript - React - Redux - HTML5 - CSS - Webpack - NPM - Git - Azure</h4>
                </div>
            </div>
        </section>;
    }
}