import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Header</h1>
            <header className="App-header">
                Sam Mullaney UD CISC275 with React Hooks and TypeScript Hello
                World!
            </header>
            <hr />

            <Counter />
            <hr />

            <RevealAnswer />
            <hr />

            <StartAttempt />
            <hr />

            <TwoDice />
            <hr />

            <ChangeType />
            <hr />

            <CycleHoliday />
            <hr />

            <img
                src="https://via.placeholder.com/150"
                alt="Placeholder example"
            />
            <hr />

            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
            </ul>
            <hr />

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <hr />

            <div style={{ backgroundColor: "red", padding: "10px" }}>
                Red Box
            </div>
        </div>
    );
}

export default App;
