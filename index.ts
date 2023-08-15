import { assign, createMachine } from "xstate";

/**
 * * auth state machine
 * * https://xstate.js.org/viz/?gist=fe65b93285d112652d335bf2c9395bd2
 */
export const authMachine = createMachine<
  AuthMachine.IAuthContext,
  AuthMachine.IAuthEvent,
  AuthMachine.TAuthState
>({
  predictableActionArguments: true,
  id: "auth",
  context: { status: "IDLE" },
  initial: "idle",
  states: {
    idle: {
      on: {
        LOGIN: {
          target: "loginLoading",
        },
        AUTO_LOGIN: {
          target: "loginLoading",
        },
      },
    },
    loginLoading: {
      on: {
        LOGIN_SUCCESS: {
          target: "login",
          actions: assign({ status: "LOGIN" }),
        },

        LOGIN_FAIL: {
          target: "idle",
          actions: assign({ status: "IDLE" }),
        },
      },
    },
    logoutLoading: {
      on: {
        LOGOUT_SUCCESS: {
          target: "idle",
          actions: assign({ status: "IDLE" }),
        },
        LOGOUT_FAIL: {
          target: "login",
        },
      },
    },
    login: {
      on: {
        LOGOUT: {
          target: "logoutLoading",
        },
        AUTO_LOGIN: {
          target: "loginLoading",
        },
      },
    },
  },
});
