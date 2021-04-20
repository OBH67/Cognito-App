import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "us-east-2_UN6TnxE9v",
  ClientId: "5cs4fulu1ord4sbtpckftg15fo",
};

export default new CognitoUserPool(poolData);