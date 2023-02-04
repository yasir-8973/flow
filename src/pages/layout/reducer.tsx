export const themeReducer = (state: string | Function, action: any) => {
  switch (action.type) {
    case "mode":
      return state;
    case "toggleColorMode":
      return state;
  }
};

export default () => {};
