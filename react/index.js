// Passo 1: Criar um elemento JSX simples.
/*
    React usa a sintaxe de extensão do JavaScript chamada 
    JSX que o permite escrever HTML diretamente no JavaScript. 
    Isso possui diversos benefícios. Ela permite a você usar 
    todo o poder programático do JavaScript dentro do HTML, 
    e ajuda a manter o seu código legível. Em grande parte, 
    JSX é semelhante ao HTML que você já aprendeu, no entanto 
    existem algumas diferenças chaves que cobriremos durante 
    esses desafios.
*/
const JSX = <h1>Hello JSX!</h1>;

// Passo 2: Criar JSX completo
/*
    Um JSX completo pode ser uma declaração de um aninhamento de
    tags html. Lembre-se que para ser válido, é necessário que
    os elementos estejam aninhados, como abaixo.
*/

const JSX2 = (
    <div>
        <h1>This is a title</h1>
        <p>This is a paragraph.</p>
        <ul>
            <li>this is a item 1</li>
            <li>this is a item 2</li>
            <li>this is a item 3</li>
        </ul>
    </div>  
);
//  Passo 3: Adicionando um comentário em JSX
/*
    JSX tem seu proprio jeito de adicionar um comentário, aqui podemos definir um
    comentário como o seguinte. 
*/

const JSX3 = (
    <div>
        {/* this is a comment in JSX */}
        <h1>This is a title</h1>
        <p>This is a paragraph.</p>
        <ul>
            <li>this is a item 1</li>
            <li>this is a item 2</li>
            <li>this is a item 3</li>
        </ul>
    </div>  
);

// Passo 4: Renderizando elementos HTML para o DOM

/*
        Até agora, você aprendeu que JSX é uma ferramenta conveniente para 
    escrever HTML legível dentro de JavaScript. Com React, podemos renderizar 
    esse JSX diretamente para o DOM HTML usando a API de renderização do 
    React conhecida como ReactDOM.

        ReactDOM oferece um método simples para renderizar elementos React 
    para o DOM que se parece com isso: 
    
    ReactDOM.render(componentToRender, targetNode), 
    
    onde o primeiro argumento é o elemento ou componente que você deseja 
    renderizar, e o segundo argumento é o nó do DOM onde você deseja 
    renderizar o componente.

        O editor de código tem um componente JSX simples. Use o método 
    ReactDOM.render() para renderizar este componente na página. Você pode 
    passar elementos JSX definidos diretamente como o primeiro argumento e 
    usar document.getElementById() para selecionar o nó do DOM onde 
    renderizá-los. Há um div com id='challenge-node' disponível para você usar. 
    Certifique-se de não alterar a constante JSX.
*/
// Uma declaração válida é a seguinte:
const JSX4 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  ReactDOM.render(
    JSX4,
    document.getElementById("challenge-node")
  );

// Passo 5: Definir uma classe html em jsx

/*
        Até agora, pode parecer que HTML e JSX são exatamente os mesmos.

        Uma diferença importante em JSX é que você não pode mais usar a palavra 
    class para definir classes HTML. O motivo disso é porque class é uma 
    palavra reservada em JavaScript. Em vez disso, JSX usa className.

        Na verdade, a convenção de nomeação para todos os atributos HTML e referências 
    de eventos em JSX tornam-se camelCase. Por exemplo, um evento de clique em 
    JSX é onClick, ao invés de onclick. Da mesma forma, onchange se torna onChange. 
    Embora essa seja uma diferença sutil, é importante manter em mente no futuro.
*/
// Um exemplo de declaração de classe é dado abaixo:

const JSX5 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );


