import React from 'react';
import ReactDOM from 'react-dom';

import NewComponent from './components/new-word';
// console.log('NewWordComponent ' , NewWordComponent);
export class Page extends React.Component {

  render() {
    return (
      <div>
        <div id="id-1">
          <button>1</button>
        </div>
        <NewComponent></NewComponent>
      </div>
    );
  }
}

ReactDOM.render(<Page/>, document.getElementById('app'));
