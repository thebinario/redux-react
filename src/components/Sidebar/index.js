import React from 'react';

import {connect} from 'react-redux';

const Sidebar = ({modules}) => (
    <aside>
    {modules.map(modules => (
        <div key={modules.id}>
            <strong>{modules.title}</strong>
            <ul>
                {modules.lessons.map(lessons =>(
                    <li key={lessons.id}>
                        {lessons.title}
                    </li>
                ))}
            </ul>

        </div>
    ))}
</aside>
)


export default connect(state => ({modules: state.modules}))(Sidebar);