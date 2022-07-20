import React from 'react'
import { appStyles, sizes } from '../../services'
import { Wrappers, Texts, Icons } from '..'
import { goBack } from '../../navigation/rootNavigation'



export const Primary = ({ onBackPress, title, right, left, showBackArrow }) => {
    return (
        <Wrappers.Primary style={[appStyles.headerStyle, { justifyContent: 'center', paddingTop: sizes.statusBarHeight }]}>
            <Wrappers.Row >
                <Wrappers.Absolute style={[appStyles.center, { right: 0, left: 0 }]}>
                    <Texts.Medium style={[appStyles.headerTitleStyle]}>{title}</Texts.Medium>
                </Wrappers.Absolute>
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
            </Wrappers.Row>
        </Wrappers.Primary>
    )
}