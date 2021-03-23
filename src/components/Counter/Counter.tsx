import css from './Counter.module.css';
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import CounterPanel from "./CounterPanel/CounterPanel";

type CounterPropsType = {
    maxValue: number,
    startValue: number,
    counterValue: null | number,
    incrementCounterValue: () => void,
    resetCounterValue: () => void
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={css.counter}>
            <CounterDisplay maxValue={props.maxValue}
                            startValue={props.startValue}
                            counterValue={props.counterValue}/>
            <CounterPanel maxValue={props.maxValue}
                          startValue={props.startValue}
                          counterValue={props.counterValue}
                          incrementCounterValue={props.incrementCounterValue}
                          resetCounterValue={props.resetCounterValue}/>
        </div>
    )
}

export default Counter;
