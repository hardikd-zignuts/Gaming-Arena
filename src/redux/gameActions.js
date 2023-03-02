import { APPLY_FILTER, FETCH_GAMES_FAILURE, FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, RESET_FILTER } from "./gameTypes";
import axios from "axios";

export const applyFilter = selectedPlatform => {
    return {
        type: APPLY_FILTER,
        payLoad: selectedPlatform
    }
}
export const resetFilter = selectedPlatform => {
    return {
        type: RESET_FILTER,
        payLoad: selectedPlatform
    }
}

export const fetchGamesRequest = () => {
    return {
        type: FETCH_GAMES_REQUEST
    }
}
export const fetchGamesSuccess = games => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payLoad: games
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
                dispatch(fetchGamesSuccess(gameData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchGamesFailure(errorMsg))
            })
    }

}
