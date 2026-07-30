import { StyleSheet } from "react-native";
import { APP_SIZES, APP_COLORS, APP_STYLES } from "../../utilities";

export const styles = StyleSheet.create({
    professionsCard: {
        //borderColor:colors.appBgColor3,
        marginBottom: APP_SIZES.marginBottom
    },
    selectedProfessionsCard: {
        // borderColor:colors.appTextColor1,
        backgroundColor: APP_COLORS.appBgColor2,
        marginBottom: APP_SIZES.marginBottom
    },

    ////SwipableModal
    swipableModalFooter: {
        backgroundColor: APP_COLORS.appBgColor1,
        borderTopLeftRadius: APP_SIZES.cardRadius,
        borderTopRightRadius: APP_SIZES.cardRadius,
        paddingTop: APP_SIZES.baseMargin,
        ...APP_STYLES.shadowDark
    },
    barContainer: {
        top: APP_SIZES.TinyMargin,
        alignSelf: 'center',
    },
    //EnterValueModalPrimaryCard
    enterValueModalPrimaryCard: {
        backgroundColor: APP_COLORS.appBgColor1,
        borderRadius: APP_SIZES.modalRadius,
        padding: APP_SIZES.baseMargin,
        marginHorizontal: APP_SIZES.marginHorizontal * 2,
        ...APP_STYLES.shadow
    },
})