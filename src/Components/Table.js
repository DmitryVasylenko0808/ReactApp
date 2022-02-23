import React from "react";

import SelectAll from "./SelectAll";
import arrayOfObject from "../users";

export default function Table() {
    const arr = [];
    for (let object of arrayOfObject) {;
        arr.push(object);
    }

    const arrElements = arr.map((item) => (
        <tr>
            <td>
                <input type='checkbox' />
            </td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.balance}</td>
        </tr>
    ))

    return (
        <table>
            <tbody>
                {arrElements}
            </tbody>
        </table>
    );
}