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

