import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

// export const getData = (data: any) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.GETDATA,
//             payload: data
//         })
//     };
// }
// export const addData = (data: any) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.ADDADATA,
//             payload: data,
            
//         })
//     };
// }

export const addData = (data: any,id:number) => {
    return{
        type: ActionType.ADDADATA,
        payload: {id,...data},
    }
}

export const getData = (data: any) => {
    return {
        type: ActionType.GETDATA,
        payload: data
    }
}

export const editData = (data: any, id:any) => {
    return {
        type: ActionType.EDITDATA,
        payload: data,
        id:id
    }
}

export const deleteData = (id:any) => {
    return {
        type: ActionType.DELETEDATA,
        id:id
    }
}