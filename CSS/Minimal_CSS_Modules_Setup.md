# Minimal CSS Modules Setup



Dependencies:

```bash
npm install --save-dev mini-css-extract-plugin css-loader
```



in root: **webpack.config.js** (this config allows for global css files)

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: true,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
      exclude: /\.module\.css$/,
    },
  ],
};

```



this leads to this file naming convention:
`[NamedComponent].module.css`

```css
.testTest {
  background-color: green;
}
```



**Typescript** will need to be set up to deal with CSS Modules as well; a file like `[NamedComponent].module.css.d.ts` is an interim solution:

```
export const testTest: string;
```

Proper solution:
at the bottom in **.tsconfig**

```json
"typeRoots": ["./src/types", "./node_modules/@types"]
```

in src / types / **index.d.ts**

```js
declare module "*.css" {
  const styles: Record<string, string>;
  export default styles;
}
```



### Setup Files

in preapproval landing page

- spacing.css / @import "@mde-ui/theme/spacing.css"
- colors / @import "@mde-ui/theme/colors.css";
- @import "@mde-ui/theme/media-breakpoints.css";
- base.css



 <Image
        alt={bankNameLC}
        src={imgPath}
        {...props}
        resizeMode="contain"
        data-cy={`smava-bank-logo-${bankNameLC}`}
      />



### Naming Convention

```
wizard-step.types.ts
wizard-step.test.tsx
WizardStep.tsx
```