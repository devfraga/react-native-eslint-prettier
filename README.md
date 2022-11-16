# Configurar ESLint e o Prettier no React Native

Neste exemplo usamos [React Native CLI](https://reactnative.dev/docs/environment-setup#creating-a-new-application).

## Primeiros passos

1. `npm uninstall @react-native-community/eslint-config` - React Native já vem com o Eslint inicial quando criamos o projeto mas vamos remover esse pacote porque criaremos a nossa configuração.

2. `npm uninstall eslint` - Agora removeremos o eslint.

3. Provavelmente já vai vir no seu projeto criado um arquivo com nome de `.eslintrc` você pode Excluir esse arquivo.

4. Você também já vai ter um arquivo chamado `.prettierrc` você pode Excluir esse arquivo.

5. `npm install eslint --save-dev` - Agora vamos instalar o `eslint`

6. `npx eslint --init` - Vamos iniciar nossa configuração. Este comando fará algumas perguntas via CMD. Aqui está uma lista delas e as respostas que precisaremos escolher (`✔` and `❯` os símbolos indicam as respostas selecionadas):

```bash
# pergunta 1:
? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
❯❯ To check syntax, find problems, and enforce code style

# pergunta 2:
? What type of modules does your project use? …
❯❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

# pergunta 3:
? Which framework does your project use? …
❯❯ React
  Vue.js
  None of these

# pergunta 4 (selecione "No", porque nesse projeto nao iremos usar TypeScript):
? Does your project use TypeScript? ❯ No / Yes

# pergunta 5: Aqui vai vir com ambos selecionados você pode apertar ESPAÇO do seu teclado para selecionar ou desmarcar uma opção do cmd.
? Where does your code run? …
  Browser
✔ Node

# question 6:
? How would you like to define a style for your project? …
❯❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

# question 7 (Vamos usar o padrao do Airbnb):
? Which style guide do you want to follow? …
❯❯ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

# question 8:
? What format do you want your config file to be in? …
  JavaScript
  YAML
❯❯ JSON

# O cmd final aqui é onde o eslint perguntará se você deseja instalar todas as dependências necessárias. Selecione "YES" e pressione enter:
Checking peerDependencies of eslint-config-airbnb@latest
The config that you have selected requires the following dependencies:

eslint-plugin-react@^7.21.5 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0

? Would you like to install them now with npm? › No / ❯ Yes
```

Como resultado, você acabará tendo um `.eslintrc.json` arquivo na raiz do seu projeto, que se parece com isso (vamos modificá-lo um pouco mais adiante):

```json
{
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {}
}
```

---

Vamos adicionar as regras **ESLint** recomendadas para usar os hooks. Para isso, vá até seu arquivo `.eslintrc.json` e atualize a seção `extends` deixando assim:

```jsonc
{
  "extends": ["plugin:react/recommended", "airbnb", "airbnb/hooks"]
}
```

7. Agora instale: `npm install --save-dev eslint-plugin-react-native`

- Adicionar suporte para [regras ESLint específicas do React Native](https://www.npmjs.com/package/eslint-plugin-react-native#list-of-supported-rules) . Depois de instalar este pacote, volte ao arquivo `.eslintrc.json` e na parte `plugins` vai deixar dessa forma:

```jsonc
{
  "plugins": ["react", "react-native"]
}
```

8. Crie na raiz do seu projeto um arquivo chamado `.eslintignore` para dizer ao ESLint para ignorar arquivos e diretórios específicos e, em seguida, adicione o seguinte conteúdo neste arquivo:

```bash
node_modules/
```

9. A última etapa aqui é configurar seu editor de código para fazer o lint do código ao salvar o arquivo.

- Vá na aba extenções e procure por [**Eslint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) clique e instale ela.

- Depois vamos ativar no vscode para fazer o fix quando salvar o seu código, no seu VsCode aperte as teclas `Control + Shift + P` e procure **User Settings (JSON)**
- [Clique aqui para acessar o exemplo](https://prnt.sc/Pb77K8PeF2xh)

- Agora vamos adicionar essa configuração:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

**Se ainda ficou com duvida onde adicionar:**

- [Clique aqui para acessar o exemplo](https://prnt.sc/m-bXGXK_CAJ8)

## Instalando e configurando o Prettier

1. Rode: `npm install --save-dev --save-exact prettier`

2. Depois de instalar vá até as extensoes do seu VSCode e procure por [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e instale.

3. Agora rode no cmd novamente: `npm install --save-dev eslint-config-prettier` - usaremos o Prettier para questões de formatação de código e ESLint para questões de qualidade de código, portanto, precisamos desativar todas as regras ESLint que são desnecessárias ou podem entrar em conflito com o Prettier. Depois que o pacote for instalado, precisamos atualizar a `extends`, vá até o arquivo `.eslintrc.json` e deixe dessa forma o `extends`:

```jsonc
{
  "extends": ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier", "prettier/react"]
}
```

3. Agora **crie na raiz do seu projeto** um arquivo chamado `.prettierrc.json` e nele podemos passar algumas configurações:

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "singleQuote": true,
  "semi": true,
  "printWidth": 100,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

- Exemplo configurações falando para usar espaço, quantos espaços ele aplicar ao usar o tab, para usar aspas simples ao invés de aspas duplas.

Pode depois conferir toda documentaçãao aqui: [Prettier Documentation](https://prettier.io/docs/en/options.html).

4. E agora por último para funcionar todo prettier corretamente volte a configuração do seu VsCode, novamente aperte `Control + Shift + P` e procure **User Settings (JSON)**

- [Clique aqui para acessar o exemplo](https://prnt.sc/Pb77K8PeF2xh)

**E adicione mais essa configuração: 👇**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

- [Clique aqui para acessar o exemplo como ficou](https://prnt.sc/ar2Num7hiBlo)

## Finalizando

Como no react-native acabamos criando componentes com final .js podemos adicionar essa regra no eslint para que ele entenda que isso tambem será um componente, vá até seu arquivo `.eslintrc.json` e vá até a parte `rules` e adicone:

```json
    "rules": {
        // permite arquivos .js possuam JSX
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

        // Evitar que o eslint reclame sobre a variável "styles" sendo usada antes de ser definida
        "no-use-before-define": ["error", { "variables": false }],

        // Ajustar para nao passar por erros com react-navigation
        "react/prop-types": ["error", {"ignore": ["navigation", "navigation.navigate"]}]
    }
```

# Fimm woww! 🔥

- Agora seu arquivo `.eslintrc.json` deve estar assim: [Acessar arquivo](https://github.com/devfraga/react-native-eslint-prettier/blob/main/.eslintrc.json)
- Agora seu arquivo `.prettierrc.json` deve estar assim: [Acessar arquivo](https://github.com/devfraga/react-native-eslint-prettier/blob/main/.prettierrc.json)\
  <br>

# Acompanhe nossas redes:

- **[Canal no youtube](https://www.youtube.com/c/Sujeitoprogramador/)**
- **[Instagram](https://www.instagram.com/sujeitoprogramador/)**
- **[Curso completo desenvolvendo aplicativos e sites](https://sujeitoprogramador.com/fabricadeaplicativos/)**
