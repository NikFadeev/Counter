import css from './SettingsDisplay.module.css';
import Setting from './Setting/Setting';

type SettingsDisplayPropsType = {
    maxValue: number,
    changeMaxValue: (value: number) => void,
    maxValueError: boolean,
    startValue: number,
    changeStartValue: (value: number) => void,
    startValueError: boolean
}

const SettingsDisplay = (props: SettingsDisplayPropsType) => {

    function onChangeMaxValue(value: number) {
        props.changeMaxValue(value);
    }

    function onChangeStartValue(value: number) {
        props.changeStartValue(value);
    }

    return (
        <div className={css.settingsDisplay}>
            <Setting settingName={'max value:'} value={props.maxValue} error={props.maxValueError} onChange={onChangeMaxValue}/>
            <Setting settingName={'start value:'} value={props.startValue} error={props.startValueError} onChange={onChangeStartValue}/>
        </div>
    )
}

export default SettingsDisplay;