const express = require("express")
const moment = require("moment")

const app = express()

app.get("/api/expected-date/:invoiceId", (req, res) => {
  const invoiceId = parseInt(req.params.invoiceId)

  // ¯\_(ツ)_/¯
  const bump = Math.floor(Math.random() * 10) + 1

  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    invoiceId,
    expectedDate
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`expected_date_svc listening on ${port}`)
})
