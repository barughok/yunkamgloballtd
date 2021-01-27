// Import the React Libraries
import React from 'react';
import ReactDOM from 'react-dom';


// function getButtunText() {
//     return 'Click on Me!';
// }

//create the React component
const App = () => {
    const LabelName = 'Enter name: ';
    const buttonText = {text: 'Click Me!!!!'};
    return (<div>
        <h1 align = "center">Yunkam Global Limited.</h1>
        <label className = "name" htmlFor = "name">{LabelName}</label>
        <input id = "name" type = "text" />
        <button style = {{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button>
    </div>);
};
//Make the component show on the browser
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);