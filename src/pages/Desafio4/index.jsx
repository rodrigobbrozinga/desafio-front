import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';


const Desafio4 = () => {
    return (
        <>
            <Card border="secondary" bg="light" className="w-50 m-auto mt-5 mb-5">
                <Card.Body>
                    <Card.Title className="text-center">Consulta CEP</Card.Title>
                    <div className="formulario-desafio1">
                        <Form /* onSubmit={submitHandler} */>
                            <h5>Informe os CEPs a seguir</h5>
                            <Form.Group className="mb-3" controlId="cep1">
                                <Form.Label>CEP 1</Form.Label>
                                <input type="text" name="cep1" className="form-control"
                                    placeholder="Insira o CEP" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cep2">
                                <Form.Label>CEP 2</Form.Label>
                                <input type="text" name="cep2" placeholder="Insira o CEP"
                                    className="form-control" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cep3">
                                <Form.Label>CEP 3</Form.Label>
                                <input type="text" name="cep3" className="form-control"
                                    placeholder="Insira o CEP" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cep4">
                                <Form.Label>CEP 4</Form.Label>
                                <input type="text" name="cep4" className="form-control"
                                    placeholder="Insira o CEP" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cep5">
                                <Form.Label>CEP 5</Form.Label>
                                <input type="text" name="cep5" className="form-control"
                                    placeholder="Insira o CEP" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">Enviar</Button>
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

export default Desafio4;