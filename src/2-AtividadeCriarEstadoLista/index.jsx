// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


import { useState } from "react";
export default function Home(){
    const[listaProdutos, setProdutos] = useState([
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

    return (
        <div>
            <h1>Imagination Books!</h1>
        </div>
    );

}
