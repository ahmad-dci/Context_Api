import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './components/SearchComponent';
import { StorageProvider } from './context/StorageContext';

export default function App() {
    return (
        <StorageProvider>
            <div className="container">
                <SearchComponent />
            </div>
        </StorageProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));