import {CHUTE} from "./css/style";

export default function Chute(props){
    return(
        <CHUTE.areaChute>
            <CHUTE.textoChute>Já sei a palavra!</CHUTE.textoChute>
            <CHUTE.inputChute disabled={props.enabled} onChange={props.value} data-test="guess-input"/>
            <CHUTE.buttonChute disabled={props.enabled} onClick={props.func} data-test="guess-button">Chutar</CHUTE.buttonChute>
        </CHUTE.areaChute>
    );
}