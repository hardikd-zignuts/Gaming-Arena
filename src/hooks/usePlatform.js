
const usePlatform = (data) => {

    const removedUndefined = data.filter((item) => {
        return item.platform !== undefined
    })

    const platformArr = removedUndefined.map((item, index) => {
        return item.platform
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
export default usePlatform