import React from "react";
import Figure from './components/Figure';
import Art from './components/Art'
/*
  Componentes 
  Props -> Propriedades

*/

class App extends React.Component {

  render() {
    const square = "square"
    return (
      <div>
        <h1 className="title">Geometrizando</h1>
        <Art>
          <Figure type={square} bg="red"  class="nomeClasse"/>
          <Figure type="circle" bg="blue" />
          <Figure type="square" bg="#000" />
          <Figure type="circle" bg="red" />
          <Figure type="square" bg="#000" />
          <Figure type="circle" bg="#000" />
          <Figure type="square" bg="#DDD" />
          <Figure type="circle" bg="red" />
          <Figure type="square" bg="red" />
          <Figure type="circle" bg="red" />
          <Figure type="square" bg="purble" />
          <Figure type="circle" bg="#red" />
          <Figure type="square" bg="#000" />
          <Figure type="circle" bg="red" />
        </Art>
      </div>
    )
  }
}

export default App;



