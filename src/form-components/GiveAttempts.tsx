import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");

    function requestBox(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function use() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gain() {
        if (request !== "") {
            setAttempts(attempts + parseInt(request));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button onClick={use} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={gain}>Gain</Button>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={requestBox}
                />
            </Form.Group>
            <div>{attempts}</div>
        </div>
    );
}
