import React from "react";
import Button from "./Button";;

import 'style.css';

export default function ToDoItem(props) {
    let data = {
        id: props.value.id,
        title: props.value.title,
        isDone: props.value.isDone
    }

    return (
        <li>
            <div className="item">
                <input class={props.class} type="text" value={data.title} />
                <input type="checkbox" defaultChecked={data.isDone} id={"checkbox" + data.id} />
                <label for={"checkbox" + data.id}></label>
                <Button value={false} onClick={props.onClick} />
            </div>
        </li>)
}