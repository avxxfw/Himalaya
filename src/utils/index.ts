import {Dimensions} from 'react-native';

const {width: viewporWidth, height: viewporHeigth} = Dimensions.get('window');

function wp(percentage: number) {
  const value = (percentage * viewporWidth) / 100;
  return Math.round(value);
}

function hp(percentage: number) {
  const value = (percentage * viewporHeigth) / 100;
  return Math.round(value);
}

export {viewporWidth, viewporHeigth, wp, hp};
