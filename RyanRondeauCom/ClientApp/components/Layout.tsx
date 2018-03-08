import * as React from 'react';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>
            <div className="overflow">
                {this.props.children}
            </div>
        </div>;
    }
}
