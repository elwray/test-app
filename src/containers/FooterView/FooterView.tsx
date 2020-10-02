import CSS from 'csstype';
import React, {FC} from "react";

const footerStyle: CSS.Properties = {
  backgroundColor: 'gray',
};

export const FooterView: FC = () =>
  <div style={{...footerStyle}}>&nbsp;</div>;