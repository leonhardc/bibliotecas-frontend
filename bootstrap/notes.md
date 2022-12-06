# Notas sobre Bootstrap

## Usar design responsivo com contêineres fluidos do Bootstrap

Na seção do HTML5 e CSS do freeCodeCamp nós construímos uma aplicação de Fotos de Gatos. Agora vamos voltar para ela. Dessa vez, nós estilizaremos usando o framework de CSS responsivo popular conhecido como Bootstrap.

O Bootstrap descobrirá a largura da tela e responderá redimensionando os elementos do HTML - daí o nome design responsivo.

Com um design responsivo, não há necessidade de projetar uma versão móvel do seu site. Ele terá uma boa aparência em dispositivos com telas de qualquer largura.

Você pode incluir o Bootstrap em qualquer aplicativo, adicionando o seguinte código ao topo do HTML:

```HTML

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>


```

Neste caso, já o adicionamos para você a esta página por trás dos panos. Note que usar a tag > ou /> para fechar a tag link é aceitável.

## Tornar imagens responsivas a dispositivos móveis

Primeiro, adicione uma nova imagem abaixo da existente. Defina o seu atributo src como https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg.

Seria ótimo se essa imagem pudesse ser exatamente do tamanho da nossa tela do celular.

Felizmente, com o Bootstrap, tudo que precisamos fazer é adicionar a classe img-responsive para a nossa imagem. Faça isso, e a imagem deve encaixar perfeitamente na largura da página.

## Centralizar o texto com Bootstrap

Agora que estamos usando Bootstrap, podemos centralizar nossos elementos de cabeçalho para deixá-los com melhor aparência. Tudo que precisamos fazer é adicionar a classe text-center ao nosso elemento h2.

Lembre-se de que você pode adicionar várias classes ao mesmo elemento separando cada uma delas com um espaço, assim:

```html

    <h2 class="red-text text-center">your text</h2>

```



