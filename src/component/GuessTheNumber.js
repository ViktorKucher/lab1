import React, {useState} from "react";
import {Button,Form,Modal} from "react-bootstrap";

function GuessTheNumber() {
    const [number,setNumber]=useState();
    const [disabledCheck,setDisabledCheck]=useState(true);
    const [disabledButtonNewGame,setDisabledButtonNewGame]=useState(false);
    const [stringResult,setStringResult]=useState('');
    const [stringNumber,setStringNumber]=useState('')
    function Random(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    function newGame(){
        setNumber(Random(1,1000));
        console.log(number)
        setDisabledCheck(false)
        setDisabledButtonNewGame(true)
    }
    const [modalShow, setModalShow] = useState(false);
    const [modalText, setModalText] = useState('');
    const [countAudit,setCountAudit]= useState(0)
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {modalText}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function auditNumbers() {
        if(+stringNumber==number){
            setSettings('Good Job!');
        }
        if (+stringNumber>number){
            setStringResult(stringResult+"N < "+stringNumber+"\n")
        }
        if (+stringNumber<number){
            setStringResult(stringResult+"N > "+stringNumber+"\n")
        }
        if(countAudit==9){
            setSettings("You lost!");
        }
        else{
            setCountAudit(countAudit+1);
        }
        setStringNumber('');
    }


    function setSettings(text){
        setModalText(text)
        setModalShow(true);
        setStringResult("");
        setDisabledCheck(true)
        setDisabledButtonNewGame(false)
        setCountAudit(0)
    }
    return(
        <div>
            <Form style={{width:'400px',display:'flex',justifyContent:'space-between'}}>
                <Button onClick={newGame} disabled={disabledButtonNewGame}>New Game</Button>
                <Form.Control placeholder={'Number'} style={{width:'200px'}} onChange={e => setStringNumber(e.target.value)} disabled={disabledCheck} value={stringNumber}></Form.Control>
                <Button disabled={disabledCheck} onClick={auditNumbers}>Check</Button>
            </Form>
            <div>
                <p>Information</p>
                <div style={{backgroundColor:'orange',width:'300px',minHeight:'100px',whiteSpace: 'pre-line'}}>
                    {stringResult}
                </div>
                <p>Attempts:{countAudit}</p>
                <p>Result</p>
            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>


    )
}
export default GuessTheNumber;