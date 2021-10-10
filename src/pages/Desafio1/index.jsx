import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';


const Desafio1 = () => {
    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5 mb-5">
                <Card.Body>
                    <Card.Title className="text-center">Números palíndromos</Card.Title>
                    <div className="formulario-desafio1">
                        <Form /* onSubmit={submitHandler} */>
                            <h5>Informe um intervalo</h5>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Início</Form.Label>
                                <input type="number" name="inicio" className="form-control"
                                    placeholder="Insira o início do intervalo" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="CEP">
                                <Form.Label>Fim</Form.Label>
                                <input type="number" name="fim" placeholder="Insira o fim do intervalo"
                                    className="form-control" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Resultado</Button>
                        </Form>
                    </div>
                    <div className="resultado-desafio1">
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Números palíndromos dentro do intervalo:</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly />
                        </Form.Group>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Desafio1;