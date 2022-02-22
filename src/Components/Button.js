import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonDel from "./ButtonDel";

export default function Button(props) {
    const value = props.value;

    if (value) {
        return <ButtonAdd
            onClick={props.onClick} />
    }
    else {
        return <ButtonDel
            onClick={props.onClick}
        />
    }
}