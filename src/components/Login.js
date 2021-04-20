import React, { useState , useContext} from "react";
import { AccountContext } from './Accounts';

const Login = () => {
    // user.setAuthenticationFlowType('USER_PASSWORD_AUTH');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {authenticate} = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
    .then(data => {
      console.log('Logged in', data);
    })
    .catch(err => {
      console.error('Failed to login!', err);
    })
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;