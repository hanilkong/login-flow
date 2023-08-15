declare namespace AuthMachine {
  interface IAuthContext {
    status: 'IDLE' | 'LOGIN';
  }
  interface IAuthEvent {
    type:
      | 'LOGIN'
      | 'AUTO_LOGIN'
      | 'LOGIN_LOADING'
      | 'LOGOUT_LOADING'
      | 'LOGOUT'
      | 'LOGIN_SUCCESS'
      | 'LOGOUT_SUCCESS'
      | 'LOGOUT_FAIL'
      | 'LOGIN_FAIL';
  }
  type TAuthState =
    | {
        value: 'idle';
        context: IAuthContext;
      }
    | {
        value: 'loginLoading';
        context: IAuthContext;
      }
    | {
        value: 'logoutLoading';
        context: IAuthContext;
      }
    | {
        value: 'login';
        context: IAuthContext;
      };
}
