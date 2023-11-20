import React, { Component } from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import Spacer from '../../spacer';
import * as Images from '../../images';
import * as Lines from '../../lines';
import { appImages, appStyles, colors, getAppointmentStatusInfo, responsiveFontSize, responsiveHeight, responsiveWidth, routes, sizes } from '../../../services';
import { FlatList, Pressable } from 'react-native';
import { Icon } from '@rneui/base';
import * as Icons from '../../icons';

export const UsersListVerticalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item, index) => { index.toString() }}
            ItemSeparatorComponent={() => <Lines.Horizontal color={colors.appBgColor2} />}
            renderItem={({ item, index }) => {
                const { isDietitian, firstName, lastName, image, rating, reviewsCount } = item
                const userName = firstName + ' ' + lastName
                return (
                    <Pressable
                        onPress={() => onPressItem(item, index)}
                    >
                        <Wrapper background1 paddingVerticalSmall paddingHorizontalBase flexDirectionRow>
                            <Images.Round
                                source={{ uri: image }}
                            />
                            <Spacer isSmall horizontal />
                            <Wrapper flex={1} justifyContentCenter={!isDietitian} justifyContentSpaceBetween={isDietitian}
                                style={{ paddingVertical: responsiveHeight(0.4) }}
                            >
                                <Wrapper flexDirectionRow>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Text isSmall isBoldFont>{userName}</Text>
                                        {
                                            isDietitian ?
                                                <>
                                                    <Icon
                                                        name='star'
                                                        type='entypo'
                                                        color={colors.appColor2}
                                                        style={[appStyles.marginHorizontalTiny]}
                                                        size={responsiveFontSize(15)}
                                                    />
                                                    <Text isTiny>{rating} ({reviewsCount})</Text>
                                                </>
                                                :
                                                null
                                        }
                                    </Wrapper>
                                </Wrapper>
                                {
                                    isDietitian ?
                                        <Text isTiny isGray>Dietitian</Text>
                                        :
                                        null
                                }

                            </Wrapper>

                        </Wrapper>
                    </Pressable>
                )
            }}
            {...props}
        />
    )
}

export const PostsListHorizontalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() => <Spacer width={sizes.marginHorizontal} />}
            ListHeaderComponent={() => <Spacer width={sizes.marginHorizontal} />}
            ItemSeparatorComponent={() => <Spacer isSmall horizontal />}
            renderItem={({ item, index }) => {
                const userName = 'John Doe'
                const userImage = appImages.user4
                const timeStamp = '21 days ago'
                const title = 'Favorite Healthy Breakfast Ideas'
                const description = "I'm looking for some new breakfast ideas that are both delicious and healthy. Share your go-to morning meals!"
                const topic = '#MealPlans'
                const commentsCount = '12'
                const viewsCount = '422'
                return (
                    <PostPrimary
                        onPress={() => onPressItem(item, index)}
                        containerStyle={[appStyles.marginHorizontalZero, { width: responsiveWidth(80) }]}
                        userImage={userImage}
                        userName={userName}
                        timeStamp={timeStamp}
                        title={title}
                        description={description}
                        topic={topic}
                        commentsCount={commentsCount}
                        viewsCount={viewsCount}
                    />
                )
            }}
            {...props}
        />
    )
}

export const PostsListVerticalPrimary = ({ data, onPressItem, ...props }) => {
    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
            ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
            ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
            renderItem={({ item, index }) => {
                const userName = 'John Doe'
                const userImage = appImages.user4
                const timeStamp = '21 days ago'
                const title = 'Favorite Healthy Breakfast Ideas'
                const description = "I'm looking for some new breakfast ideas that are both delicious and healthy. Share your go-to morning meals!"
                const topic = '#MealPlans'
                const commentsCount = '12'
                const viewsCount = '422'
                return (
                    <PostPrimary
                        onPress={() => onPressItem(item, index)}
                        //containerStyle={[appStyles.marginHorizontalZero, { width: responsiveWidth(70) }]}
                        userImage={userImage}
                        userName={userName}
                        timeStamp={timeStamp}
                        title={title}
                        description={description}
                        topic={topic}
                        commentsCount={commentsCount}
                        viewsCount={viewsCount}
                    />
                )
            }}
            {...props}
        />
    )
}

export const PostPrimary = ({ userImage, userName, timeStamp, title, description, showFullDescription, topic, commentsCount, viewsCount, onPress, containerStyle }) => {
    return (
        <Pressable onPress={onPress}>
            <Wrapper isColored background1 paddingHorizontalSmall paddingVerticalSmall style={containerStyle}>
                <Wrapper flexDirectionRow>
                    <Images.Round
                        source={{ uri: userImage }}
                        size={responsiveWidth(12)}
                    />
                    <Wrapper flex={1} paddingHorizontalSmall marginHorizontalTiny justifyContentSpaceBetween
                        style={{ paddingVertical: responsiveHeight(0.3) }}
                    >
                        <Text isMedium isBoldFont>{userName}</Text>
                        <Text isSmall >{timeStamp}</Text>
                    </Wrapper>
                </Wrapper>
                <Spacer isSmall />
                <Spacer isTiny />
                <Text isMedium isBoldFont numberOfLines={1}>{title}</Text>
                <Spacer isSmall />
                <Text isSmall={!showFullDescription} isMedium={showFullDescription} numberOfLines={!showFullDescription ? 3 : null}>{description}</Text>
                <Spacer isSmall />
                <Text isTiny isSecondaryColor>{topic}</Text>
                <Spacer isSmall />
                <Wrapper flexDirectionRow justifyContentSpaceBetween>
                    <Icons.WithText
                        iconName={'message-circle'}
                        iconType={'feather'}
                        tintColor={colors.appTextColor5}
                        text={`${commentsCount} comments`}
                        textContainerStyle={{ marginLeft: sizes.marginHorizontal / 4 }}
                    />
                    <Icons.WithText
                        iconName={'eye'}
                        iconType={'feather'}
                        tintColor={colors.appTextColor5}
                        text={`${viewsCount} views`}
                        textContainerStyle={{ marginLeft: sizes.marginHorizontal / 4 }}
                    />
                </Wrapper>
            </Wrapper>
        </Pressable>
    )
}


export const ChatMessagesListVertical = ({ data }) => {
    return (
        <>
            {data.map((item, index) => {
                const { user, message, created_at } = item;
                const is_my_message = user?.id === users[4]?.id;
                return (
                    <Wrapper marginVerticalSmall style={[]}>
                        <Wrapper
                            marginHorizontalSmall
                            style={{
                                flexDirection: !is_my_message ? "row" : "row-reverse",
                            }}
                        >
                            <Wrapper
                                //flex={7}
                                isColored
                                //paddingHorizontalSmall
                                paddingVerticalSmall
                                marginHorizontalZero
                                style={[
                                    {
                                        borderRadius: 100,
                                    },
                                    !is_my_message
                                        ? {
                                            //borderBottomLeftRadius: 0,
                                            backgroundColor: colors.appBgColor1,
                                        }
                                        : {
                                            //borderBottomRightRadius: 0,
                                            backgroundColor: colors.appColor1,
                                        },
                                ]}
                            >
                                <Text
                                    isRegular
                                    //isMediumFont
                                    isPrimaryColor={!is_my_message}
                                    isWhite={is_my_message}
                                    style={[!is_my_message ? {} : {}]}
                                >
                                    {message}
                                </Text>
                            </Wrapper>
                        </Wrapper>
                        <Spacer isTiny />
                        <Wrapper marginHorizontalMedium alignItemsFlexEnd={is_my_message}>
                            <Text isTiny  >
                                {created_at}
                            </Text>
                        </Wrapper>
                    </Wrapper>
                );
            })}
        </>
    );
};