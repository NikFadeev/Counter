import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let initMaxValue = 5;
    let initStartValue = 0;
    let initCounterValue = null;

    let [maxValue, setMaxValue] = useState<number>(initMaxValue);
    let [startValue, setStartValue] = useState<number>(initStartValue);
    let [counterValue, setCounterValue] = useState<number | null>(initCounterValue);

    return (
        <div className={'app'}>

        </div>
    );
}

export default App;
