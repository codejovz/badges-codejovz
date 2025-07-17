import React from 'react';
import {NavLink} from 'react-router-dom'
export function Sidebar() {
    return (
        <nav>
            <img src="/assets/githubBadgeslogoIco.png" id="webLogo"></img>
            <ul class="sidebarList">
                <li>
                    <NavLink to="/">Landing</NavLink>
                </li>

                <li>
                    <NavLink to="/Faq">FAQ</NavLink>
                </li>

                <li>
                    <NavLink to="/SpecialThanks">Special thanks</NavLink>
                </li>

                <li>
                    <a  href="https://github.com">
                    Github repo
                    </a>
                </li>

            </ul>
        </nav>
    )
}