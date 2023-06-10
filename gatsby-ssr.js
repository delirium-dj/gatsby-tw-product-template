import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="titillium"
      rel="preload"
      href="fonts/TitilliumWeb-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />,
  ]);
};
