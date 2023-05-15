import f0 from "./assets/forca0.png";
import f1 from "./assets/forca1.png";
import f2 from "./assets/forca2.png";
import f3 from "./assets/forca3.png";
import f4 from "./assets/forca4.png";
import f5 from "./assets/forca5.png";
import f6 from "./assets/forca6.png";

import {JOGO} from "./css/style";

const f = [f0,f1,f2,f3,f4,f5,f6];

export default function Jogo(props){
    return(
        <JOGO.jogo>
            <JOGO.imagem>
                <JOGO.img src={f[props.errors]} alt="forca" data-test="game-image"/>
            </JOGO.imagem>
            <JOGO.direita>
                <JOGO.divbotao>
                    <JOGO.botao onClick={props.botao} data-test="choose-word">
                        Escolher palavra
                    </JOGO.botao>
                </JOGO.divbotao>
                <JOGO.palavra win={props.win} data-test="word">
                    {props.answer}
                </JOGO.palavra>
            </JOGO.direita>
        </JOGO.jogo>
    )
}