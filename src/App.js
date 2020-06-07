import React from 'react';
import './App.css';
import loadable from '@loadable/component';
import { fetchCountries, fetchCourses } from './AutoComplete/actions';

// import { AutoComplete } from './AutoComplete/AutoComplete';

function Fallback() {
    return <div>Loading...</div>;
}

const AsyncPage = loadable(() => import(`./AutoComplete/AutoComplete`), {
    cacheKey: (props) => props.id,
    fallback: <Fallback />,
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Autocomplete</h2>
                <p>Start typing:</p>
                <AsyncPage fetchHints={fetchCountries} label={'Country'} id="country" />
                <br />
                <AsyncPage fetchHints={fetchCourses} label={'Course'} id="course" />
            </header>
        </div>
    );
}

export default App;
