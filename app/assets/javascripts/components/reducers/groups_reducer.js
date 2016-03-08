export default function groups(
  state = { isFetching: false, items: [] }, action
) {
  switch (action.type) {
    case 'RECEIVE_GROUPS':
      return {
        isFetching: false,
        items: action.items.map((item) => item.id)
      };
    case 'REQUEST_GROUPS':
      return { ...state, isFetching: true };
    default:
      return state;
  }
}
