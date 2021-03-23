import css from './CounterPanel.module.css';
import CounterBtn from "../../CounterBtn/CounterBtn";

type CounterPanelPropsType = {
    maxValue: number,
    startValue: number,
    counterValue: null | number,
    incrementCounterValue: () => void,
    resetCounterValue: () => void
}

const CounterPanel = (props: CounterPanelPropsType) => {
    let incrementBtnDisabled = props.counterValue == null || props.counterValue == props.maxValue;
    let resetBtnDisabled = props.counterValue == null;

    return (
        <div className={css.counterPanel}>
            <CounterBtn text={'inc'} disabled={incrementBtnDisabled} onClickHandler={props.incrementCounterValue} />
            <CounterBtn text={'reset'} disabled={resetBtnDisabled} onClickHandler={props.resetCounterValue} />
        </div>
    )
}

export default CounterPanel;