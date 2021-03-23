import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Settings from "./components/Settings/Settings";
import Counter from "./components/Counter/Counter";

function App() {
    let initMaxValue = 5;
    let initStartValue = 0;
    let initCounterValue = null;

    let [maxValue, setMaxValue] = useState<number>(initMaxValue);
    let [startValue, setStartValue] = useState<number>(initStartValue);
    let [counterValue, setCounterValue] = useState<number | null>(initCounterValue);

    let maxValueError = maxValue < 0 || maxValue <= startValue;
    let startValueError = startValue < 0 || startValue >= maxValue;

    function changeMaxValue(value: number) {
        setMaxValue(value);
        setCounterValue(null);
    }

    function changeStartValue(value: number) {
        setStartValue(value);
        setCounterValue(null);
    }

    function initSettings() {
        setCounterValue(startValue);
    }

    function incrementCounterValue() {
        if (counterValue != null && counterValue < maxValue) {
            setCounterValue(++counterValue);
        }
    }

    function resetCounterValue() {
        setCounterValue(startValue);
    }

    return (
        <div className={'App'}>
            <Settings maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      maxValueError={maxValueError}
                      startValue={startValue}
                      changeStartValue={changeStartValue}
                      startValueError={startValueError}
                      counterValue={counterValue}
                      initSettings={initSettings}/>
            <Counter counterValue={counterValue}
                     startValue={startValue}
                     maxValue={maxValue}
                     incrementCounterValue={incrementCounterValue}
                     resetCounterValue={resetCounterValue}/>
        </div>
    );
}

export default App;
