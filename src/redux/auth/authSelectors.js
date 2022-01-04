const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getIsFetchCurent = (state) => state.auth.isFetchCurent;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchCurent,
};

export default authSelectors;
