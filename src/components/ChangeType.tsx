import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function handleChangeType() {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <p>
                {type === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>

            <Button onClick={handleChangeType}>Change Type</Button>
        </div>
    );
}
