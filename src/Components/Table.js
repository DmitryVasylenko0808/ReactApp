import React from "react";

import SelectAll from "./SelectAll";
import arrayOfObject from "../users";

import Form from "./Form";
import Item from "./Item";

export default function Table(props) {
    const arr = [];
    for (let object of props.data) {;
        arr.push(object);
    }

    const arrElements = arr.map((item) => (
        /*<tr>
            <td>
                <input type='checkbox' />
            </td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.balance}</td>
        </tr>*/
        <Item data={item}/>
    ))

    return (
        <table>
            <tbody>
                {arrElements}
            </tbody>
        </table>
    );
}