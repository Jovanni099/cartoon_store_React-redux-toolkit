export const calcTotalPrice = (item) => {
    return item.reduce((acc, cartoon) => acc = acc + cartoon.episodes, 0)
}