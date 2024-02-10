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
