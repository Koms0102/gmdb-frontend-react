import React, {useContext} from 'react';
import { UserContext } from '../User.provider';

export default function ActiveUser() {
    const {user: {username}} = useContext(UserContext)

    return (
        <h1>{`Welcome to GMDB, ${username}!`}</h1>
    );
}