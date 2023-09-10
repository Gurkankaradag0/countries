export const searchMatcher = (value) => {
    const result = {}
    const regex = new RegExp('([a-z]+:[a-z0-9]+)', 'gi')
    const parts = value.split(regex)
    parts.map((val) => regex.test(val) && (result[val.split(':')[0]] = val.split(':')[1]))
    return result
}
