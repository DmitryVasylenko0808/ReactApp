import React from "react";

import Item from "./Item";

export default function BodyTable() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        const elem = <Item />;
        arr.push(elem);
    }

    return (
        <tbody>
            {arr}
        </tbody>
    );
}