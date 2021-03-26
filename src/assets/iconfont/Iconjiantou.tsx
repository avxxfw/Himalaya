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

let Iconjiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M361.6 19.2L848 507.2 361.6 995.2l-128-126.4 366.4-361.6L225.6 129.6 350.4 8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiantou.defaultProps = {
  size: 18,
};

Iconjiantou = React.memo ? React.memo(Iconjiantou) : Iconjiantou;

export default Iconjiantou;
