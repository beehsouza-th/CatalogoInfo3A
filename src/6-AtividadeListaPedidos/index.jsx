// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([
      {
        id: 1, 
        nome:"Fogo & Sangue",
        preco: "54,99"
    },

    {
        id: 2, 
        nome: "A Guerra dos Tronos", 
        preco: "68,99"
    },

    {
        id: 3, 
        nome:" A Casa do Dragão", 
        preco: "79,99"
    }
    ]);

 const [listaPedidos, setlistaPedidos] = useState ([]);
 const adicionarItemPedidos = (objeto) =>{
    setlistaPedidos([...listaPedidos,objeto]);
    }



 return (
    <div>
        <h1>Imagination Books!</h1>

        {
          listaProdutos.map((produto) =>
            <div key = {produto.id} >
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              <button onClick = {()=> adicionarItemPedidos(produto)}>Selecionar</button>
              </div>

          )
        }
         {
            listaPedidos.map((produto)=>
            <div key = {produto.id}>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                </div>

            )
         }
    </div>

 );
}
