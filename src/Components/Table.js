import React from "react";

import BodyTable from "./BodyTable";
import HeaderTable from "./HeaderTable";

export default function Table() {
    return (
        <table>
            <HeaderTable />
            <BodyTable />
        </table>
    );
}