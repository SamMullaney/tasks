import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start() {
        setInProgress(true);
        setAttempts((a) => a - 1);
    }

    function stop() {
        setInProgress(false);
    }

    function mulligan() {
        setAttempts((a) => a + 1);
    }

    return (
        <div>
            <p>{attempts}</p>
            <Button disabled={inProgress || attempts === 0} onClick={start}>
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={stop}>
                Stop Quiz
            </Button>
            <Button disabled={inProgress} onClick={mulligan}>
                Mulligan
            </Button>
        </div>
    );
}
