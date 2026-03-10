import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎆" | "🐰" | "🎃" | "🦃" | "🎄";

const NEXT_BY_YEAR: Record<Holiday, Holiday> = {
    "🎆": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

const NEXT_BY_ALPHABET: Record<Holiday, Holiday> = {
    "🎄": "🐰",
    "🐰": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");

    function advanceByAlphabet() {
        setHoliday(NEXT_BY_ALPHABET[holiday]);
    }

    function advanceByYear() {
        setHoliday(NEXT_BY_YEAR[holiday]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
