    <!-- "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "8.8.0",
    "eslint-import-resolver-node": "^0.3.9",
    "eslint-plugin-import": "2.27.5",
    "eslint-plugin-jsx-a11y": "6.7.1",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-react": "7.32.2",
    "eslint-plugin-react-hooks": "4.6.0", -->

{
"name": "material-kit-2-pro-react",
"version": "2.1.0",
"private": true,
"author": "Creative Tim",
"license": "See license in https://www.creative-tim.com/license",
"description": "React version of Material Kit 2 PRO by Creative Tim",
"homepage": "https://demos.creative-tim.com/material-kit-pro-react/#/",
"bugs": {
"url": "https://github.com/creativetimofficial/ct-material-kit-pro-react/issues"
},
"repository": {
"type": "git",
"url": "git+https://github.com/creativetimofficial/ct-material-kit-pro-react.git"
},
"dependencies": {
"@emotion/cache": "11.10.7",
"@emotion/react": "11.10.6",
"@emotion/styled": "11.10.6",
"@mui/icons-material": "5.11.16",
"@mui/material": "5.12.0",
"@mui/styled-engine": "5.12.0",
"@testing-library/dom": "^9.3.4",
"@testing-library/jest-dom": "5.16.5",
"@testing-library/react": "14.0.0",
"@testing-library/user-event": "14.4.3",
"@vercel/speed-insights": "^1.0.9",
"chroma-js": "2.4.2",
"flatpickr": "4.6.13",
"prop-types": "15.8.1",
"react": "18.2.0",
"react-copy-to-clipboard": "5.1.0",
"react-countup": "6.4.2",
"react-dom": "18.2.0",
"react-flatpickr": "3.10.13",
"react-router-dom": "6.10.0",
"react-scripts": "5.0.1",
"react-syntax-highlighter": "15.5.0",
"rellax": "1.12.1",
"swiper": "9.2.0",
"typed.js": "2.0.15",
"uuid": "9.0.0",
"vercel": "^33.5.0",
"web-vitals": "3.3.1"
},
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"lint": "eslint src/\*_/_.js",
"prettify": "prettier --write ."
},
"eslintConfig": {
"extends": "airbnb"
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"devDependencies": {
"prettier": "2.8.7"
}
}

"name": "material-kit-2-pro-react",
"version": "2.1.0",
"private": true,
"author": "Creative Tim",
"license": "See license in https://www.creative-tim.com/license",
"description": "React version of Material Kit 2 PRO by Creative Tim",
"homepage": "https://demos.creative-tim.com/material-kit-pro-react/#/",
"bugs": {
"url": "https://github.com/creativetimofficial/ct-material-kit-pro-react/issues"
},
"repository": {
"type": "git",
"url": "git+https://github.com/creativetimofficial/ct-material-kit-pro-react.git"
},

# GIT

## Comandos basicos

Inicializa um novo repositório Git no diretório atual.

```copiar
git init
```

Clona um repositório remoto para o seu computador.

```copiar
git clone <url>
```

Adiciona um arquivo ao índice de staging para ser comitado.

```copiar
git add <arquivo>
```

Salva as alterações no índice de staging como um novo commit.

```copiar
git commit -m "Mensagem de commit"
```

Envia seus commits locais para o repositório remoto.

```copiar
git push
```

Busca as últimas alterações do repositório remoto e as integra com sua branch local.

```copiar
git pull
```

# comandos de branch

Lista todas as branches existentes no seu repositório.

```copiar
git branch
```

Troca para a branch especificada.

```copiar
git checkout <nome_da_branch>
```

Cria uma nova branch com o nome especificado.

```copiar
git branch <nome_da_branch>
```

Integra as alterações da branch especificada na sua branch atual.

```copiar
git merge <nome_da_branch>
```

Exclui a branch especificada.

```copiar
git delete <nome_da_branch>
```

# Comandos de log

Mostra o histórico de commits do seu repositório.

```copiar
git log
```

Mostra o histórico de commits da branch especificada.

```copiar
git log <nome_da_branch>
```

Mostra o histórico de commits em uma única linha.

```copiar
git log --oneline
```

Filtra o histórico de commits por palavra-chave

```copiar
git log --grep <palavra-chave>
```

# Comandos de diff

Mostra as diferenças entre a sua área de trabalho e o índice de staging.

```copiar
git diff
```

Mostra as diferenças entre o seu último commit e a sua área de trabalho.

```copiar
git diff HEAD
```

Mostra as diferenças entre a branch especificada e a sua branch atual.

```copiar
git diff <nome_da_branch>
```

# Comandos de reset

Move o ponteiro da branch para o commit anterior.

```copiar
git reset HEAD~1
```

Move o ponteiro da branch para o commit anterior e apaga as alterações não comitadas.

```copiar
git reset --hard HEAD~1
```

# Comandos de stash

Salva as alterações não comitadas em um "stash" para que você possa trabalhar em outra branch.

```copiar
git stash
```

Aplica as alterações salvas no "stash" à sua área de trabalho.

```copiar
git stash pop
```

# Comandos de tag

Cria uma tag para um commit específico.

```copiar
git tag <nome_da_tag>
```

Lista todas as tags existentes no seu repositório.

```copiar
git tag -l
```

Faz o checkout da tag especificada.

```copiar
git checkout <nome_da_tag>
```

# Comandos de config

Define o seu nome de usuário global.

```copiar
git config --global user.name "Seu nome"
```

Define o seu email global.

```copiar
git config --global user.email "Seu email"
```

Mostra todas as configurações do Git.

```copiar
git config --list
```

# outros

```copiar
git merge <nome_da_branch>
```

```copiar
gitk
```

```copiar
git help
```
