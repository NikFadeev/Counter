import css from './CounterDisplay.module.css';

type CounterDisplayPropsType = {
    maxValue: number,
    startValue: number,
    counterValue: null | number
}

const CounterDisplay = (props: CounterDisplayPropsType) => {
    let displayContent;
    let Ddd = (props: any) => <div className={props.css}>{props.title}</div>
    if (props.counterValue != null) {
        let counterCN = props.counterValue < props.maxValue ? css.counterValue : `${css.counterValue} ${css.counterLastValue}`;
        displayContent = <div className={counterCN}>{props.counterValue}</div>
    } else if (props.startValue < 0 || props.maxValue < 0 || props.startValue >= props.maxValue) {
        displayContent = <div className={css.valuesError}>invalid values</div>
    } else {
        displayContent = <Ddd css={css.valuesValid} title={'enter values and press set'}/>//<div className={css.valuesValid}>enter values and press set</div>;
    }



    return (
        <div className={css.counterDisplay}>
            {displayContent}
        </div>
    )
}

export default CounterDisplay;