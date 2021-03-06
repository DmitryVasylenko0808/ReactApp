import React from "react";
import ToDoItem from "./ToDoItem";
import Button from "./Button";'./Button';

import 'style.css';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 0,
                title: "",
                isDone: false
            },
            toDoItems: []
        }

        this.clickAdd = this.clickAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = {
            id: this.state.item.id,
            title: e.target.value,
            isDone: false
        }
        this.setState({ item: item })
    }

    clickAdd() {
        const toDoItems = this.state.toDoItems.slice();
        const itemAdd = {
            id: this.state.item.id + 1,
            title: this.state.item.title,
            isDone: false
        };

        toDoItems.push(itemAdd);

        this.setState({
            item: itemAdd,
            toDoItems: toDoItems
        })
    }

    clickDelete(i) {
        const toDoItems = this.state.toDoItems.slice();
        toDoItems.splice(i, 1);
        this.setState({ toDoItems: toDoItems });
    }

    renderToDoItems() {
        const arrayItemComponents = [];
        for (let i = 0; i < this.state.toDoItems.length; i++) {
            let itemComponent = <ToDoItem
                key={i.toString()}
                value={this.state.toDoItems[i]}
                onClick={() => this.clickDelete(i)}
                class="input-data"
            />;
            arrayItemComponents.push(itemComponent);
        }
        return <ul>{arrayItemComponents}</ul>;
    }

    render() {
        return (
            <div className="container">
                <h1>ToDo List</h1>
                <input className="input-data" type="text" onChange={this.handleChange} />
                <Button value={true} onClick={this.clickAdd} />
                <h2>List:</h2>
                {this.renderToDoItems()}
            </div>)
    }
}