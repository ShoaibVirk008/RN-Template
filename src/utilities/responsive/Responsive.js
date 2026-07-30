import { Dimensions, PixelRatio } from 'react-native';

const window = Dimensions.get('window');

export const responsiveWidth = (percentage) => {
  return (percentage * window.width) / 100;
};

export const responsiveHeight = (percentage) => {
  return (percentage * window.height) / 100;
};

export const responsiveFontSize = (percentage) => {
  const scaleFactor = Math.min(window.width / 375, window.height / 667); // Use any reference values you prefer
  const adjustedSize = Math.round(percentage * scaleFactor);
  return PixelRatio.roundToNearestPixel(adjustedSize);
};
