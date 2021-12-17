import axios from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";
// import {AppDispatch} from "../store";
// import {userSlice} from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('http://localhost:3000/products')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     }catch (e){
//         // @ts-ignore
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }
export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI) => {
            try {
                const response = await axios.get<IUser[]>('http://localhost:3000/posts')
                return response.data
            }catch (e){
                return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
            }
        }
    )
