import React, { useEffect, useState } from "react";
import users from "./Users.json";
import { useHistory } from "react-router-dom";
import styles from './Login.module.css'
import allActions from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
const checkCredentials = (userName, password) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userName && users[i].password == password) {
            return true;
            break;
        }
    }
    return false;
};

const Login= () =>  {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()
    return (
        <div className={styles.mainLogin}>
            { currentUser.loggedIn? history.replace("/home"):<>
            <h4 className={styles.loginHeading}>Sign In to your accout</h4>
            <div className={styles.mainLoginWrap}>
                <label className={styles.loginLabel}>Username</label>
                <input
                    type="text"
                    class="form-control mb-3"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    placeholder=" Enter Username"
                />
                <label className={styles.loginLabel}>Password</label>
                <input
                    type="password"
                    class="form-control mb-3"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder=" Enter Password"
                />
                <div className={styles.loginButton}>
                    <button
                        autofocus
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                            if (checkCredentials(userName, password)) {
                                alert("you are successfully logged as " + userName  );
                                dispatch(allActions.userActions.setUser(userName));
                                history.replace("/home");
                            } else {
                                alert("Invalid Username or Password");
                            }
                        }}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            </>
}
        </div>
    );
}
export default Login;
