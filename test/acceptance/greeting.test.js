import visit from '../helpers/visit'

describe('When visiting the homepage', function () {

  test('it welcomes the user', async function () {
    let page = visit('/')

    let text = await page.evaluate(() => document.body.textContent)
                         .end()

    expect(text).toContain('Welcome to React')
  })

})
