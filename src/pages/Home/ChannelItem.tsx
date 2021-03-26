import IconFont from '@/assets/iconfont';
import {IChannel} from '@/models/home';
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Touchable from '@/components/Touchable';

interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}

class ChannelItem extends React.Component<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };
  render() {
    const {data} = this.props;
    return (
      <Touchable onPress={this.onPress}>
        <View style={styles.container}>
          <Image source={{uri: data.image}} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {data.title}
            </Text>
            <Text style={styles.remark} numberOfLines={1}>
              {data.remark}
            </Text>
            <View style={styles.bottom}>
              <View style={styles.playedView}>
                <IconFont name="iconmusic" size={14} />
                <Text style={styles.number}>{data.played}</Text>
              </View>
              <View style={styles.playingView}>
                <IconFont name="iconzhengzaiting" size={14} />
                <Text style={styles.number}>{data.playing}</Text>
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#ccc', //阴影（ios）
    shadowOffset: {width: 0, height: 5}, //偏移值
    shadowOpacity: 0.5, //透明度
    shadowRadius: 10, //圆角
    elevation: 5, //投影效果（android）
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#dedede',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
    padding: 5, //内边距
    marginBottom: 5, //外边距
  },
  bottom: {
    flexDirection: 'row',
  },
  playedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});

export default ChannelItem;
