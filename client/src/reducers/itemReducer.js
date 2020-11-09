import {v4 as uuidv4   }from 'uuid';

import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS
} from '../actions/types';


const initialState={
    items:[
        {id:uuidv4() , name:'eggs'},
        {id:uuidv4() , name:'milk'},
        {id:uuidv4() , name:'steak'},
        {id:uuidv4() , name:'water'}
    ]
}


export default function (state=initialState , action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        default:
            return state;
    }
}