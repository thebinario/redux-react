import React from 'react';

import {connect} from 'react-redux';

const Video = ({activeModule, activeLesson}) => (

<div>
    <strong> Modulo {activeModule.title} </strong>
    <p> aula {activeLesson.title} </p>
</div>
);

export default connect(state => ({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson,
}))(Video);