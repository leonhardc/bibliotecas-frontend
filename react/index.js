
/*
    Passo 1: Criar um elemento JSX simples.

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

/*
    Passo 2: Criar JSX completo

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
/*
    Passo 3: Adicionando um comentário em JSX

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



/*
    Passo 4: Renderizando elementos HTML para o DOM

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

    Uma declaração válida é a seguinte:
*/

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

// 

/*
    Passo 5: Definir uma classe html em jsx

    Até agora, pode parecer que HTML e JSX são exatamente os mesmos.

    Uma diferença importante em JSX é que você não pode mais usar a palavra 
    class para definir classes HTML. O motivo disso é porque class é uma 
    palavra reservada em JavaScript. Em vez disso, JSX usa className.

    Na verdade, a convenção de nomeação para todos os atributos HTML e referências 
    de eventos em JSX tornam-se camelCase. Por exemplo, um evento de clique em 
    JSX é onClick, ao invés de onclick. Da mesma forma, onchange se torna onChange. 
    Embora essa seja uma diferença sutil, é importante manter em mente no futuro.

    Um exemplo de declaração de classe é dado abaixo:
*/
// 

const JSX5 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
);


/*
    Passo 6: Aprender sobre tags jsx com fechamento automatico

    No JSX todas as tags html podem ser escrito como forma de fechamento automatico
    na forma de <tagname />. Porem, nesse caso, não é possivel acrescentar conteudo
    na tag. 
    O que se pode fazer é, em caso de tags que tem conteudo, podemos deixar como html
    padrão <tagname></tagname> e tags sem conteudo ou tipicamente de fechamento auto-
    mático podemos fazer como dito anteriormente <tagname />.
    Veremos posteriormente que tags do dipo <tagname /> como, por exemplo, <div /> po-
    de ser usada para renderizar elementos react. 
*/
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
); 

/*
    Passo 7: Criar um componente funcional sem estado

    Componentes são o núcleo do React. Tudo em React é um componente e aqui você 
    vai aprender como criar um.
    
    Existem duas maneiras de criar um componente React. A primeira maneira é usar 
    uma função JavaScript. Definir um componente dessa forma cria um componente 
    funcional sem estado. O conceito de estado numa aplicação será abordado em 
    desafios posteriores. Por enquanto, pense em um componente sem estado como um 
    que pode receber dados e renderizá-lo, mas não gerencia ou rastreia as alterações 
    desses dados.

    Para criar um componente com uma função, você simplesmente escreve uma função 
    JavaScript que retorne JSX ou null. Uma coisa importante a notar é que React 
    requer que o nome da sua função comece com uma letra maiúscula. Aqui está um 
    exemplo de um componente funcional sem estado que atribui uma classe HTML em 
    JSX:

    const DemoComponent = function() {
        return (
            <div className='customClass' />
        );
    };

    Depois de ser transpilado, o <div> terá uma classe CSS de customClass.

    Como um componente JSX representa HTML, você pode juntar vários componentes 
    para criar uma página HTML mais complexa. Esta é uma das principais vantagens 
    da arquitetura do componente que React provê. Isso permite que você componha 
    sua interface de usuário de vários componentes isolados e separados. Isso torna 
    mais fácil construir e manter interfaces de usuário complexas.

*/

const MyComponent = function() {
  return (
    <div>
      <h2>Hi my name is Leonardo</h2>
    </div>
  );
}

/*
    Passo 7: Criar um componente do react

    A outra forma de definir um componente do React é com a sintaxe class do ES6. 
    No exemplo a seguir, Kitten estende React.Component:

    class Kitten extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <h1>Hi</h1>
            );
        }
    }

    Isso cria a classe ES6 Kitten que estende a classe React.Component. Então a 
    classe Kitten agora possui acesso a diversos recursos úteis do React, como 
    local state e lifecycle hooks. Não se preocupe se você não estiver familiari-
    zado com esses termos ainda, eles serão abordados em detalhes maiores nos 
    desafios futuros. Também note que a classe Kitten possui um constructor defi-
    nido dentro dele que chama super(). O construtor usa super() para chamar o 
    construtor da classe pai, nesse caso React.Component. O construtor é um método 
    especial usado durante a inicialização de objetos que são criados com a 
    palavra-chave class. É uma boa prática chamar o constructor de um componente 
    com super, e passar props para ambos. Isso garante que o componente é iniciali-
    zado corretamente. Por agora, saiba que é padrão que esse código seja incluído. 
    Em breve você verá outros usos para o construtor assim como para props.
*/

class MyComponent2 extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div>
            <h1>Hello React!</h1>
        </div>
        );
    }
  };


  /*
    Passo 8: Criar um componente com composição

    Agora vamos ver como podemos compor vários componentes React juntos. Imagine 
    que você está construindo um aplicativo e criou três componentes: uma Navbar, 
    um Dashboard, e um Footer.

    Para compor esses componentes juntos, você poderia criar um componente App pai 
    que renderiza cada um desses três componentes como filhos. Para renderizar um 
    componente como filho em um componente React, você inclui o nome do componente 
    escrito como uma tag HTML personalizada no JSX. Por exemplo, no método render 
    você pode escrever:

    return (
        <App>
            <Navbar />
            <Dashboard />
            <Footer />
        </App>
    )

    Quando o React encontra uma tag HTML personalizada que faz referência a outro 
    componente (um nome de componente encapsulado em < /> como neste exemplo), ele 
    renderiza a marcação para esse componente na localização da tag. Isso deve 
    ilustrar a relação pai/filho entre o componente App e a Navbar, o Dashboard, 
    e o Footer.

    
  */

    const ChildComponent = () => {
        return (
          <div>
            <p>I am the child</p>
          </div>
        ); 
      };
      
      class ParentComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>I am the parent</h1>
              { /* Altere o código abaixo desta linha */ }
              <ChildComponent />
      
              { /* Altere o código acima desta linha */ }
            </div>
          );
        }
      };


/*
    Passo 9: Usar React para renderizar componentes aninhados

    O último desafio mostrou uma maneira simples de compor dois componentes, 
    mas há muitas maneiras diferentes que você pode compor componentes com React.

    Composição de componente é uma das funcionalidades poderosas do React. Ao 
    trabalhar com React, é importante começar a pensar na sua interface de usuário 
    em termos de componentes como o App exemplo no último desafio. Você divide sua 
    interface de usuário em seus blocos de construção básicos, e essas peças se 
    tornam os componentes. Isso ajuda a separar o código responsável pela inter-
    face do usuário do código responsável por lidar com a lógica da sua aplicação. 
    Pode simplificar grandemente o desenvolvimento e a manutenção de projetos 
    complexos.
*/

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Altere o código abaixo desta linha */ }
        <TypesOfFruit />
        { /* Altere o código acima desta linha */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Altere o código abaixo desta linha */ }
          <Fruits />
          { /* Altere o código acima desta linha */ }
        </div>
      );
    }
  };

  /*
    Passo 10: Compor componentes do react

    Enquanto os desafios continuam a usar composições mais complexas com componentes 
    React e JSX, há um ponto importante a se notar. Renderizar componentes de classe 
    de estilo ES6 dentro de outros componentes não é diferente de renderizar componen-
    tes simples que você usou nos últimos desafios. Você pode renderizar elementos JSX, 
    componentes funcionais sem estado e componentes de classe ES6 dentro de outros 
    componentes.
  */


    class Fruits extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h2>Fruits:</h2>
              { /* Altere o código abaixo desta linha */ }
              <NonCitrus />
              <Citrus />
              { /* Altere o código acima desta linha */ }
            </div>
          );
        }
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
           super(props);
        }
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Altere o código abaixo desta linha */ }
                <Fruits />
              { /* Altere o código acima desta linha */ }
              <Vegetables />
            </div>
          );
        }
      };



