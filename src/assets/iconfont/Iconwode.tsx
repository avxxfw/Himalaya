/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconwode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.488 64c141.376 0 256 114.624 256 256 0 89.6-46.037333 168.469333-115.754667 214.186667A449.514667 449.514667 0 0 1 912.64 758.4c13.290667 26.282667 24.618667 63.936 33.962667 112.938667A74.666667 74.666667 0 0 1 873.28 960H150.72a74.666667 74.666667 0 0 1-73.365333-88.661333c9.344-48.96 20.672-86.592 33.92-112.853334A449.728 449.728 0 0 1 371.605333 534.4 255.68 255.68 0 0 1 255.488 320c0-141.376 114.602667-256 256-256zM512 576c-146.773333 0-278.656 82.773333-343.573333 211.328-10.176 20.117333-19.882667 52.394667-28.202667 96a10.666667 10.666667 0 0 0 10.474667 12.672h722.581333a10.666667 10.666667 0 0 0 10.496-12.672c-8.341333-43.626667-18.069333-75.946667-28.224-96.064A384.533333 384.533333 0 0 0 512 576z m-0.512-448a192 192 0 1 0 0 384 192 192 0 0 0 0-384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwode.defaultProps = {
  size: 18,
};

Iconwode = React.memo ? React.memo(Iconwode) : Iconwode;

export default Iconwode;
