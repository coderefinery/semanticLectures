export const DEFAULT_USER_PROFILE = 'DEFAULT_USER_PROFILE'
export const USER_PROFILE_RULES = 'USER_PROFILE_RULES'
export const GET_USER = 'GET_USER'

function generateUserProfile(uid) {
  return {
    uid,
    screenName: 'My New Application',
    description: 'I signed up recently',
  }
}

export default {
  [GET_USER]: state => state.user,
  [DEFAULT_USER_PROFILE]: () => timestamp => generateUserProfile(timestamp),
  [USER_PROFILE_RULES]: () => {
    return {
      screenName: [
        v => !!v || 'Provide a Screen Name'
      ],
      description: [
        v => !!v || 'Describe yourself'
      ],
    }
  }
}
