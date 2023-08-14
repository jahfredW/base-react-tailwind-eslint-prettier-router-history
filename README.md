````markdown
# Guide d'installation pour Vite, Tailwind, ESLint, Prettier dans un projet React

## Vite

[Guide de référence](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)

- [ ] **Initialisation du projet**
  ```bash
  npm create vite@latest <nom> -- --template react
  ```
````

- [ ] **Se placer à la racine du dossier créé et installer les paquets**
  ```bash
  cd <nom>
  npm install
  ```

## Tailwind

[Guide de référence](https://flowbite.com/docs/getting-started/react/)

- [ ] **Installer Tailwind**

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```

- [ ] **Initialiser Tailwind**

  ```bash
  npx tailwindcss init -p
  ```

  > Note: Le `-p` signifie d'initialiser Tailwind CSS avec un fichier de configuration PostCSS.

- [ ] **Mise à jour du fichier `tailwind.config.js`**

  ```jsx
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- [ ] **Mise à jour du fichier `src/index.css`**
  ```jsx
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## ESLint

[Guide de référence](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj)

- [ ] **Installer les dépendances nécessaires**

  ```bash
  npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
  ```

- [ ] **Configurer ESLint**

  > À la racine du projet, créez le fichier `.eslintrc` et ajoutez le contenu suivant:

  ```json
  {
    "extends": [
      ...
    ],
    ...
  }
  ```

- [ ] **Créer le fichier `.eslintignore`**

  ```plaintext
  node_modules/
  dist/
  env.d.ts
  ```

- [ ] **Ajout du script ESLint dans `package.json` (si absent)**
  ```json
  "scripts": {
    ...
    "lint": "eslint . --ext .ts,.tsx"
  }
  ```

## Prettier

[Guide de référence](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj)

- [ ] **Configuration de Prettier**

  > Créer le fichier `.prettierrc` à la racine du projet avec le contenu suivant :

  ```json
  {
    ...
  }
  ```

- [ ] **Créer le fichier `.prettierignore`**
  ```plaintext
  node_modules/
  dist/
  ```

## Configuration VSCode

- [ ] **Installer les extensions** :

  - Prettier - Code formatter
  - ESLint

- [ ] **Mise à jour des paramètres de VSCode**

  > Dans `settings.json`, ajouter :

  ```json
  {
    ...
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
  ```

---

Si vous suivez ces étapes, vous devriez avoir un environnement de développement React prêt à l'emploi avec Vite, Tailwind, ESLint, et Prettier!

```

```
