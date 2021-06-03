const initState = {
    jobsList: [],
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'JOBS_LIST': {
            return { ...state, jobsList: action.payLoad };
        }
        default:
            return state;
    }
};
export default reducer;
