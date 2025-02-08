export interface SignUp {
  email: string;
  name: string;
  password: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface AccessToken {
  accessToken: string;
}
