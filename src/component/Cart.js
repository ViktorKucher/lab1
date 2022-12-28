import {Button, Table} from "react-bootstrap";
import {useState} from "react";

function Cart() {

    const [masCart, setMasCart] = useState([{
        name: 'Constructor LEGO',
        price: 300,
        quantity: 0,
        total: 0
    },
        {name: 'Train Station', price: 200, quantity: 0, total: 0}, {
        name: 'Hot Wheels Track',
        price: 150,
        quantity: 0,
        total: 0
    }])


    function Incrument(name) {

        setMasCart(masCart.map(function (item) {
            if (item.name === name) {
                item.quantity += 1;
                item.total = item.price * item.quantity;
            }
            return item;
        }))

    }

    function Decrument(name) {

        setMasCart(masCart.map(function (item) {
            if (item.name === name && item.quantity !== 0) {
                item.quantity -= 1;
                item.total = item.price * item.quantity;
            }
            return item;
        }))

    }

    function totalCount() {
        let count = masCart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
        return <span>{count}</span>
    }

    function totalPrice() {
        let count = masCart.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
        return <span>{count}</span>
    }

    return (
        <Table stripped bordered hover size="sm">
            <thead style={{backgroundColor: '#ceffbc'}}>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {masCart.map(item => (
                <tr>
                    <th>{item.name}</th>
                    <th>{item.price}</th>
                    <th>
                        <Button onClick={event => Incrument(item.name)}>+</Button>
                        <span>{item.quantity}</span>
                        <Button onClick={event => Decrument(item.name)}>-</Button>
                    </th>
                    <th>{item.total}</th>
                </tr>

            ))}
            <tr style={{backgroundColor: '#CCE5FF'}}>
                <th colSpan={2}>Totals</th>
                <th>{totalCount()}</th>
                <th>{totalPrice()}</th>
            </tr>
            </tbody>


        </Table>
    )
}

export default Cart;