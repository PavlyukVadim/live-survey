export const set = (obj, path, value) => {
  const keys = path && path.split('.')
  const key = keys[0]

  if (keys.length === 1) {
    return {
      ...obj,
      [key]: value,
    }
  }

  return {
    ...obj,
    [key]: {
      ...obj[key],
      ...set(obj[key], keys.slice(1).join`.`, value),
    },
  }
}
