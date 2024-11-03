# Lista de Configuraciones iniciales en VScode para Desarrollo Web, P.E.R.N Stack en Win10 - Feb-2024

## Software

* VsCode
* Git
  
  * Personalizar para limpiar consola en C:\Program Files\Git\etc\profile.d\
  * #PS1="$PS1"'\[\033[35m\]' # change to purple.
  * #PS1="$PS1"'$MSYSTEM '    # show MSYSTEM
  * Conectar con GitHub

* Node Version Manager
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
  "cSpell.language": "en,es",
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
  "cSpell.userWords": ["predeploy"],
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

* Better Comments.      ID-> aaron-bond.better-comments
* Bootstrap intekiSense ID->hossaini.bootstrap-intellisense
* Code Runner           ID->formulahendry.code-runner
* Code Spell Checker    ID->streetsidesoftware.code-spell-checker
* Console Ninja         ID->WallabyJs.console-ninja
* Error Lens            ID-> usernamehw.errorlens
* ES7+ React/Redux/React-Native snippets            ID->dsznajder.es7-react-js-snippets
* ESLint                ID->dbaeumer.vscode-eslint
* freeCodeCamp Dark Theme   ID->freeCodeCamp.freecodecamp-dark-vscode-theme
* git Graph   ID->mhutchie.git-graph
* GitLens     ID->eamodio.gitlens
* HTML CSS Support.     ID-> ecmel.vscode-html-css
* Live Server.          ID-> ritwickdey.LiveServer
* Markdown all in one.  ID-> yzhang.markdown-all-in-one
* Markdownlint          ID-> DavidAnson.vscode-markdownlint
* Material Ico Theme    ID-> Kief.material-icon-theme
* Path Intellisense     Id-> christian-kohler.path-intellisense
* Prettier              ID-> esbenp.prettier-vscode
* Spanish - Code Spell Checker    #cSpell:enable/disable
* Tailwind CSS IntelliSense   ->bradlc.vscode-tailwindcss
* Thunder Client
* version lens    ID->pflannery.vscode-versionlens
* Styled-components     ID->styled-components.vscode-styled-components
  