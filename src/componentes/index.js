import React, { useEffect, useState } from "react";

export default function Index() {
  const [original, setOriginal] = useState([]);
  const [sorteador, setSorteador] = useState([]);
  const [item, setItem] = useState("");
  const [sorteados, setSorteados] = useState([]);

  /*
  criar useState responsavel por armazenar os valores sorteados
  criar função para capturar o valor randomicamente, salvar no array dos sorteados e apagar do array sorteador
  criar função para limpar tudo 
  criar função para reiniciar o sorteio, pegando o original e espelhando novamente para o sorteador e limpar os valores sorteados
  */

  function handleInsertValue() {
    if (item !== "") {
      if (original.length > 0) {
        setOriginal([...original, item]);
      } else {
        setOriginal([item]);
      }
    }
  }

  useEffect(() => {
    setSorteador(original);
  }, [original]);

  useEffect(() => {
    console.log("sorteador->", sorteador);
  }, [sorteador]);

  function handleChangeValue(valor) {
    console.log("valor ->", valor);
    setItem(valor);
  }

  function handleClickSorteio() {
    //vai pegar as posições do array e vai fazer o sorteio
    // alert(sorteador[Math.floor(Math.random() * sorteador.length)]);
    //setSorteados recebe e seta o valor no sorteados
    // setSorteados([sorteador[Math.floor(Math.random() * sorteador.length)]]);
    if (sorteados.length > 0) {
      setSorteados([...sorteados, sorteador[Math.floor(Math.random() * sorteador.length)]]);
    } else {
      setSorteados([sorteador[Math.floor(Math.random() * sorteador.length)]]);
    }
  }

  return (
    <div>
      <h5>insira um valor</h5>
      <input
        id="valor"
        // o onChange chama um evento toda vez que um objeto sofrer alteração
        onChange={(e) => {
          handleChangeValue(e.target.value);
        }}
        value={item}
      />
      <button
        id="botao"
        onClick={(e) => {
          handleInsertValue();
        }}
      >
        OK
      </button>{" "}
      <br />
      Lista à Sortear: <br />
      {sorteador.map((sort) => {
        return (
          <>
            <b>{sort}</b>
            <br />
          </>
        );
      })}
      <button onClick={() => {handleClickSorteio();}}>Sortear</button><br/>
      Lista de Sorteados:<br/>
      {/* <br /> */}
      {/*sorteador.map((sort) => {return(<><b>{sort}</b><br/></>)})*/}
      {sorteados.map((item) => {
        return(
          <>
          <b>{item}</b><br/>
          </>
          )})
        }
    </div>
  );
}
