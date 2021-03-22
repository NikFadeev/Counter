import css from './Setting.module.css';

type SettingPropsType = {
    settingName: string,
    value: number,
    error: boolean,
    onChange: (value: number) => void
}

const Setting = (props: SettingPropsType) => {

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(+e.currentTarget.value);
    }

    const inputCN = props.error ? `${css.input} ${css.inputError}` : css.input;

    return (
        <div className={css.settingsItem}>
            <div className={css.settingName}>{props.settingName}</div>
            <input type="number"
                   className={inputCN}
                   value={props.value}
                   onChange={onChangeHandler}/>
        </div>
    )
}

export default Setting;