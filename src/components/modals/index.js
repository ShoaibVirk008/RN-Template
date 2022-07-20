import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ViewPropTypes, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, sizes, appStyles } from '../../services';
import { Absolute } from '../wrappers';
import Modal from 'react-native-modal'
import { styles } from './styles';
import { Icons, Lines, Spacers, Texts, Wrappers } from '..';



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
            <Wrappers.Primary flex={1}>
                <Wrappers.Primary flex={headerFlex ? headerFlex : 1.5} />
                <Wrappers.Primary flex={footerFlex ? footerFlex : 8.5} style={[styles.swipableModalFooter]}>
                    {children}
                    <Wrappers.Absolute style={[styles.barContainer]}>
                        <Wrappers.Primary style={[appStyles.center]}>
                            <TouchableOpacity onPress={toggleModal}>
                                <Lines.Horizontal
                                    height={4}
                                    width={width(15)}
                                    style={{ borderRadius: 5 }}
                                    color={colors.appBgColor3}
                                />
                            </TouchableOpacity>
                            <Spacers.Base  />
                            <Texts.TinyTitle>{title}</Texts.TinyTitle>
                        </Wrappers.Primary>
                    </Wrappers.Absolute>
                    <Wrappers.Absolute style={[{ top: sizes.baseMargin * 1.5, left: sizes.marginHorizontal }]}>
                        <Icon
                            name="close"
                        />
                    </Wrappers.Absolute>
                </Wrappers.Primary>
            </Wrappers.Primary>
        </Modal>
    );
}


