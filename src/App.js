import React, {Component} from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';



class App extends Component {

  state = {
    activeLesson: {},
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
    ],
}

  render () {
    return (
      <div className="App">
        <Video activeLesson={this.state.activeLesson}></Video>
        <Sidebar modules={this.state.modules}></Sidebar>
      </div>
    );
  }
}

export default App;
