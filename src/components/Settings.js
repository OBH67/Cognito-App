import React, {useState, useEffect, useContext} from 'react'
import { AccountContext } from './Accounts';
import ChangePassword from './ChangePassword';

const Settings = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const {getSession} = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true);
        });
    }, []);
    return (
        <div>
            {loggedIn && (
                <>
                <h1>Home Page</h1>
                <ChangePassword />
                </>
            )}
        </div>
    )
}

export default Settings
