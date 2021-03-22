import css from './SettingsPanel.module.css';
import CounterBtn from "../../CounterBtn/CounterBtn";

type SettingsPanelPropsType = {
    initSettings: () => void,
    settingsCanNotBeInitialized: boolean
}

const SettingsPanel = (props: SettingsPanelPropsType) => {
   return (
       <div className={css.settingsPanel}>
           <CounterBtn text={'set'}
                       disabled={props.settingsCanNotBeInitialized}
                       onClickHandler={props.initSettings}/>
       </div>
   )
}

export default SettingsPanel;