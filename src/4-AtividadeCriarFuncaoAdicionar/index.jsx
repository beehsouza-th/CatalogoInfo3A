// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

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
            <div key ={produto.id} >
              <p>{produto.nome}</p>
              <p>{produto.preco}</p>
              </div>

          )
        }
        
    </div>

 );
}
