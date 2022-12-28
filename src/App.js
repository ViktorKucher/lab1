import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCounter from "./component/MyCounter";
import ProductApp from "./component/ProductApp";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Cart from "./component/Cart";
import GuessTheNumber from "./component/GuessTheNumber";
function App() {
    const numbers=[{id:1,initial: 0,max:100,min:-10},
        {id:2,initial: 0},
        {id:3,initial: 50}
    ];
  return (
    <div className="App">
        <h1>Завдання 1</h1>
        <ListGroup style={{width:'500px'}}>
            <ListGroup.Item ><MyCounter initial={numbers[0].initial} max={numbers[0].max} min={numbers[0].min}></MyCounter></ListGroup.Item>
            <ListGroupItem ><MyCounter initial={numbers[1].initial} max={numbers[1].max} min={numbers[1].min}></MyCounter></ListGroupItem>
            <ListGroupItem ><MyCounter initial={numbers[2].initial} max={numbers[2].max} min={numbers[2].min}></MyCounter></ListGroupItem>
        </ListGroup>
        <h1>Завдання 2</h1>
        <ProductApp></ProductApp>
        <h1>Завдання 3</h1>
        <Cart></Cart>
        <h1>Завдання 4</h1>
        <GuessTheNumber></GuessTheNumber>
      </div>
  );
}

export default App;
