import React from 'react'
import { appStyles, sizes } from '../../services'
import { Wrappers,Texts, Icons } from '..'



export const Primary = ({ onBackPress, title, right, left }) => {
    return (
        <Wrappers.Primary style={[appStyles.headerSecondaryStyle, { justifyContent: 'center', paddingTop: sizes.statusBarHeight }]}>
            <Wrappers.Row >
                <Wrappers.Absolute style={[appStyles.center, { right: 0, left: 0 }]}>
                    <Texts.Medium style={[appStyles.headerTitleStyle]}>{title}</Texts.Medium>
                </Wrappers.Absolute>
                {
                    left ? left :
                        onBackPress ?
                            <Icons.Back
                                onPress={onBackPress}
                            />
                            :
                            null
                }
                {right?right:null}
            </Wrappers.Row>
        </Wrappers.Primary>
    )
}