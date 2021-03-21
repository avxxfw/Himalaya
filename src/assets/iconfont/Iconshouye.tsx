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

let Iconshouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M721.1 912.7H616.2c-30.8 0-55.8-25-55.8-55.8V732.7c0-14.9-12.2-27.1-27.1-27.1h-47.1c-14.9 0-27.1 12.2-27.1 27.1v124.2c0 30.8-25 55.8-55.8 55.8H301.2c-44.1 0-80-35.9-80-80V552.1h-13c-41.5 0-74.9-21.2-89.5-56.7-15.6-38-5.4-84.1 25.4-114.5l0.6-0.6 0.7-0.6 260.2-225.8c59.3-57.8 154.7-57.5 213.7 0.6l265.8 228.1 0.8 0.8c28.7 28.8 37.4 71.2 22.1 108-15.6 37.5-52.2 60.8-95.7 60.8h-13.8l2.7 279.8c0.2 21.5-8 41.7-23.1 57-15.3 15.3-35.5 23.7-57 23.7z m-104.7-56h104.7c6.5 0 12.5-2.5 17.1-7.1 4.5-4.6 7-10.6 6.9-17.1l-3.3-336.4h70.4c21.1 0 37.1-9.6 44-26.2 5.2-12.4 5.3-31-9.4-46.3l-265.6-228-0.8-0.8c-37.5-37.5-98.6-37.7-136.2-0.5l-0.6 0.6-0.7 0.6-260 225.7c-16.6 16.9-18.2 38.6-12.4 52.9 5.9 14.4 18.9 21.9 37.7 21.9h69v336.6c0 13.2 10.8 24 24 24h101.9v-124c0-45.8 37.3-83.1 83.1-83.1h47.1c45.8 0 83.1 37.3 83.1 83.1v124.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

Iconshouye = React.memo ? React.memo(Iconshouye) : Iconshouye;

export default Iconshouye;
