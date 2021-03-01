import React from 'react';

import {connect} from 'react-redux';


function toggleLesson(module, lesson) {
    return{
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    }
}

const Sidebar = ({modules, dispatch}) => (
    <aside>
    {modules.map(modules => (
        <div key={modules.id}>
            <strong>{modules.title}</strong>
            <ul>
                {modules.lessons.map(lesson =>(
                    <li key={lesson.id}>
                        {lesson.title}
                        <button onClick={() => dispatch(toggleLesson(modules, lesson))}> Selecionar </button>
                    </li>
                ))}
            </ul>

        </div>
    ))}
</aside>
)


export default connect(state => ({modules: state.course.modules}))(Sidebar);