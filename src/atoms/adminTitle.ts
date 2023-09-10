import {atom} from 'recoil'

export const adminTitleState = atom({
    key: 'adminTitle', // unique ID (with respect to other atoms/selectors)
    default: 'Admin Page' as string, // default value (aka initial value)
  });