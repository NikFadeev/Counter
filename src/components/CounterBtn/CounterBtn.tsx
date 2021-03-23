import css from './CounterBtn.module.css';

type CounterBtnPropsType = {
    text: string,
    disabled: boolean,
    onClickHandler: () => void
}

function CounterBtn(props: CounterBtnPropsType) {
    return <button disabled={props.disabled} className={css.btn} onClick={props.onClickHandler}>{props.text}</button>
}

export default CounterBtn;