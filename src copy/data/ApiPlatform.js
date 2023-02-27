import API_DATA from "./ApiData"

const giveUniquePlatform = (data) => {

    const removedUndefined = data.filter((item) => {
        return item.title !== undefined
    })

    const platformArr = removedUndefined.map((item, index) => {
        return item.title
    })

    const uniquePlatformNames = platformArr.filter((item, index) => {
        return platformArr.indexOf(item) === index
    })

    const finalDataWithId = uniquePlatformNames.map((item, index) => {
        return {
            id: index,
            name: item
        }
    })
    return finalDataWithId
}
const PLATFORM_DATA = giveUniquePlatform(API_DATA)
export default PLATFORM_DATA