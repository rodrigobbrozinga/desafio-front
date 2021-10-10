import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Desafio2 = () => {
    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5 mb-5">
                <Card.Body>
                    <Card.Title className="text-center">Desafio troco</Card.Title>
                    <div className="formulario-desafio1">
                        <Form /* onSubmit={submitHandler} */>
                            <h5>Digite as informações abaixo</h5>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Valor da compra</Form.Label>
                                <input type="number" name="valor" className="form-control"
                                    placeholder="Insira o valor da compra" step="0.01" min="0.01" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="CEP">
                                <Form.Label>Valor entregue ao caixa</Form.Label>
                                <input type="number" name="fim" placeholder="Insira o valor entregue ao caixa"
                                    className="form-control" step="0.01" min="0.01" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Resultado</Button>
                        </Form>
                    </div>
                    <div className="resultado-desafio1">
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Resultado:</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly />
                        </Form.Group>
                    </div>
                </Card.Body>
            </Card>           
        </>
    );
}

export default Desafio2;