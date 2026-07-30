import { UIManager, LayoutAnimation, Platform } from "react-native";
import { APPOINTMENT_STATUSES, ORDER_STATUSES, ROLES_TYPES } from "../data/Data";
// import firestore from '@react-native-firebase/firestore'
import {throttle} from 'lodash';
// import { faker } from '@faker-js/faker'
import { APP_COLORS } from "../../utilities";
import store from "../../store";
const configureAnimation = () => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  
  // Throttle the function to prevent excessive calls
  export const handleAnimation = throttle(configureAnimation, 500); // 500ms delay between triggers
  

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
    const isWeightLoss = role === ROLES_TYPES.weight_loss
    const isMaintainWeight = role === ROLES_TYPES.maintain_weight
    const isProfessionalDietitian = role === ROLES_TYPES.professional_dietitian

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
    const isPending = status === ORDER_STATUSES.pending
    const isInProgress = status === ORDER_STATUSES.inProgress
    const isCompleted = status === ORDER_STATUSES.completed
    const isCanelled = status === ORDER_STATUSES.canelled

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
        isPending ? APP_COLORS.appTextColor4
            :
            isInProgress ? APP_COLORS.warning
                :
                isCompleted ? APP_COLORS.success
                    :
                    isCanelled ? APP_COLORS.error
                        :
                        APP_COLORS.appColor1

    return {
        label, tintColor
    }
}

export const getAppointmentStatus = (status) => {
    const isPending = status === APPOINTMENT_STATUSES.pending
    const isConfirmed = status === APPOINTMENT_STATUSES.confirmed
    const isCompleted = status === APPOINTMENT_STATUSES.completed
    const isCanelled = status === APPOINTMENT_STATUSES.canelled

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
        isPending ? APP_COLORS.warning
            :
            isConfirmed ? APP_COLORS.appColor2
                :
                isCompleted ? APP_COLORS.success
                    :
                    isCanelled ? APP_COLORS.error
                        :
                        APP_COLORS.appColor1

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
    const isMaintainWeightRole = type === ROLES_TYPES.maintain_weight
    const isWeightLossRole = type === ROLES_TYPES.weight_loss
    const isProfessionalDietitianRole = type === ROLES_TYPES.professional_dietitian
    return { isMaintainWeightRole, isWeightLossRole, isProfessionalDietitianRole }
}

// export const getFirestoreDate = () => {
//     return new Date(firestore.Timestamp.now().seconds * 1000)
// }

