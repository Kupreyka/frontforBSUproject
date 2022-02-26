const SET_IMAGE_URL = 'profile/SET_IMAGE_URL'
const SET_INFO_PROFILE = 'profile/SET_INFO_PROFILE'
const SET_DATA_IN_PROFILE = 'profile/SET_DATA_IN_PROFILE'

const initialState = {
    imgUrl: null,
    firstName: null,
    streetAddress: null,
    data: null
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
                streetAddress: action.streetAddress
            }
        default:
            return state
    }
}

export const setImageUrl = (imageUrl, firstName) => ({type: SET_IMAGE_URL, imageUrl})
export const setProfileData = (data) => ({type: SET_INFO_PROFILE, data})
export const setDataInProfile = (firstName, streetAddress) => ({type: SET_DATA_IN_PROFILE, firstName, streetAddress})