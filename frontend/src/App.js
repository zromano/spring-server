import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [helloText, setHelloText] = useState();

    useEffect(() => {
        hello();
    }, []);

    const hello = () => {
        console.log('hello');
        fetch('/helloWorld')
            .then(response => response.text())
            .then(message => {
                setHelloText(message);
            })
            .catch(error => {
                console.log('error');
                console.log(error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {helloText}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
