import {atom} from 'recoil'

export const Atom = atom({
    key:'Atom',

    default:[
        {
            isSubscribed:false,
             isLogin:false,
             plan:"",
             id:1
         },
     ]
})