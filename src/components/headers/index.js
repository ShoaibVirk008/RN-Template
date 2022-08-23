import React from 'react'
import { appStyles, sizes } from '../../services'
import {Icons, Wrapper, Text } from '..'
import { goBack } from '../../navigation/rootNavigation'



export const Primary = ({ onBackPress, title, right, left, showBackArrow }) => {
    return (
        <Wrapper style={[appStyles.headerStyle, { justifyContent: 'center', paddingTop: sizes.statusBarHeight }]}>
            <Wrapper flexDirectionRow >
                <Wrapper isAbsolute style={[appStyles.center, { right: 0, left: 0 }]}>
                    <Text style={[appStyles.headerTitleStyle]}>{title}</Text>
                </Wrapper>
                {
                    left ? left :
                        showBackArrow ?
                            <Icons.Back
                                onPress={onBackPress ?onBackPress : goBack}
                            />
                            :
                            null
                }
                {right ? right : null}
            </Wrapper>
        </Wrapper>
    )
}