import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Desafio3 = () => {
    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5 mb-5">
                <Card.Body>
                    <Card.Title className="text-center">Minha garagem</Card.Title>
                    <div className="formulario-desafio1">
                        <Form /* onSubmit={submitHandler} */>
                            <h5>Informe os dados do veículo</h5>
                            <Form.Group className="mb-3" controlId="modelo">
                                <Form.Label>Modelo</Form.Label>
                                <input type="text" name="modelo" className="form-control"
                                    placeholder="Insira o modelo do veículo" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="fabricacao">
                                <Form.Label>Ano de fabricação</Form.Label>
                                <input type="number" name="fabricacao" placeholder="Insira o ano de fabricação"
                                    className="form-control" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="portas">
                                <Form.Label>Quantidade de Portas</Form.Label>
                                <input type="number" name="portas" className="form-control"
                                    placeholder="Insira a quantidade de portas" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="marca">
                                <Form.Label>Marca</Form.Label>
                                <input type="text" name="inicio" className="form-control"
                                    placeholder="Insira a marca do veículo" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Enviar</Button>
                        </Form>
                    </div>
                    <div className="resultado-desafio1">
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dados do veículo:</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly />
                        </Form.Group>
                    </div>
                </Card.Body>
            </Card>          
        </>
    );
}

export default Desafio3;