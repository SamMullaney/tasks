import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    function getTextColor(background: string): string {
        return (
                background === "white" ||
                    background === "yellow" ||
                    background === "cyan"
            ) ?
                "black"
            :   "white";
    }

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {colors.map((c: string) => (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        name="color-group"
                        id={`color-${c}`}
                        value={c}
                        checked={selectedColor === c}
                        onChange={() => {
                            setSelectedColor(c);
                        }}
                        label={
                            <span
                                style={{
                                    backgroundColor: c,
                                    padding: "0 4px",
                                }}
                            >
                                {c}
                            </span>
                        }
                    />
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    backgroundColor: selectedColor,
                    color: getTextColor(selectedColor),
                    padding: "0 4px",
                    display: "inline-block",
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}
