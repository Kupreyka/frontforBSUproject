const SET_IMAGE_URL = 'profile/SET_IMAGE_URL'
const SET_INFO_PROFILE = 'profile/SET_INFO_PROFILE'
const SET_DATA_IN_PROFILE = 'profile/SET_DATA_IN_PROFILE'
const SET_MESSAGE_DATA = 'profile/SET_MESSAGE_DATA'

const initialState = {
    imgUrl: null,
    firstName: null,
    streetAddress: null,
    phoneNumber: null,
    email: null,
    data: null,
    messageData: []
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_URL:
            return {
                ...state,
                imgUrl: action.imageUrl
            }
        case SET_INFO_PROFILE:
            return {
                ...state,
                data: action.data
            }
        case SET_DATA_IN_PROFILE:
            return {
                ...state,
                firstName: action.firstName,
                streetAddress: action.streetAddress,
                phoneNumber: action.phoneNumber,
                email: action.email,
                userName: action.userName
            }
        case SET_MESSAGE_DATA:
            let stateCopy = {...state}
            let time = new Date();
            let output = String(time.getDate()).padStart(2, '0') + '/' + String(time.getMonth() + 1).padStart(2, '0') + '/' + time.getFullYear();
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(
                {name: action.name, phone: action.phone, message: action.message, time: output}
            );
            return stateCopy;
        default:
            return state
    }
}

export const setImageUrl = (imageUrl, firstName) => ({type: SET_IMAGE_URL, imageUrl})
export const setProfileData = (data) => ({type: SET_INFO_PROFILE, data})
export const setDataInProfile = (firstName, streetAddress, phoneNumber, email, userName) => ({
    type: SET_DATA_IN_PROFILE,
    firstName,
    streetAddress,
    phoneNumber,
    email,
    userName
})
export const setMessageData = (name, phone, message) => ({type: SET_MESSAGE_DATA, name, phone, message})