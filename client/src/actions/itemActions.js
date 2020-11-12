import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS,
    ITEMS_LOADING
} from './types';
import  axios from 'axios';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const  getItems = () => dispatch =>{
    dispatch(setItemsLoading());

    axios
    .get('/api/items')
    .then(res => 
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch(err=> dispatch(returnErrors(err.response.data , err.response.status)));
};

export const  addItem = item =>(dispatch , getstate) =>{
    axios
    .post('/api/items' , item , tokenConfig(getstate) )
    .then( res => dispatch({
        type: ADD_ITEMS,
        payload: res.data
    }))
    .catch(err=> dispatch(returnErrors(err.response.data , err.response.status)));
};


export const  deleteItem = id => (dispatch , getstate) =>{
    axios.delete(`/api/items/${id}` , tokenConfig(getstate)).then( res =>
        dispatch({
            type:DELETE_ITEMS,
            payload:id
        })
    ).catch(err=> dispatch(returnErrors(err.response.data , err.response.status)));
};




export const setItemsLoading = () =>{
    return{
        type : ITEMS_LOADING
    }
}