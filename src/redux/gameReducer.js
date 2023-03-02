import { APPLY_FILTER, FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, RESET_FILTER } from "./gameTypes";

const initialData = {
    loading: false,
    error: '',
    test: 10,
    selectedFilterPlatform: [],
    fetchedData: [],
    filterData: [],
    platformList: [],
    titleList: []
}

const gameReducer = (state = initialData, action) => {
    switch (action.type) {
        case APPLY_FILTER:
            const newData = [...state.fetchedData].filter(item => action.payLoad.includes(item.platform))

            return {
                ...state,
                filterData: newData
            }
        case RESET_FILTER:
            return {
                ...state,
                // platformList: [],
                filterData: state.fetchedData
            }

        case FETCH_GAMES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                fetchedData: action.payLoad,
                platformList: action.platformData,
                filterData: state.fetchedData,
                error: ''
            }
        case FETCH_GAMES_FAILURE:
            return {
                ...state,
                loading: false,
                fetchedData: [],
                error: action.payLoad
            }
        default:
            return state;
    }

}

export default gameReducer