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

let Iconlishi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1060 1024" width={size} height={size} {...rest}>
      <Path
        d="M515.762599 958.870845c246.966761 0 447.17029-200.203529 447.17029-447.170289 0-246.966761-200.203529-447.17029-447.17029-447.17029-246.966761 0-447.17029 200.203529-447.170289 447.17029 0 246.966761 200.203529 447.17029 447.170289 447.170289z m0 63.88147c-282.251292 0-511.051759-228.800468-511.051759-511.051759 0-282.251292 228.800468-511.051759 511.051759-511.05176 282.238815 0 511.051759 228.800468 511.05176 511.05176 0 282.251292-228.800468 511.051759-511.05176 511.051759z m0 0"
        fill={getIconColor(color, 0, '#5A5A5A')}
      />
      <Path
        d="M547.703334 192.293206c0-17.642265-14.29847-31.940735-31.940735-31.940735s-31.940735 14.29847-31.940735 31.940735v343.362901c0 9.195438 3.955161 17.954187 10.85486 24.017935l191.644409 167.688859c13.262891 11.640901 33.462911 10.318355 45.103812-2.93206 11.640901-13.262891 10.318355-33.462911-2.93206-45.103811L547.703334 521.158008V192.293206z m0 0"
        fill={getIconColor(color, 1, '#5A5A5A')}
      />
    </Svg>
  );
};

Iconlishi.defaultProps = {
  size: 18,
};

Iconlishi = React.memo ? React.memo(Iconlishi) : Iconlishi;

export default Iconlishi;
