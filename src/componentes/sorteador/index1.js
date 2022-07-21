import React, { useState } from "react";

export default function Index() {
  const original = [];
  const sorteador = [];
  const [item, setItem] = useState("");

  function handleInsertValue() {
    if (item !== "") {
      original.push(item);
      console.log(item);
      sorteador.push(item);
      console.log(sorteador);
    }
  }
  return (
    <div>
      <h5>insira um valor</h5>
      <input
        id="valor"
        // o onChange chama um evento toda vez que um objeto sofrer alteração
        onChange={(valor) => {
          valor.preventDefault();
          setItem(valor.target.value);
          //   console.log(valor.target.value);
        }}
        value={item}
      />
      <button
        id="botao"
        onClick={(e) => {
          // preventDefault para nbão atualizar a tela
          e.preventDefault();
          // handleInsertValue regras para listar itens em sorteador e original
          handleInsertValue();
        }}
      >
        OK
      </button>{" "}
      <br></br>
      <ul>{item}</ul>
      {/* {item} */}
      {sorteador.map((sort) => sort)}
    </div>
  );
}
