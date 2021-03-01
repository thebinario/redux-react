import { createStore } from 'redux';

function reducer () {
    return {
        activeLesson: null,
        activeModule: null,
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
    }
}


const store = createStore( reducer)

export default store;