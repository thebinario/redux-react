import React from 'react';

import {connect} from 'react-redux';

import * as CourseActions from '../../store/actions/course'


const Sidebar = ({modules, dispatch}) => (
    <aside>
    {modules.map(modules => (
        <div key={modules.id}>
            <strong>{modules.title}</strong>
            <ul>
                {modules.lessons.map(lesson =>(
                    <li key={lesson.id}>
                        {lesson.title}
                        <button onClick={() => dispatch(CourseActions.toggleLesson(modules, lesson))}> Selecionar </button>
                    </li>
                ))}
            </ul>

        </div>
    ))}
</aside>
)


export default connect(state => ({modules: state.course.modules}))(Sidebar);