import css from './Settings.module.css';
import SettingsDisplay from "./SettingsDisplay/SettingsDisplay";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

type SettingsPropsType = {
    maxValue: number,
    changeMaxValue: (value: number) => void,
    maxValueError: boolean,
    startValue: number,
    changeStartValue: (value: number) => void,
    startValueError: boolean,
    counterValue: null | number,
    initSettings: () => void
}

const Settings = (props: SettingsPropsType) => {
    let settingsCanNotBeInitialized = props.maxValueError || props.startValueError || (props.counterValue != null);

    return (
        <div className={css.settings}>
            <SettingsDisplay
                maxValue={props.maxValue}
                changeMaxValue={props.changeMaxValue}
                maxValueError={props.maxValueError}
                startValue={props.startValue}
                changeStartValue={props.changeStartValue}
                startValueError={props.startValueError}/>
            <SettingsPanel
                initSettings={props.initSettings}
                settingsCanNotBeInitialized={settingsCanNotBeInitialized}/>
        </div>
    )
}

export default Settings;