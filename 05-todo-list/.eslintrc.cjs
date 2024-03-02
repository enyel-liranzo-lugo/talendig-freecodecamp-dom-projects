module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
                project: null, // Eliminar la referencia al archivo tsconfig.json
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // Eliminar la opción project si no es necesario para otros archivos
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/space-before-function-paren": "off",
    },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ["standard-with-typescript", "plugin:react/recommended"],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//     project: "./tsconfig.json",
//   },
//   plugins: ["react"],
//   rules: {
//     "react/react-in-jsx-scope": "off",
//   },
// };
