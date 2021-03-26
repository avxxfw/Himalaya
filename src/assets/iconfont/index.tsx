/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconzhengzaiting from './Iconzhengzaiting';
import Iconzaixian from './Iconzaixian';
import Iconmusic from './Iconmusic';
import Iconhuanyipi from './Iconhuanyipi';
import Iconcainixihuan from './Iconcainixihuan';
import Iconjiantou from './Iconjiantou';
import Iconshipin from './Iconshipin';
import Iconlishi from './Iconlishi';
import Iconwode from './Iconwode';
import Iconshouye from './Iconshouye';

export type IconNames = 'iconzhengzaiting' | 'iconzaixian' | 'iconmusic' | 'iconhuanyipi' | 'iconcainixihuan' | 'iconjiantou' | 'iconshipin' | 'iconlishi' | 'iconwode' | 'iconshouye';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconzhengzaiting':
      return <Iconzhengzaiting key="1" {...rest} />;
    case 'iconzaixian':
      return <Iconzaixian key="2" {...rest} />;
    case 'iconmusic':
      return <Iconmusic key="3" {...rest} />;
    case 'iconhuanyipi':
      return <Iconhuanyipi key="4" {...rest} />;
    case 'iconcainixihuan':
      return <Iconcainixihuan key="5" {...rest} />;
    case 'iconjiantou':
      return <Iconjiantou key="6" {...rest} />;
    case 'iconshipin':
      return <Iconshipin key="7" {...rest} />;
    case 'iconlishi':
      return <Iconlishi key="8" {...rest} />;
    case 'iconwode':
      return <Iconwode key="9" {...rest} />;
    case 'iconshouye':
      return <Iconshouye key="10" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
