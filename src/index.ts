import axios from 'axios'
import consola from 'consola'
import ora from 'ora'

const BASE_URL = 'https://registry.npmjs.org/'
const loading = ora('checking').start()

if (process.argv.length > 2) {
  const args = process.argv.slice(2)
  const packageName = args[0]
  const url = `${BASE_URL}${packageName}`
  axios.get(url).then((res) => {
    loading.stop()
    if (res.status === 200) {
      if (res.data.name)
        consola.warn('😫 This package name is register already!')
      else
        consola.success('😊 You can use this package name!')
    }
  }).catch((err) => {
    loading.stop()
    if (err.response && err.response.status === 404 && err.response.statusText === 'Not Found')
      consola.log('😊 You can use this package name!')
    else
      consola.success(`😫 ${err}`)
  })
}
else {
  loading.clear()
  consola.warn('😫 Please input package name for you will check!')
}
