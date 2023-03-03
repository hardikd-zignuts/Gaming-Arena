import { APPLY_FILTER, APPLY_SEARCH_FILTER, FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, RESET_FILTER } from "./gameTypes";
import axios from "axios";
import usePlatform from '../hooks/usePlatform'

export const applyFilter = selectedPlatform => {
    return {
        type: APPLY_FILTER,
        payLoad: selectedPlatform
    }
}
export const applySearchFilter = str => {
    return {
        type: APPLY_SEARCH_FILTER,
        payLoad: str
    }
}
export const resetFilter = () => {
    return {
        type: RESET_FILTER
    }
}

export const fetchGamesRequest = () => {
    return {
        type: FETCH_GAMES_REQUEST
    }
}
export const fetchGamesSuccess = (games, platform) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payLoad: games,
        platformData: platform
    }
}
export const fetchGamesFailure = error => {
    return {
        type: FETCH_GAMES_FAILURE,
        payLoad: error
    }


}


export const fetchGame = () => {
    const URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json'
    return (dispatch) => {
        dispatch(fetchGamesRequest())
        axios.get(URL)
            .then(response => {
                const gameData = response.data
                const platform = usePlatform(gameData)
                dispatch(fetchGamesSuccess(gameData, platform))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchGamesFailure(errorMsg))
            })
    }

}
