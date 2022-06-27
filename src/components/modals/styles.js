import { StyleSheet } from "react-native";
import { sizes, colors, appStyles } from "../../services";

export const styles = StyleSheet.create({
    professionsCard: {
        //borderColor:colors.appBgColor3,
        marginBottom: sizes.marginBottom
    },
    selectedProfessionsCard: {
        // borderColor:colors.appTextColor1,
        backgroundColor: colors.appBgColor2,
        marginBottom: sizes.marginBottom
    },

    ////SwipableModal
    swipableModalFooter: {
        backgroundColor: colors.appBgColor1,
        borderTopLeftRadius: sizes.cardRadius,
        borderTopRightRadius: sizes.cardRadius,
        paddingTop: sizes.baseMargin,
        ...appStyles.shadowDark
    },
    barContainer: {
        top: sizes.TinyMargin,
        alignSelf: 'center',
    },
    //EnterValueModalPrimaryCard
    enterValueModalPrimaryCard: {
        backgroundColor: colors.appBgColor1,
        borderRadius: sizes.modalRadius,
        padding: sizes.baseMargin,
        marginHorizontal: sizes.marginHorizontal * 2,
        ...appStyles.shadow
    },
})