import React from "react";
import { Trans } from "@lingui/macro";

export const Paragraph: React.FC = () => {
   return (
     <p>
        <Trans id='lorem-ipsum'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel est luctus tellus vulputate dapibus.
           Donec feugiat, lacus luctus pretium dictum, arcu leo auctor tortor, vel congue lacus felis ut nisi.
           Suspendisse
           vitae tincidunt quam. Nunc consequat nisl vel dolor accumsan luctus. Aliquam suscipit nisi at malesuada
           finibus.
           Vestibulum vel euismod risus. Pellentesque at laoreet elit. Pellentesque congue scelerisque felis et
           efficitur.
           Morbi accumsan vulputate posuere.
        </Trans>
     </p>
   )
}
