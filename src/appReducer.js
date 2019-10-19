const initialState = {
	usersList: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_LIST':
      return {
        ...state,
        usersList: [...state.usersList, action.payload.data]
      };
    default:
      return state;
  }
};

// // Actions
export const usersListAction = (data) => ({
  type: 'USERS_LIST',
  payload: {
		data
	}
});
