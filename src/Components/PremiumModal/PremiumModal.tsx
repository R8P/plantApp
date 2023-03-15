import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {HEIGHT, WIDTH, responsive} from '../../Constants/Helpers';
import {Colors} from '../../Constants/Colors';
import CustomButton from '../CustomButton/CustomButton';
import {useAppDispatch} from '../../Redux/store/store';
import {setPremiumModal} from '../../Redux/reducers/reducers';

const PremiumModal = () => {
  const [activePackageId, setActivePackageId] = useState(1);
  const dispatch = useAppDispatch();

  const changeActivePackage = (index: number) => {
    setActivePackageId(index);
  };
  return (
    <Modal
      backdropColor={'#000'}
      isVisible={true}
      style={styles.modalStyle}
      useNativeDriver={true}
      animationOut={'slideInDown'}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Assets/premium.png')}
          resizeMode="contain"
          style={styles.bgImage}>
          <View style={styles.imgArea}>
            <TouchableOpacity
              onPress={() => {
                dispatch(setPremiumModal());
              }}
              style={styles.close}>
              <Image
                style={styles.closeIcon}
                source={require('../../Assets/Close.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.titleBold}>PlantApp</Text>
              <Text style={styles.title}>Premium</Text>
            </View>
            <Text style={styles.subTitle}>Access All Features</Text>
          </View>
          <View style={styles.featureArea}>
            <ScrollView horizontal={true} style={styles.features}>
              <View style={styles.featureBox}>
                <Image
                  style={styles.icon}
                  source={require('../../Assets/feature1.png')}
                />
                <Text style={styles.featureTextBold}>Unlimited</Text>
                <Text style={styles.featureText}>Plant Identify</Text>
              </View>
              <View style={styles.featureBox}>
                <Image
                  style={styles.icon}
                  source={require('../../Assets/feature1.png')}
                />
                <Text style={styles.featureTextBold}>Unlimited</Text>
                <Text style={styles.featureText}>Plant Identify</Text>
              </View>
              <View style={styles.featureBox}>
                <Image
                  style={styles.icon}
                  source={require('../../Assets/feature1.png')}
                />
                <Text style={styles.featureTextBold}>Unlimited</Text>
                <Text style={styles.featureText}>Plant Identify</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.packagesArea}>
            <TouchableOpacity
              style={[
                styles.packageRow,
                activePackageId === 0 && styles.selectedColor,
              ]}
              onPress={() => {
                changeActivePackage(0);
              }}>
              <Image
                style={styles.selectIcon}
                source={
                  activePackageId === 0
                    ? require('../../Assets/active.png')
                    : require('../../Assets/inactive.png')
                }
              />
              <View style={styles.packageTextRow}>
                <Text style={styles.packageName}>1 Month</Text>
                <Text style={styles.packagePrice}>
                  $2.99/month, auto renewable
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.packageRow,
                activePackageId === 1 && styles.selectedColor,
              ]}
              onPress={() => {
                changeActivePackage(1);
              }}>
              <Image
                style={styles.selectIcon}
                source={
                  activePackageId === 1
                    ? require('../../Assets/active.png')
                    : require('../../Assets/inactive.png')
                }
              />
              <View style={styles.packageTextRow}>
                <Text style={styles.packageName}>1 Year</Text>
                <Text style={styles.packagePrice}>
                  First 3 days free, then $529,99/year
                </Text>
              </View>
              <View style={styles.cornerBadge}>
                <Text style={styles.badgeText}>Save 50%</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomArea}>
            <CustomButton
              onPress={() => {}}
              text="Try free for 3 days"
              textColor={Colors.white}
              fontSize={20}
              borderRadius={14}
              bgColor={Colors.green}
              width={WIDTH * 0.9}
              height={52}
            />
            <Text style={styles.bottomContentText}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
            <View style={styles.bottomRow}>
              <TouchableOpacity>
                <Text style={styles.bottomText}>Terms</Text>
              </TouchableOpacity>
              <View style={styles.dotBox}>
                <Text style={styles.dot}>.</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.bottomText}>Privacy</Text>
              </TouchableOpacity>
              <View style={styles.dotBox}>
                <Text style={styles.dot}>.</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.bottomText}>Restore</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

export default PremiumModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
  },
  container: {
    position: 'absolute',
    zIndex: 99,
    flex: 1,
    flexDirection: 'column',
    width: WIDTH,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bgImage: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT,
  },
  imgArea: {
    flex: 0.4,
  },
  close: {
    position: 'absolute',
    zIndex: 999,
    right: 20,
    top: 50,
  },
  closeIcon: {
    resizeMode: 'contain',
    width: responsive(24),
    height: responsive(24),
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: responsive(24),
  },
  featureArea: {
    flex: 0.2,
    // backgroundColor:"green",
    paddingLeft: responsive(24),
  },
  packagesArea: {
    flex: 0.22,
    // backgroundColor:"red",
    paddingHorizontal: responsive(24),
  },
  bottomArea: {
    flex: 0.2,
    paddingHorizontal: responsive(24),
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBold: {
    fontSize: responsive(27),
    color: Colors.white,
    fontWeight: 'bold',
    marginRight: responsive(6),
  },
  title: {
    fontSize: responsive(27),
    color: Colors.white,
  },
  subTitle: {
    fontSize: responsive(17),
    color: Colors.smokeWhite,
  },
  features: {},
  featureBox: {
    padding: responsive(16),
    backgroundColor: Colors.darkGreen,
    borderRadius: 14,
    width: responsive(156),
    height: responsive(130),
    marginRight: responsive(8),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 0,
    },
  },
  icon: {
    resizeMode: 'contain',
    width: responsive(36),
    height: responsive(36),
  },
  featureTextBold: {
    marginTop: responsive(10),
    marginBottom: responsive(4),
    fontSize: responsive(24),
    fontWeight: 'bold',
    color: Colors.white,
  },
  featureText: {
    fontSize: responsive(13),
    color: Colors.smokeWhite,
  },
  bottomRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'baseline',
  },
  bottomContentText: {
    marginTop: responsive(10),
    fontSize: responsive(9),
    textAlign: 'center',
    marginBottom: responsive(14),
    color: Colors.gray,
  },
  bottomText: {
    fontSize: responsive(10),
    color: Colors.gray,
    fontWeight: '500',
  },
  dotBox: {
    justifyContent: 'center',
    marginHorizontal: responsive(5),
  },
  dot: {
    color: Colors.gray,
    fontSize: responsive(20),
  },
  packageRow: {
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.grayWhite,
    flexDirection: 'row',
    alignItems: 'center',
    height: responsive(65),
    paddingHorizontal: responsive(15),
    marginBottom: responsive(16),
  },
  selectedColor: {
    borderWidth: 1.5,
    borderColor: Colors.green,
  },
  selectIcon: {
    resizeMode: 'contain',
    width: responsive(24),
    height: responsive(24),
    marginRight: responsive(16),
  },
  packageTextRow: {
    flexDirection: 'column',
  },
  packageName: {
    fontSize: responsive(16),
    color: Colors.white,
    fontWeight: 'bold',
  },
  packagePrice: {
    fontSize: responsive(12),
    color: Colors.smokeWhite,
  },
  cornerBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.green,
  },
  badgeText: {
    fontSize: responsive(12),
    color: Colors.white,
    fontWeight: 'bold',
  },
});
