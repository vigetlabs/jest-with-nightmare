import visit from '../helpers/visit'

describe('sanity check', function () {

  test('the homepage is viewable', async function () {
    await visit('/').end()
  })

})
