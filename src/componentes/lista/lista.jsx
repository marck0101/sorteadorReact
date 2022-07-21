import React, { useEffect, useState } from "react";

export default function Lista() {
  const [item, setItem] = useState([]);
  const [valorAdicionado, setValorAdicionado] = useState([]);
  const [lista, setLista] = useState([]);
  const [adquiridos, setadAquiridos] = useState([]);

  function handleChangeValue(valor) {
    // console.log("valor ->", valor);
    setItem(valor); // item recebe o id do input
  }

  function handleInsertValue() {
    // se o item for diferente de vazio
    if (item !== "") {
      // e se o valorAdicionado for maior que 0
      if (valorAdicionado.length > 0) {
        //vai ser adicionado mais um item no array valorAdicionado
        setValorAdicionado([...valorAdicionado, item]); //descontroi array e adiciona um novo item
        //senão vai receber apenas um item
      } else {
        setValorAdicionado([item]); //valor adicionado recebe item
      }
    }
  }

  function resetLista() {
    setValorAdicionado(valorAdicionado); //setValorAdicionado vai receber (valorAdicionado)
    setValorAdicionado([]); //setValorAdicionado vai teceber []
  }

  useEffect(() => {
    setLista(valorAdicionado); //aqui está dizendo para lista que vai receber os valores de (valorAdicionado)
  }, [valorAdicionado]); // toda vez que [valorAdicionado] sofrer um evento

  useEffect(() => {
    // console.log("valorAdicionado->", valorAdicionado);
  }, [valorAdicionado]); // monitorando valorAdicionado e adjustando assim que é atualizado variavel

  useEffect(() => {
    // console.log("lista?", lista);
  }, [lista]); //Aqui fica atualizando a const lista toda vez que sofre alteração

function produtosAdquiridos(){
    if(item === item){
        alert("Esse item já existe na lista de comprados")
    }else{
        alert("item adicionado com sucesso")
    }
}

  return (
    <div>
      <input
        id="valor" //o input precisa de um id para alimentar aluma var
        onChange={(e) => {
          // o onChange chama um evento toda vez que um objeto sofrer alteração
          handleChangeValue(e.target.value); // target aponta onde vai sofrer alteração .value põem o valor
        }}
        value={item} // item é a const criada para receber o input de id="valor"
      />
      <button
        id="botao"
        onClick={(e) => {
          // o botão vai chamar um evento, uma função
          handleInsertValue(); // função para adicionar mais um valor no array
        }}
      >
        OK
      </button>
      <br />
      Lista: <br />
      {lista.map((list) => {
        // todos os itens, o array de lista é mapeado
        return (
          // precisa retornar algum valor
          <>
            {list} <br /> {/* vai retornar todos valores adicionados */}
          </>
        );
      })}
      {/* {item} */}
      {/*O item é a varialvel que alimenta valorAdicionado, então como ele está sendo monitorado, ele vai apresentar em tempo real na tela o que está sendo digitado */}
    </div>
  );
}
