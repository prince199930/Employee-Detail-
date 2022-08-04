import axios from "axios";
import { call, put } from "redux-saga/effects";
import { ActionType } from "../action-types";
import { IEmploye } from "../reducers/EmployeReducer";
import api from '../api/api';
import { Action } from "../actions/index";

// const getDataAPI = async () => {
//     // return new Promise(async(resolve, reject) => {
//     //     await axios("https://gorest.co.in/public/v1/users").then((res)=>resolve(res.data.data));
//     // });
//     return await axios("https://gorest.co.in/public/v1/users").then((res)=>res.data.data);

// };


function getEmployeeData(page: any):any{
  let config: any = {
    method: "GET",
    url: `/public/v1/users?page=${page}`,
  };
  return()=> api(config)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((err) => {
     
      console.log("some error occured in getting the data", err);
    });
};

function* sagaGetData(action:Action): any {
  const data = yield call(getEmployeeData(action.payload));
  console.log(data)

  yield put({ type: ActionType.GETDATA, payload: data.data.data });
};

export default sagaGetData;


// import axios from "axios";
// import { requestHandler, successHandler, errorHandler } from "../interceptors";

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {
//     "Content-type": "application/json",
//     "origin-name": window.location.origin.toString(),
//   },
// });

// // Handle request process
// import api from ".";
// export const getAccountsData = (handleSnackbar) => {
//   let config = {
//     method: "GET",
//     url: "/accounts",
//   };

//   return api(config)
//     .then((resp) => {
//       return resp;
//     })
//     .catch((err) => {
//       console.log("some error occured in getting the data", err);
//       handleSnackbar(err);
//       return err;
//     });
// };
