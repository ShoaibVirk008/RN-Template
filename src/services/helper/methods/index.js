import { UIManager, LayoutAnimation, Platform } from "react-native";
import { appointmentStatuses, orderStatuses, rolesTypes } from "../data";
// import firestore from '@react-native-firebase/firestore'

// import { faker } from '@faker-js/faker'
import { colors } from "../../utilities";
import store from "../../../store";
export const handleAnimation = () => {
    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}

export const checkExpiry = () => {
    var d1 = Date.parse("2012-11-01");
    var d2 = Date.parse("2012-11-04");
    var expiryDate = Date.parse("2020-12-18");
    var currentDate = Date.now()
    console.log(expiryDate > currentDate)
    if (expiryDate < currentDate) {
        return true
    } else {
        return false
    }
}

export const compareDate = () => {
    var date1 = new Date('December 25, 2017 01:30:00');
    var date2 = new Date('June 18, 2016 02:30:00');
    console.log(date1.getTime() > date2.getTime())
    //best to use .getTime() to compare dates
    //if (date1.getTime() === date2.getTime()) {
    //same date
    //}

    if (date1.getTime() > date2.getTime()) {
        return true
    } else {
        return false
    }
}



//validations
export const validateEmail = email => {
    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    return re.test(email);
}
export const hasLowerCase = str => {
    return (/[a-z]/.test(str));
}
export const hasUpperCase = str => {
    return (/[A-Z]/.test(str));
}

export const getSelectedRole = role => {
    const isWeightLoss = role === rolesTypes.weight_loss
    const isMaintainWeight = role === rolesTypes.maintain_weight
    const isProfessionalDietitian = role === rolesTypes.professional_dietitian

    return { isWeightLoss, isMaintainWeight, isProfessionalDietitian }
}

export function cmToFeetAndInches(cm) {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}' ${remainingInches}"`;
}

export function kgToPounds(kilograms) {
    const pounds = Math.floor(kilograms * 2.20462);
    return `${pounds}`;
}

// export function generateRandomUsers() {
//     const isDietitian = faker.datatype.boolean();
//     const firstName = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const image = faker.image.avatar();

//     if (isDietitian) {
//         const rating = faker.number.int({ min: 0, max: 5, precision: 0.1 });
//         const reviewsCount = faker.number.int({ min: 1, max: 100 });

//         return {
//             firstName,
//             lastName,
//             image,
//             isDietitian,
//             rating,
//             reviewsCount,
//         };
//     } else {
//         return {
//             firstName,
//             lastName,
//             image,
//             isDietitian,
//         };
//     }
// }

export const getOrderStatus = (status) => {
    const isPending = status === orderStatuses.pending
    const isInProgress = status === orderStatuses.inProgress
    const isCompleted = status === orderStatuses.completed
    const isCanelled = status === orderStatuses.canelled

    return {
        isPending, isInProgress, isCompleted, isCanelled
    }
}


export const getOrderStatusInfo = (status) => {
    const { isPending, isInProgress, isCompleted, isCanelled } = getOrderStatus(status)
    const label =
        isPending ? 'Pending'
            :
            isInProgress ? 'In Progress'
                :
                isCompleted ? 'Completed'
                    :
                    isCanelled ? 'Cancelled'
                        :
                        ''
    const tintColor =
        isPending ? colors.appTextColor4
            :
            isInProgress ? colors.warning
                :
                isCompleted ? colors.success
                    :
                    isCanelled ? colors.error
                        :
                        colors.appColor1

    return {
        label, tintColor
    }
}

export const getAppointmentStatus = (status) => {
    const isPending = status === appointmentStatuses.pending
    const isConfirmed = status === appointmentStatuses.confirmed
    const isCompleted = status === appointmentStatuses.completed
    const isCanelled = status === appointmentStatuses.canelled

    return {
        isPending, isConfirmed, isCompleted, isCanelled
    }
}


export const getAppointmentStatusInfo = (status) => {
    const { isPending, isConfirmed, isCompleted, isCanelled } = getAppointmentStatus(status)

    const { isProfessionalDietitianRole } = getReduxStore()
    const label =
        isPending ? !isProfessionalDietitianRole ? 'Pending' : 'New Request'
            :
            isConfirmed ? 'Confirmed'
                :
                isCompleted ? 'Completed'
                    :
                    isCanelled ? 'Cancelled'
                        :
                        ''
    const tintColor =
        isPending ? colors.warning
            :
            isConfirmed ? colors.appColor2
                :
                isCompleted ? colors.success
                    :
                    isCanelled ? colors.error
                        :
                        colors.appColor1

    return {
        label, tintColor
    }
}

export const getReduxStore = () => {
    const storeState = store.getState()
    const signedInUser = storeState.auth.signedInUser
    return {
        signedInUser,
    }
}

export const getUserRole = (type) => {
    const isMaintainWeightRole = type === rolesTypes.maintain_weight
    const isWeightLossRole = type === rolesTypes.weight_loss
    const isProfessionalDietitianRole = type === rolesTypes.professional_dietitian
    return { isMaintainWeightRole, isWeightLossRole, isProfessionalDietitianRole }
}

// export const getFirestoreDate = () => {
//     return new Date(firestore.Timestamp.now().seconds * 1000)
// }

