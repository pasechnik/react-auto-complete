import React from 'react';
import './App.css';
// import { AutoComplete } from './AutoComplete';
import loadable from '@loadable/component';

function Fallback() {
    return <div>Loading...</div>;
}

const AutoComplete = loadable(() => import(`./AutoComplete/AutoComplete`), {
    fallback: <Fallback />,
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AutoComplete />
            </header>
        </div>
    );
}

export default App;
