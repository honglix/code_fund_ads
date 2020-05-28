export const toArray = value => {
  if (Array.isArray(value)) return value
  if (Array.from) return Array.from(value)
  return [].slice.call(value)
}

export const current = new Proxy(
  {},
  {
    get (target, propertyName) {
      const result = {}
      const prefix = `current-${propertyName}-`
      for (const { name, content } of document.head.querySelectorAll(
        `meta[name^=${prefix}]`
      )) {
        const key = camelize(name.slice(prefix.length))
        result[key] = content
      }
      return result
    }
  }
)

function camelize (string) {
  return string.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase())
}
