import React from "react";

import Table from "./Table";
import SelectAll from "./SelectAll";
import arrayOfObject from "./../users"

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listUsers: arrayOfObject
        }
    }

    render() {
        return (
            <form>
                <input type="search" placeholder="Search by name" />
                <select defaultValue='All'>
                    <option value='All' selected>All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="v/o">V/O</option>
                    <option value="v/n/o">V/N/O</option>
                </select>
                <select>
                    <option value="A-Z name" selected>A-Z name</option>
                    <option value="Z-A name">Z-A name</option>
                    <option value="Budget &#8593;">Budget &#8593;</option>
                    <option value="Budget &#8595;">Budget &#8595;</option>
                </select> 
                <SelectAll />
                <Table />
            </form>
        );
    }
}