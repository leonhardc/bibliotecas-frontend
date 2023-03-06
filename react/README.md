#### **Criar um elemento JSX Simples**


React usa a sintaxe de extensão do JavaScript chamada JSX que o permite escrever HTML diretamente no JavaScript. Isso possui diversos benefícios. Ela permite a você usar 
todo o poder programático do JavaScript dentro do HTML, e ajuda a manter o seu código legível. Em grande parte, JSX é semelhante ao HTML que você já aprendeu, no entanto 
existem algumas diferenças chaves que cobriremos durante esses desafios.

```javascript
    const JSX = <h1>Hello JSX!</h1>;
```

#### **Criar um elemento JSX Completo**

Um JSX completo pode ser uma declaração de um aninhamento de tags html. Lembre-se que para ser válido, é necessário que os elementos estejam aninhados, como abaixo.

```javascript
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
```

#### **Adicionar um comentário em JSX**

Um comentário em JSX é definido como abaixo:

```javascript
     {/* this is a comment in JSX */}
```

#### **Definir uma classe html em JSX**

Até agora, pode parecer que HTML e JSX são exatamente os mesmos.

Uma diferença importante em JSX é que você não pode mais usar a palavra class para definir classes HTML. O motivo disso é porque class é uma palavra reservada em JavaScript. Em vez disso, JSX usa className.

Na verdade, a convenção de nomeação para todos os atributos HTML e referências de eventos em JSX tornam-se camelCase. Por exemplo, um evento de clique em JSX é onClick, ao invés de onclick. Da mesma forma, onchange se torna onChange. Embora essa seja uma diferença sutil, é importante manter em mente no futuro.

Um exemplo de declaração de classe é dado abaixo:

```javascript
    const JSX5 = (
        <div className="myDiv">
        <h1>Add a class to this div</h1>
        </div>
    );
```

#### **Tags JSX com fechamento automatico**

Tags com fechamento automático em JSX sempre devem ser definidas como o seguinte:

```javascript
    <TagName />
```
#### **Criar um componente funcional sem estado**

Existem duas maneiras de criar um componente React. A primeira maneira é usar uma função JavaScript. Definir um componente dessa forma cria um componente funcional sem estado. O conceito de estado numa aplicação será abordado em desafios posteriores. Por enquanto, pense em um componente sem estado como um que pode receber dados e renderizá-lo, mas não gerencia ou rastreia as alterações desses dados.

Para criar um componente com uma função, você simplesmente escreve uma função 
JavaScript que retorne JSX ou null. Uma coisa importante a notar é que React 
requer que o nome da sua função comece com uma letra maiúscula. Aqui está um 
exemplo de um componente funcional sem estado que atribui uma classe HTML em 
JSX:

```javascript
    const MyComponent = function() {
        return (
            <div>
            <h2>Hi my name is Leonardo</h2>
            </div>
        );
    }
```

#### **Renderizar componentes no DOM**

Podemos renderizar um componente no dom do react de várias maneiras, duas delas são:

**Renderizar componentes funcionais:**

Dado o componente funcional escrito abaixo:

```javascript
    const JSX_component = (
        <div>
            <p>This is a JSX component</p>
        </div>
    );
    
```

Podemos renderizar o componente JSX simples usando a API do react DOM da seguinte maneira:

```javascript
    ReactDOM.render(JSX_component, document.getElementById("id-element"))
```

onde:

 * `JSX_component` é o componente JSX que estamos querendo renderizar;
 * `document.getElementById("id-element")` é o nó do DOM react onde estamos querendo renderizar nosso componente.
        
**Renderizar componentes de classe:**

Suponha que tenhamos o seguinte componente de classe para renderizar-mos:

```javascript
    class TypesOfFood extends React.Component {
        constructor(props) {
        super(props);
        }
        render() {
        return (
            <div>
            <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        );
        }
    };
```
Para renderizá-lo no DOM do react temos que usar .render() da seguinte forma:

```javascript
    ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
```
onde:

* `<TypesOfFood />` é a tag html perdonalizada que criamos para referenciarmos o nosso elemento TypesOfFood
* `document.getElementById("challenge-node")` é o nó onde estamos querendo renderizar nosso componente

#### **Passar props para um componente funcional sem estado**

Os desafios anteriores cobriram muito sobre a criação e composição de elementos JSX, componentes funcionais e componentes de classe de estilo ES6 no React. Com esta base, é hora de olhar outro recurso muito comum em React: props. No React, você pode passar props, ou propriedades, para componentes filhos. Digamos que você tem um componente App que renderiza um componente filho chamado Welcome que é um componente funcional sem estado. Você pode passar a Welcome uma propriedade user escrevendo:

```javascript
    <App>
        <Welcome user='Mark' />
    </App>
```

Você usa atributos HTML personalizados criados por você e suportados por React para serem passados ao componente. Neste caso, a propriedade criada user é passada para o componente Welcome. Uma vez que Welcome é um componente funcional sem estado, ele tem acesso a esse valor assim:]

```javascript
    const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```

É padrão chamar esse valor props e, quando lidar com componentes funcionais sem estado, você basicamente considera isso como um argumento para uma função que retorna JSX. Você pode acessar o valor do argumento no corpo da função. Com componentes de classe, você verá que isto é um pouco diferente.

#### **Passar um array como props**

O último desafio demonstrou como passar informações de um componente pai para um componente filho como propriedades props. Este desafio analisa como matrizes podem ser passadas como props. Para passar um array para um elemento JSX, ele deve ser tratado como JavaScript e encapsulado em chaves.

```javascript
    <ParentComponent>
        <ChildComponent colors={["green", "blue", "red"]} />
    </ParentComponent>
```

O componente filho então tem acesso às propriedades colors do array. Métodos de array como join() podem ser usados ao acessar a propriedade. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` Isto unirá todos os itens do array colors em uma string separada por vírgulas e produzirá: `<p>green, blue, red</p>` Depois, aprenderemos sobre outros métodos comuns de renderizar arrays de dados em React.

#### **Usar props padrão**

React também tem uma opção para definir as propriedades padrão. Você pode atribuir propriedades padrão a um componente como uma propriedade no próprio componente e o React atribui a propriedade padrão se necessário. Isso permite que você especifique qual deve ser um valor da propriedade se nenhum valor for explicitamente fornecido. Por exemplo, se você declarar `MyComponent.defaultProps = { location: 'San Francisco' }`, você definiu uma propriedade de localização definida para a string San Francisco, a menos que você especifique de outra forma. React atribui propriedades padrão se "props" forem indefinidas, mas se você passar `null` como o valor para uma prop, continuará `null`.

#### Sobrescrever props padrão

A habilidade de definir props padrão é um recurso útil em React. A maneira de substituir as props padrão é definindo explicitamente os valores das propriedades para um componente.

```javascript
    const Items = (props) => {
        return 
            <h1>
                Current Quantity of Items in Cart: {props.quantity}
            </h1>
    }

    Items.defaultProps = {
        quantity: 0
    }

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items quantity={10}/> {/* Aqui estamos sobrescrevendo props padrão */}
        }
    };
```

#### **Usar propTypes para definir os props que você espera**

React fornece recursos úteis de checagem de tipos para verificar se os componentes recebem propriedades do tipo correto. Por exemplo, o seu aplicativo faz uma chamada de API para recuperar dados que você espera estar em um array, que é então passado para um componente como uma prop. Você pode definir propTypes no seu componente para exigir que os dados sejam do tipo array. Isso lançará um aviso útil quando os dados forem de qualquer outro tipo.

É considerada uma boa prática definir propTypes quando você sabe o tipo de uma "prop" antes do tempo. Você pode definir uma propriedade propTypes para um componente da mesma forma que você definiu defaultProps. Fazer isso verificará se as "props" de uma determinada chave estão presentes com um determinado tipo. Aqui está um exemplo para exigir o tipo function para uma propriedade chamada handleClick:

```javascript
    MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
```

No exemplo acima, a parte PropTypes.func verifica se handleClick é uma função. Adicionar isRequired diz ao React que handleClick é uma propriedade necessária para esse componente. Você verá um aviso se essa propriedade não for fornecida. Também observe que func representa function. Entre os sete tipos primitivos de JavaScript, function e boolean (escrito como bool) são os únicos dois que usam ortografia incomum. Além dos tipos primitivos, existem outros tipos disponíveis. Por exemplo, você pode verificar que uma prop é um elemento React. Consulte a documentação para ver todas as opções.

```javascript
    const Items = (props) => {
        return 
                <h1>
                    Current Quantity of Items in Cart: {props.quantity}
                </h1>
    };

    {/* Definindo propTypes do componentes Funcional Items */}
    Items.propTypes = {
        quantity: PropTypes.number.isRequired
    }

    Items.defaultProps = {
        quantity: 0
    };

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items />
        }
    };

```

#### **Acessar props usando this.props**

Os últimos desafios cobriram as formas básicas de passar propriedades para componentes filhos. Mas e se o componente filho para o qual você está passando uma propriedade é um componente de classe ES6, em vez de um componente funcional sem estado? O componente da classe ES6 usa uma convenção ligeiramente diferente para acessar as propriedades.

Sempre que você se refere a um componente de classe dentro dele mesmo, você usa a palavra-chave this. Para acessar props dentro de um componente de classe, você adiciona this ao início do código que você usar para acessá-lo. Por exemplo, se um componente de classe ES6 possui uma prop chamada data, você escreve {this.props.data} em JSX.

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* manda props com o valor 'Leonardo' dentro da Tag Walcome */ }
            <Welcome name={'Leonardo'}/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Acessa o valor da props usando this, dentro da tag Welcome */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};
```

#### **Criar um elemento stateful**

Um dos tópicos mais importantes em React é **state**. State consiste em qualquer dado que sua aplicação precisar saber, que pode ser alterado durante o tempo. Você quer que seus aplicativos respondam a mudanças de estado e apresentem uma interface atualizada quando necessário. React oferece uma boa solução para o gerenciamento de estados de aplicações web modernas.

Você pode criar um estado em um componente React ao declarar a propriedade **state** na classe do componente no seu **constructor**. Isso inicializa o componente com **state** quando é criado. A propriedade **state** deve ser definida para um object JavaScript. Declarando, ele se parece com isso:

```javascript
    this.state = {

    }
```

Você precisa acessar o objeto state ao longo da vida do seu componente. Você pode atualizá-lo, renderizá-lo na sua interface do usuário e o passar como props para componentes filhos. O objeto state pode ser tão complexo ou simples quanto você precise. Note que você precisa criar uma classe de componente ao estender React.Component para criar state dessa forma.

#### **Renderizar estado na interface de usuário**

Uma vez que você define o estado inicial de um componente, você pode exibir qualquer parte dele na interface do usuário que é renderizada. Se um componente é stateful, ele sempre terá acesso aos dados no state em seu método render(). Você pode acessar os dados com this.state.

Se você deseja acessar um valor de estado dentro do return do método de renderização, você precisa envolver o valor entre chaves.

state é uma das características mais poderosas dos componentes do React. Ele permite que você rastreie dados importantes no seu aplicativo e renderize uma interface do usuário em resposta a alterações nestes dados. Se os seus dados mudarem, sua interface de usuário será alterada. React usa o que é chamado de um DOM virtual, para acompanhar as mudanças nos bastidores. Quando os dados de state atualiza, ele aciona uma re-renderização dos componentes usando esses dados - incluindo componentes filhos que receberam os dados como uma prop. React atualiza o DOM, mas apenas onde necessário. Isso significa que você não precisa se preocupar em mudar o DOM. Você simplesmente declara como deve ser a interface do usuário.

Note que se você faz um componente stateful, nenhum outro componente está ciente do seu state. O state é completamente encapsulado, ou local para esse componente, a não ser que você passe dados de estado para um componente filho como props. Esta noção de state encapsulado é muito importante porque permite que você escreva uma certa lógica, depois, tenha essa lógica contida e isolada num só lugar no seu código.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Renderizando state */ }
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

#### Renderizar estado na interface de usuário de outra forma

Há outra forma de acessar o state em um componente. No método render(), antes da instrução return, você pode escrever JavaScript diretamente. Por exemplo, você poderia declarar funções, acessar dados de state ou props, executar computações nesses dados, entre outras coisas. Em seguida, você pode atribuir quaisquer dados para variáveis, que você tem acesso na instrução return.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // capturando o valor de name em state
    const name = this.state.name
    return (
      <div>
        { /* Usando a variável name e não this.state.name */ }
        <h1>{name}</h1>
      </div>
    );
  }
};
```

#### **Definir estado com this.setState**

Os desafios anteriores abordaram o state dos componentes e como inicializar state no constructor. Há também uma maneira de alterar o state do componente. React fornece um método para atualizar o componente state chamado setState. Você chama o método setState dentro da sua classe de componente assim: this.setState(), passando como parâmetro um objeto com pares de valor chave. As chaves são suas propriedades do estado e os valores são dados do estado atualizados. Por exemplo, se armazenássemos um username em state e quiséssemos atualizá-lo, ficaria assim:

```javascript
    this.setState({
        username: 'Lewis'
    });
```

React espera que você nunca modifique o state diretamente, em vez disso sempre use this.setState() quando as mudanças de estado ocorrerem. Além disso, você deve notar que React pode agrupar várias atualizações de estado para melhorar o desempenho. Isso significa que atualizações de estado através do método setState podem ser assíncronas. Existe uma sintaxe alternativa para o método setState que fornece uma forma de contornar esse problema. Isso raramente é necessário, mas é bom ter isso em mente! Consulte nosso artigo sobre React para saber mais detalhes.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Alterando o state com this.setState
    this.setState(
      {
        name: "React Rocks!"
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

#### **Vincular 'this' para o método de classe**

Além de definir e atualizar state, você também pode definir métodos para o seu componente de classe. Um método de classe tipicamente precisa usar a palavra-chave this para que possa acessar as propriedades na classe (assim como state e props) dentro do escopo do método. Existem algumas maneiras para permitir que os métodos da sua classe acessem this.

Uma forma comum é explicitamente vincular this no construtor para que this torne-se vinculado aos métodos da classe quando o componente é inicializado. Você pode ter percebido que o último desafio usou **this.handleClick = this.handleClick.bind(this)** para o método handleClick no construtor. Em seguida, quando você chama uma função como **this.setState()** dentro do método da classe, this refere-se a classe e não será undefined.

Observação: a palavra-chave this é um dos aspectos mais confusos do JavaScript mas ele exerce uma papel importante em React. Embora o seu comportamento aqui é completamente normal, essas aulas não são o lugar para uma análise profunda de this portanto, por favor consulte outras aulas se o conteúdo acima for confuso!

O editor de código possui um componente com um state que mantém o controle do texto. Também possui um método o qual o permite definir o texto para You clicked!. No entanto, o método não funciona porque está usando a palavra-chave this que é undefined. Corrija isso ao vincular explicitamente this ao método handleClick() no construtor do componente.

Em seguida, adicione um manipulador de clique ao elemento button no método de renderização. Ele deve acionar o método handleClick() quando o botão recebe um evento de clique. Lembre-se de que o método que você passou ao manipulador onClick precisa de chaves porque ele deve ser interpretado diretamente como JavaScript.

Assim que você completar os passos acima você deve ser capaz de clicar o botão e ver You clicked!.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Altere o código abaixo desta linha
    this.handleClick = this.handleClick.bind(this);
    // Altere o código acima desta linha
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Altere o código abaixo desta linha */ }
        <button onClick = {this.handleClick}>Click Me</button>
        { /* Altere o código acima desta linha */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

#### **Usar o state para alternar um elemento**

Às vezes você pode precisar saber o estado anterior ao atualizar o estado. No entanto, atualizações de estado podem ser assíncronas - isso significa que React pode fazer várias chamadas setState() em uma única atualização. Isto significa que você não pode confiar no valor anterior de this.state ou this.props ao calcular o próximo valor. Então, você não deve usar códigos como este:

```javascript
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Ao invés disso, você deve passar a setState uma função que permita acessar state e props. Usando uma função com setState garante que você está trabalhando com os valores mais atuais de state e props. Isto significa que o acima deve ser reescrito como:

```javascript
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

Você também pode usar um formulário sem props se você precisar apenas do state:

```javascript
this.setState(state => ({
  counter: state.counter + 1
}));
```

Observe que você tem que envolver o objeto literalmente entre parênteses, caso contrário, JavaScript pensa que é um bloco de código.

MyComponent tem uma propriedade visibility que foi inicializada como false. O método de renderização retorna uma view se o valor de visibility for verdadeiro e uma view diferente se for falsa.

Atualmente, não há forma de atualizar a propriedade visibility no state do componente. O valor deve alternar entre verdadeiro e falso. Há um manipulador de cliques no botão que aciona um método de classe chamado toggleVisibility(). Passe uma função para setState para definir esse método para que o state de visibility alterne para o valor oposto quando o método for chamado. Se visibility for false, o método define para true, e vice-versa.

Finalmente, clique no botão para ver a renderização condicional do componente com base no seu state.

Dica: não se esqueça de vincular a palavra-chave this ao método no constructor!

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Altere o código abaixo desta linha
    this.toggleVisibility() = this.toggleVisibility().bind(this);
    // Altere o código acima desta linha
  }
  // Altere o código abaixo desta linha
  toggleVisibility() {
    this.setState(
      state => {
        if(state.visibility === true){
          return {visibility: false};
        }
        else {
          return {visibility: true};
        }
      }
    )
  }
  // Altere o código acima desta linha
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```





