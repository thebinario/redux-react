import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as CourseActions from '../../store/actions/course'


const Sidebar = ({modules, toggleLesson}) => (
    <aside>
    {modules.map(modules => (
        <div key={modules.id}>
            <strong>{modules.title}</strong>
            <ul>
                {modules.lessons.map(lesson =>(
                    <li key={lesson.id}>
                        {lesson.title}
                        <button onClick={() => toggleLesson(modules, lesson)}> Selecionar </button>
                    </li>
                ))}
            </ul>

        </div>
    ))}
</aside>
)

const mapStateToProps = state => ({
    modules: state.course.modules
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);   