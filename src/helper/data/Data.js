import { APP_IMAGES } from "../../utilities"

export const ROLES_TYPES = {
    weight_loss: 'weight-loss',
    maintain_weight: 'maintain-weight',
    professional_dietitian: 'professional-dietitian',
}

export const USERS = [
    {
        id: 8373,
        name: 'Jenny Wilson',
        image: APP_IMAGES.user1,
        address: 'London',
        friend: true,
    },
    {
        id: 22345,
        name: 'William Shaw',
        image: APP_IMAGES.user2,
        address: 'London',
        friend: true,
    },
    {
        id: 8453,
        name: 'John Thomas',
        image: APP_IMAGES.user3,
        address: 'London',
        friend: true,
    },
    {
        id: 23445,
        name: 'Nilson Meno',
        image: APP_IMAGES.user4,
        address: 'New York',
        friend: true,
    },
    {
        id: 46216,
        name: 'Jackobe Black',
        image: APP_IMAGES.user5,
        address: 'New York',
        friend: true,
    },
]

export const ORDER_STATUSES={
    pending:'pending',
    inProgress:'inProgress',
    completed:'completed',
    canelled:'canelled'
}

export const APPOINTMENT_STATUSES={
    pending:'pending',
    confirmed:'confirmed',
    completed:'completed',
    canelled:'canelled'
}