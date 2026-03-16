import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            {editMode && (
                <>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </>
            )}

            <Form.Check
                type="switch"
                id="editable"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />

            <div>
                {name} is {student ? "a student" : "not a student"}
            </div>
        </div>
    );
}
