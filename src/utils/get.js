export const get = (obj = {}, path) => {
  const keys = path && path.split('.')
  const key = keys[0]

  if (keys.length === 1) return obj[path]

  return get(obj[key], keys.slice(1).join`.`)
}
