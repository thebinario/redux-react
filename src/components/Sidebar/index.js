import React, { Component } from 'react';

class Sidebar extends Component {
    
    render() {
        const {modules} = this.state;
        return (
            <div>
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
                
            </div>
        );
    }
}

export default Sidebar;