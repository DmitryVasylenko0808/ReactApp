import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './Clock';
import Form from './Form';

function UserGreeting() {
    return <h3>You are signed!</h3>
}

function GuestGreeting() {
    return <h3>You are guest!</h3>
}

function Greeting(props) {
    const isLogged = props.isLogged;

    if (isLogged) {
        return <UserGreeting />
    }
    else {
        return <GuestGreeting />
    }
}

function App(props) {
    const arrayElem = [];
    for(let i = 0; i < props.value; i++) {
        let keyLi = i;
        let clock = <li key={keyLi}><Clock value={i} /></li>;
        arrayElem.push(clock);
    }
    

    return (
        <div>
            <ul>{/*array.map((item, index) => (
                <Clock value={index}/>
            ))*/arrayElem}</ul>
            <Form />
            <Greeting isLogged={true} />
            <Greeting isLogged={false} />
        </div>
    )
}

ReactDOM.render(<App value={3}/>, document.getElementById('root'));