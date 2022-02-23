import React from 'react';

import Table from './Table';

export default function Item(props) {
    return (
        <tr>
            <td>
                <input type='checkbox' />
            </td>
            <td>{props.data.name}</td>
            <td>{props.data.gender}</td>
            <td>{props.data.balance}</td>
        </tr>
    );
} 