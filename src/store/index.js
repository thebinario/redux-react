import { createStore } from 'redux';

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {id:1,
            title: 'Iniciando projeto',lessons: [
                {id:1, title: 'inicindo aula'},
                {id:2, title: 'instalando dependencias'},
            ],
        },
        {id:2,
            title: 'continuando projeto',lessons: [
                {id:1, title: 'programcao'},
                {id:2, title: 'refatorando'},
            ],
        },
    ]
};

function reducer (state= INITIAL_STATE, action) {
    if(action.type === "TOGGLE_LESSON"){
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        };
    }
    return state;
}


const store = createStore( reducer)

export default store;