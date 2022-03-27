import React from "react";
import { Plural, plural } from "@lingui/macro";

export const JSXPlurals: React.FC = () => {

   // English rules: https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html#en
   // French rules: https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html#fr
   const amountList = [ 0, 1, 2, 5, 100 ]

   const jsMacrosExample = (amount: number) => plural(amount, {
      one: "You got {amount} item (one)",
      many: 'You got {amount} items (many)',
      other: 'You got {amount} items (other)'
   })

   return (
     <>
        {amountList.map((amount) => {
           return (
             <p>
                <Plural
                  value={amount}
                  one='You got {amount} item (one)'
                  many='You got {amount} items (many)'
                  other='You got {amount} items (other)'
                />
                &nbsp;
             </p>
           )
        })}
     </>
   );
}
