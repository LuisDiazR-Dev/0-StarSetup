# Lista de Configuraciones iniciales en VScode para Desarrollo Web, P.E.R.N Stack en Win10 - Oct-2026

## Software

* VsCode
* Git
  * Preferencias para instalación:
    1- seleccionar Vim como editor
    2- default branch main
    3- git pull default "merge"

  * Personalizar para limpiar consola en C:\Program Files\Git\etc\profile.d\
  * archivo git-prompt.sh -> abrir con Vscode editar y guardar como admin.
  agregar un # al inicio "comenta" las lineas y limpia la ruta en el bash terminal

  * #PS1="$PS1"'\[\033[32m\]'      # change to green
  * #PS1="$PS1"'\u@\h '            # user@host<space>
  * PS1="$PS1"'\[\033[31m\]'       # NickName red
  * PS1="$PS1"'NickName '          # custom name
  * #PS1="$PS1"'\[\033[35m\]'       # change to purple
  * #PS1="$PS1"'$MSYSTEM '          # show MSYSTEM
  * PS1="$PS1"'\[\033[33m\]'       # change to brownish yellow
  * PS1="$PS1"'\w'                 # current working directory

  * Conectar con GitHub para poder empezar a hacer push. iniciar git bash y ejecutar
    * git config --global user.email "<tu-correo@ejemplo.com>" (tu correo github)
    * git config --global user.name "Tu Nombre" (tu usuario github)
    * hacer un git push, te pedirá auth con github
    todo listo por acá.

* instalar Node Version Manager
<https://github.com/nvm-windows/nvm/releases>

  * Node.js v12.18.3
    * individual project Dogs
  * Node.js v20.11.0-x64
    * Rick and Morty add
* PostgreSQL 15.6

## Vscode Configuraciones

* Tema: freeCodeCamp Dark Theme   ID->freeCodeCamp.freecodecamp-dark-vscode-theme
* ctrl + shift + p ->Terminal profile default -> para cambiar la terminal predeterminada por la de Git (esta en la lista de configuraciones)
* Copiar el archivo .prettierrc en la raíz del proyecto
* Configurar el settings.json de Vs.code:

```json
{
  "workbench.colorTheme": "freeCodeCamp Dark Theme",
  "editor.minimap.enabled": false,
  "editor.cursorBlinking": "expand",
  "editor.cursorWidth": 4,
  "editor.cursorStyle": "line-thin",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorStyleInactive": "underline",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.cursorBlinking": true,
  "editor.linkedEditing": true,
  "editor.cursorSmoothCaretAnimation": "on",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "workbench.sideBar.location": "right",
  "editor.scrollbar.verticalScrollbarSize": 10,
  "editor.overviewRulerBorder": false,
  "editor.matchBrackets": "never",
  "editor.glyphMargin": false,
  "editor.guides.bracketPairs": "active",
  "editor.guides.highlightActiveBracketPair": false,
  "editor.formatOnSave": true,
  "editor.insertSpaces": false,
  "editor.tabSize": 2,
  "bootstrapIntelliSense.version": "Bootstrap v5.3",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "terminal.integrated.env.windows": {},
  "console-ninja.featureSet": "Community",
  "workbench.activityBar.location": "bottom",
  "window.zoomLevel": -2,
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

## Vscode extensiones

### Básicos

* Spanish - Code Spell Checker    -> Esta incluye ingles y en la documentación esta como activar español y quedan ambas activas (corrige errores de TYPO, AHORRA MUCHOS DOLORES DE CABEZA)
* HTML CSS Support.     ID-> ecmel.vscode-html-css
* Live Server.          ID-> ritwickdey.LiveServer
* Better Comments.      ID-> aaron-bond.better-comments // para comentar con colores, util si eres visual.
* Material Ico Theme    ID-> PKief.material-icon-theme
* Markdown all in one.  ID-> yzhang.markdown-all-in-one
* Markdownlint          ID-> DavidAnson.vscode-markdownlint
* freeCodeCamp Dark Theme   ID->freeCodeCamp.freecodecamp-dark-vscode-theme  // tema ligero y cómodo a la vista

### Ver Errores en el código

* Console Ninja         ID->WallabyJs.console-ninja
* Error Lens            ID-> usernamehw.errorlens
* Code Runner           ID->formulahendry.code-runner
* ESLint                ID->dbaeumer.vscode-eslint

### Productividad

* ES7+ React/Redux/React-Native snippets            ID->dsznajder.es7-react-js-snippets // shortcode de componentes
* Bootstrap IntelliSense ID->hossaini.bootstrap-intellisense // ayuda para para sintaxis Bootstrap
* Path Intellisense     Id-> christian-kohler.path-intellisense
* Tailwind CSS IntelliSense   ->bradlc.vscode-tailwindcss

### Control de versiones

* git Graph   ID->mhutchie.git-graph
* GitLens     ID->eamodio.gitlens

### API REST

* Thunder Client
  