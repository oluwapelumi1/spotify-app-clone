

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED DEVELOPING....
    token:
        "BQCLKNQxiiHD3oRL7SqBovIihpKPR8a9NvPtXoa5nA77KIWDHc4gQIWjVTnAsI6oKV8IDSX5w - g7 - NDn9WKqmx7WwStmvXSkHHHu_XdP7swn0_m8Y - rWn0U3t1MCRE - VfuXWQdyvaiedvzDwaP49NRbtWmgDODSpraE5SofAP6A15SoRsspdXWBBBnxhGNTTZOrErj0xz5OjCXxHST9xng",
};

const reducer = (state, action) => {
    console.log(action);

    // Action type, payload

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }

};

export default reducer;