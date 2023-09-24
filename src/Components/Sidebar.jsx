import React from "react";
import '../App.css';

const Sidebar = () => {
    return (
        <>
            <ul>
                <li>
                    <i class="fa-solid fa-lightbulb"></i>
                    <a href="/">Notes</a>
                </li>
                <li>
                    <i class="fa-solid fa-bell"></i>
                    <a href="/">Reminders</a>
                </li>
                <li>
                    <i class="fa-solid fa-pencil"></i>
                    <a href="/">Edit labels</a>
                </li>
                <li>
                    <i class="fa-solid fa-download"></i>
                    <a href="/">Archive</a>
                </li>
                <li>
                    <i class="fa-solid fa-trash"></i>
                    <a href="/">Trash</a>
                </li>
            </ul>
        </>

    );
}

export default Sidebar;
