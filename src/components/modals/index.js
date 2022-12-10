import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList } from 'react-native'
import { Icon } from '@rneui/base';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles } from '../../services';
import Modal from 'react-native-modal'
import { styles } from './styles';
import * as Lines from '../lines';
import Wrapper from '../wrapper';
import Text from '../text';
import * as  Spacer from '../spacer';


export const Swipable = ({ children, title, isVisible, toggleModal, footerFlex, headerFlex }) => {
    return (
        <Modal
            isVisible={isVisible}
            swipeDirection="down"
            onSwipeComplete={toggleModal}
            style={{ margin: 0 }}
            // backdropOpacity={0}
            onBackdropPress={toggleModal}
        >
            <Wrapper flex={1}>
                <Wrapper flex={headerFlex ? headerFlex : 1.5} />
                <Wrapper flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
                    {children}
                    <Wrapper style={[styles.barContainer]}>
                        <Wrapper style={[appStyles.center]}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Lines.Horizontal
                                    height={4}
                                    width={width(15)}
                                    style={{ borderRadius: 5 }}
                                    color={colors.appBgColor3}
                                />
                            </TouchableOpacity>
                            <Spacer isBasic />
                            <Text isTinyTitle>{title}</Text>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper isAbsolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
                        <Icon
                            name="close"
                        />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Modal>
    );
}


