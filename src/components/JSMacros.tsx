import React from "react";
import { t } from "@lingui/macro";

export const JSMacrosExample: React.FC = () => {

   const getSomeValue = () => {
      return 25
   }

   const priceForProduct = getSomeValue();

   const message = t({
      id: 'no-sense-message',
      comment: 'This message in an example without any context',
      message: `A message that makes no sense. Value: ${priceForProduct}`
   })

   return (<>{message}</>)
}
