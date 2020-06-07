import React from 'react';
import './App.css';
import loadable from '@loadable/component';
import { fetchHints } from './AutoComplete/actions';

function Fallback() {
    return <div>Loading...</div>;
}

const AsyncPage = loadable((props) => import(`./AutoComplete/AutoComplete`), {
    cacheKey: (props) => props.fetchHints,
    fallback: <Fallback />,
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AsyncPage fetchHints={fetchHints} />
            </header>
        </div>
    );
}

export default App;
