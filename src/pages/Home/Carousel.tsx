import {ICarousel} from '@/models/home';
import {hp, viewporWidth, wp} from '@/utils/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import SnapCarousel, {
  ParallaxImage,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';

const sliderWidth = viewporWidth;
const sidewidth = wp(90);
const sideHeigth = hp(26);
const itemWidth = sidewidth + wp(2) * 2;

interface IProps {
  data: ICarousel[];
}

//增加分页状态栏
class Carousel extends React.Component<IProps> {
  state = {
    activeSlide: 0,
  };

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index,
    });
  };

  renderItem = (
    {item}: {item: ICarousel},
    parallasProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8} //视差速度
        showSpinner
        spinnerColor="rgba(0, 0, 0, 0.25)" //动画颜色
        {...parallasProps}
      />
    );
  };

  get pagination() {
    const {data} = this.props;
    const {activeSlide} = this.state;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          activeDotIndex={activeSlide}
          dotsLength={data.length}
          inactiveDotScale={0.7} //当前轮播条圆点大小
          inactiveDotOpacity={0.4} //未显示圆点透明度
        />
      </View>
    );
  }

  render() {
    const {data} = this.props;
    return (
      <View>
        <SnapCarousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          onSnapToItem={this.onSnapToItem}
          loop //无限滚动
          autoplay //自动滚动
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: sideHeigth,
    borderRadius: 8, //圆角
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    borderStartColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default Carousel;
