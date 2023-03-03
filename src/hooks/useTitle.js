
const useTitle = (data) => {

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
export default useTitle