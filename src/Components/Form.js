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

    componentDidMount() {

    }

    handleName = (e) => {
        let listUsersCopy = this.state.listUsers;
        listUsersCopy = listUsersCopy.filter((item) => item === e.value);

        this.setState({listUsers: listUsersCopy});
    }

    handleCategory = () => {
        let listUsersCopy = this.state.listUsers;
        listUsersCopy = listUsersCopy.filter(item => item.gender === 'male')
        this.setState({listUsers: listUsersCopy});
    }

    render() {
        return (
            <form>
                <div>
                    <input type="search" placeholder="Search by name" onChange={this.handleName}/>
                    <select defaultValue='All' onChange={this.handleCategory}>
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
                </div>
                <SelectAll />
                <Table data={this.state.listUsers}/>
            </form>
        );
    }
}