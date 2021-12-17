import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreate";
import PostContainer from "./components/PostContainer";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import PostCreate from "./components/PostCreate";



const App = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [ ])

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>

                <Routes>
                    <Route  path='/' element={<PostContainer/>}/>
                    <Route  path='/create' element={<PostCreate/>}/>
                </Routes>

            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}

        </div>

        </Router>
    );
};

export default App;