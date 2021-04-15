import React, { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";

 const Signup = () => {
    const poolData = {
        UserPoolId: "us-east-2_UN6TnxE9v",
        ClientId: "5cs4fulu1ord4sbtpckftg15fo",
      };
      const UserPool = new CognitoUserPool(poolData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};


export default Signup;