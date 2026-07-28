import arrow_left from '../../../assets/svgs/arrow-left.svg'
import logo_art_gray from '../../../assets/svgs/logo-art-gray.svg'
import logo_white from '../../../assets/svgs/logo-white.svg'
import logo from '../../../assets/svgs/logo.svg'

const APP_SVGS = {
    arrow_left,
    logo_art_gray,
    logo_white,
    logo
}

// leave off @2x/@3x
const APP_IMAGES = {
    user1: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    user2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
    user3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwMIGTutu1jpkhgNCLM-Rd2gz3d0MRSXuPw&usqp=CAU',
    user4: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    user5: 'https://i.pinimg.com/474x/c2/76/05/c2760595530e6633ae778a60de74f127.jpg',
    noUser: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',

    materCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png',
    visaCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
}

const APP_ICONS = {
    security: require('../../../assets/icons/security.png')
}

const APP_FONTS = {
    // appTextLight: 'Roboto-Light',
    // appTextRegular: 'Roboto-Regular',
    // appTextMedium: 'Roboto-Medium',
    // appTextBold: 'Roboto-Bold',
    appTextLight: 'Montserrat-Light',
    appTextRegular: 'Montserrat-Regular',
    appTextMedium: 'Montserrat-Medium',
    appTextBold: 'Montserrat-Bold',
  }

export { APP_IMAGES, APP_ICONS, APP_SVGS, APP_FONTS }
