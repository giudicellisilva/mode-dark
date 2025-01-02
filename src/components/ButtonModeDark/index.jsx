import "./ButtonModeDark.css";

const ButtonModeDark = ({isModeDark, setModeDark}) =>{
    return(
        <button className="ButtonModeDark" onClick={() => setModeDark(!isModeDark)} ></button>
    )
}

export default ButtonModeDark;