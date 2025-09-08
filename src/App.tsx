import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>Header</h1>
            <header className="App-header">
                Sam Mullaney UD CISC275 with React Hooks and TypeScript Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <img src="logo192.png" className="App-logo" alt="logo" />
                Harry Potter Movies in Order:
                <ol>
                    <li>Order of the Pheonix</li>
                    <li>Prisoners of Azkaban</li>
                    <li>Deathly Hallows Part Two</li>
                    <li>Goblet of Fire</li>
                    <li>Deathly Hallows Part One</li>
                    <li>Half Blood Prince</li>
                    <li>Philosophers Stone</li>
                    <li>Chamber of Secrets</li>
                </ol>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                {/* Column 1 */}
                <div>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>

                {/* Column 2 */}
                <div>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default App;
