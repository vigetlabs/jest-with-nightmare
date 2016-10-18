import nightmare from 'nightmare'
import url from 'url'
import qs from 'qs'

const BASE_URL = url.format({
  protocol : 'http',
  hostname : 'localhost',
  port     : process.env.PORT || 3000
})

const DEBUG = process.env.DEBUG || false

export default function (path='', query={}) {
  const location = url.resolve(BASE_URL, path) + '?' + qs.stringify(query)

  const page = nightmare({
    show: DEBUG,
    pollInterval: 50
  })

  return page.goto(location)
}
