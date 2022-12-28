import React, {useState} from "react";
import {Form, Button, ListGroup, ListGroupItem} from "react-bootstrap";

function ProductApp() {
    const [textFormControl, setTextFormControl] = useState('');
    const [masProduct, setMasProduct] = useState([{id: 1, name: 'Молоко'}, {id: 2, name: 'Яблука'}])
    const [index, setIndex] = useState(3)

    function updateListGroup() {
        if (textFormControl !== '') {
            setIndex(index + 1);
            setMasProduct([...masProduct, {
                id: index,
                name: textFormControl.toString()
            }]);
            console.log(masProduct);
            setTextFormControl('');
        }
    }

    function Enter(event) {
        if (event.key === "Enter") {
            updateListGroup();
        }
    }

    function deleteListGroupItem(id) { // удаление объекта из массива при совпадении id
        setMasProduct(masProduct.filter(obj => obj.id != id));
    }


    return (<div style={{width: '500px'}}>
        <Form.Group className="mb-3" controlId="formBasicPassword" style={{display: 'flex'}}>
            <Form.Control id='formControl' value={textFormControl}
                          onChange={event => setTextFormControl(event.target.value)} onKeyPress={Enter}
                          placeholder="Product Name"/>
            <Button variant={"primary"} onClick={updateListGroup}>Додати</Button>
        </Form.Group>
        <ListGroup id='listProduct'>
            {masProduct.map(item => (
                <ListGroupItem variant={"light"} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>{item.name}</span>
                    <Button onClick={event => deleteListGroupItem(item.id)} variant={"outline-danger"}
                            style={{border: '1px solid red'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                             className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path
                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </Button>
                </ListGroupItem>))}
        </ListGroup>
    </div>);
}

export default ProductApp