import React from "react";
import { Trans } from "@lingui/macro";
import { LocaleEnum, useI18nContext } from "../providers";
import { TransRenderProps } from "@lingui/react";

const RenderPropsExample:React.FC<TransRenderProps & { isUppercase: boolean }> = ({ id, message, translation, isUppercase }) => {
   const { locale } = useI18nContext();

   if (!translation || (locale !== LocaleEnum.English && translation === id)) {
      console.error(`MISSING TRANSLATION FOR "${id}". Locale: ${locale}`)
      // Do something with it!
      return null;
   }

   if (isUppercase) {
      return (
        <>{`${(translation as string).toUpperCase()}`}</>
      )
   }

   return (
     <>{message}</>
   )
}

export const JSXMacros: React.FC<{ isUppercase: boolean }> = ({ isUppercase }) => {

   const getSomeValue = () => {
      return 25
   }

   const priceForProduct = getSomeValue();

   return (
     <Trans
       id='no-sense-message'
       comment='This message in an example without any context'
       /*
        NOTE:
        1. will not pass TransRenderProps
        2. You can't use component with render prop - choose
       */
       // component={RenderProps} // NOTE: will not pass TransRenderProps
       render={(props)=>{
          return <RenderPropsExample isUppercase={isUppercase} {...props}/>
       }}

     >A message that makes no sense. Value: {priceForProduct}</Trans>
   )
}


