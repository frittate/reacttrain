var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
    render(){
        return(
            <div>
                Hello React Training - 143 steps
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

