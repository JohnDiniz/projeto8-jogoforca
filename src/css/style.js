import { styled } from "styled-components";

const {Sans,Roboto} = `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Roboto:wght@700&display=swap');`

const APP = {
    areaL : styled.div`
        width:100%;
        display:flex;
        justify-content: center;
    `,

    letras : styled.div`
        width: 680px;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    `
};

const JOGO = {
jogo : styled.div`display:flex;`,

direita : styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`,

imagem : styled.div`
    width: 50%;
`,

img : styled.img`
    width: 350px;
    height: 408px;
    margin: 10px 0 0 20px;
`,

divbotao : styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,

botao : styled.button`
    width: 200px;
    height: 60px;
    font-family: ${Roboto};
    font-weight: 700;
    font-size: 20px;
    background-color: #27AE60;
    border-radius: 8px;
    border-style: none;
    margin: 20px 40px 0 0;
`,

palavra : styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 50px;
    color:${props => {if(props.win=="false"){return "red"}
    else if(props.win=="true"){return "green"}
    else{return "black"}}};
`
};

const LETRA = {
    letra : styled.button`
        width: 40px;
        height: 40px;
        border: 1px;
        box-sizing: border-box;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin: 0 12px 11px 0;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 16px;
        color: #798A9F;
        &:enabled {
            background: #E1ECF4;
        }
        &:disabled {
            background: #9FAAB5;
        }
    `
};

const CHUTE = {
    areaChute:styled.div`
        width:100%;
        display:flex;
        align-itens:center;
        justify-content:center;
        text-align: center; 
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 20px;
    `,

    textoChute:styled.p`
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:0 7px;
    `,

    inputChute:styled.input`
        width:353px;
        margin:0 7px;
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    `,

    buttonChute:styled.button`
        idth: 100px;
        height: 40px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 16px;
        color:#3C76A1;
        background-color: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin:0 7px;
        &:disabled{filter:brightness(65%);opacity:0.7}
    `
};

export {APP, JOGO, LETRA, CHUTE};