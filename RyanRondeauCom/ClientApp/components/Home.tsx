import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Me from './Me';
import Arrow from './Arrow';
import Developer from './Developer';
import TeamLead from './TeamLead';
import ScrumMaster from './ScrumMaster';
import References from './References';
import Timeline from './Timeline';
import Card from './Card';
import Footer from './Footer'

function delay(ms: number) {
    return new Promise<void>(function(resolve) {
        setTimeout(resolve, ms);
    });
}

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {

    private isScrolling: boolean = false;
    private lastSection: number;

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    private async handleScroll() {
        if (this.lastSection == null) {
            this.lastSection = 0;
        }
        if (!this.isScrolling) {

            var sectionID: string = "";

            switch (this.lastSection) {
                case 0: {
                    sectionID = "linkTimeline";
                    break;
                }
                case 1: {
                    sectionID = "linkTrusted";
                    break;
                }
                case 2: {
                    sectionID = "linkDeveloper";
                    break;
                }
                case 3: {
                    sectionID = "linkTeamLead";
                    break;
                }
                case 4: {
                    sectionID = "linkScrumMaster";
                    break;
                }
                case 5: {
                    sectionID = "linkCard";
                    break;
                }
                default: {
                    return;
                }
            }

            this.lastSection = this.lastSection + 1;

            if (document.getElementById(sectionID) != null) {
                this.isScrolling = true;
                document.getElementById(sectionID)!.click();
                await delay(1000);
                this.isScrolling = false;

            }
        }
    }

    public testing(event: any) {
        if (document.getElementById('link') != null) {
            document.getElementById('link')!.click();
        }
    }

    public render() {
        return <div>
            <div className="hidden">
                <AnchorLink id="linkTimeline" href="#Timeline">Experienced</AnchorLink >
                <AnchorLink id="linkTrusted" href="#Trusted">Trusted</AnchorLink >
                <AnchorLink id="linkDeveloper" href="#Developer">Developer</AnchorLink >
                <AnchorLink id="linkTeamLead" href="#TeamLead">TeamLead</AnchorLink >
                <AnchorLink id="linkScrumMaster" href="#ScrumMaster">ScrumMaster</AnchorLink >
                <AnchorLink id="linkCard" href="#Card">Contact</AnchorLink >
            </div>
            <Me />
            <Arrow />
            <Timeline />
            <References />
            <Developer />
            <TeamLead />
            <ScrumMaster />
            <Card /> 
            <Footer />
        </div>;
    }
}
