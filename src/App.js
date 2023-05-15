import { useState } from "react";
import {APP} from "./css/style";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const initialList = {"a":true, "b":true, "c":true, "d":true, "e":true, "f":true, "g":true, "h":true, "i":true, "j":true, "k":true, "l":true, "m":true, "n":true, "o":true, "p":true, "q":true, "r":true, "s":true, "t":true, "u":true, "v":true, "w":true, "x":true, "y":true, "z":true}

export default function App() {
  const [list,setDisable] = useState({...initialList});
  const [errors,setErrors] = useState(0);
  const [word,setWord] = useState("");
  const [answer,setAnswer] = useState("");
  const [win,setWin] = useState();
  const [guessDisabled,setGuessDisabled] = useState(true);
  const [guess,setGuess] = useState("");

  function handleGuess(event){
    setGuess(event.target.value);
  }

  function userGuess(){
    const g = guess.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const w = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(g.toLowerCase() === w.toLowerCase()){
      console.log("win");
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setAnswer(word);
      setDisable({...lista});
      setGuessDisabled(true); 
      setWin("true");
    }else{
      console.log("lose");
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setAnswer(word);
      setDisable({...lista});
      setGuessDisabled(true);
      setWin("false");
      setErrors(6);
    }
  }
  
  function userInput(l=null, w=word, r=false){
    const newAnswer = [];
    const nword = w.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const newWord = [...nword];
    let erro = errors;
    let c=0;
    [...w].forEach((e,i) => {
      console.log(e,l);
      if(e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")==l){
        newAnswer.push(e);
      }else if(answer && r==false){
        if(!newWord.includes(l)){
          c++;
        }
        newAnswer.push(answer[i]);
      }else{
        newAnswer.push(" _");
      }
    })
    if(c>0){
      erro++;
      setErrors(erro);  
    }
    setAnswer(newAnswer);
    console.log(erro);
    if(newAnswer.toString() == [...word].toString()){
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setDisable({...lista}); 
      setGuessDisabled(true);
      setWin("true");
    }else if(erro == 6 && r==false){
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setAnswer(word);
      setDisable({...lista});
      setGuessDisabled(true);
      setWin("false");
    }
  }

  function disable(p){
    const lista = {...list};
    lista[p] = true;
    setDisable({...lista});
    userInput(p);
  }

  function newWord(){
    const newPalavra = palavras[Math.floor(Math.random() * (palavras.length))];
    const newAnswer = "";
    const lista = {...list};
    for (const key in lista) {
      lista[key] = false;
    }
    setDisable({...lista});
    setWord(newPalavra);
    setAnswer(newAnswer);
    userInput(null,newPalavra,true);
    setErrors(0);
    setWin();
    setGuessDisabled(false);
  }

  return (
    <div className="App">
      <Jogo botao={newWord} errors={errors} word={word} answer={answer} win={win}/>
      <APP.areaL>
        <APP.letras>
          {alfabeto.map(letter => <Letras letra={letter} key={letter} func={disable} active={list[letter]}/>)}
        </APP.letras>
      </APP.areaL>
      <Chute enabled={guessDisabled} func={userGuess} value={handleGuess}/>
    </div>
  );
}