export const getSignoutUri = () => {
  return process.env.REACT_APP_AWS_COGNITO_LOGOUT as string;
  // ( (process.env.REACT_APP_AWS_COGNITO_LOGOUT as string));
};
