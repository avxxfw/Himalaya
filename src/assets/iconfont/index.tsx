/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconshipin from './Iconshipin';
import Iconlishi from './Iconlishi';
import Iconwode from './Iconwode';
import Iconshouye from './Iconshouye';

export type IconNames = 'iconshipin' | 'iconlishi' | 'iconwode' | 'iconshouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconshipin':
      return <Iconshipin key="1" {...rest} />;
    case 'iconlishi':
      return <Iconlishi key="2" {...rest} />;
    case 'iconwode':
      return <Iconwode key="3" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
