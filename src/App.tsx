import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript. Sam Mullaney. Hello
                World
            </header>
            <h1 className="App-header-2">Second Header</h1>
            <div>
                <img src="/IMG_2103.JPG" alt="food" />
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div
                style={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "red",
                }}
            ></div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
