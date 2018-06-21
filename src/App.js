import React, { Component } from 'react';

class App extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            counter: 0
        }
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <div>{counter}</div>
                <div>{ counter === 0 ? 'zero' : counter.toString()}</div>
                <button> onClick={() => window.console.log('CLICKED')}+</button>
            </div>
        );
  }
}
export default App;