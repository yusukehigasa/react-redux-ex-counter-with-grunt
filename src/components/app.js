import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.fuga}</span><br />
                <button onClick={ () => this.props.onDecrement() } disabled={this.props.fuga < 1}> - Minus</button>
                <button onClick={ () => this.props.onIncrement() }> + Plus</button>
            </div>
        );
    }
}