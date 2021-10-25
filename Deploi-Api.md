## deploi no Servidor = Engix

  - n ultilizamos o `nodemon`em produçao
  - `sucrase` para importar e export, isso é apenas para desenv
    - corrindo: vms fazer o `sucrase` converte os imports para que o
      `node`endenda
  - para corrigir, vms criar outra script e assim criar um biuld para produc

  - `package.json` -> criando um script `biuld`e colando o codigo do sucrase
  sucrase ./srcDir -d ./outDir --transforms typescript,imports
    --      ./scr   -- ./produc  ou  dist
    - apagar o typescript por n ter utilizado ele
    -
    - mandando o `App.js`e `Server.js` para dentro de `src` e corrigindo os
    caminhos

  - codig completo
   "build": "sucrase ./src -d ./dist --transforms imports",
   "start": "node dist/server.js"

    - para rodar toda as alteraçoes
    - npm run build

    - npm start
    para ver se tudo esta rdando certo

    [O-que-esta-acontecendo?]
    - ele entra em todas as pastas do `src` e manda para `dist` a config
    de estartar** **

    - mudando a porta url para o ip do servidor
    - manda o dominio se tiver tbm: lailtonxavier.tk

    [git-hub]
