import React from 'react';
import ReactDOM from 'react-dom';

import ListTodo from './Components/ListTodo';


import 'style.css'

function App() {
    return <ListTodo />;
}

ReactDOM.render(<App />, document.getElementById('root'));