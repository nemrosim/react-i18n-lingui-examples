import { LinguiConfig } from '@lingui/conf'

const config: Partial<LinguiConfig> = {
    locales: [ "en", "fr" ],
    sourceLocale: "en",
   /*
    Defines location of message catalogs and what files are included when extract is scanning for messages.
    Default:
    ```
    [{
       path: "<rootDir>/locale/{locale}/messages",
       include: ["<rootDir>"],
       exclude: ["node_modules/**"]
    }]
    ```
    */
    catalogs: [ {
        path: "src/locales/{locale}/messages",
        include: [ "src" ]
    } ],
    format: "po"
};

export default config;
