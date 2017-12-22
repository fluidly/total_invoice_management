const express = require("express")
const request = require("request-promise")

const app = express()

const addExpectedDate = async invoice => {
  try {
    const { expectedDate } = await request(`${process.env.EXPECTED_DATE_URI}/api/expected-date/${invoice.id}`, {
      json: true
    })
    return Object.assign({}, invoice, { expectedDate })
  } catch (e) {
    console.log(`failed to add expected date ${e}`)
    return invoice
  }
}

app.get("/api/invoices/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const invoice = await addExpectedDate({
      id: id,
      ref: `INV-${id}`,
      amount: id * 100,
      balance: (id * 100) - 10,
      ccy: "GBP"
    })
    res.json(invoice)
  } catch (error) {
    next(error)
  }
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`invoices_svc listening on ${port}`)
})