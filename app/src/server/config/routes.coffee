"use strict"

module.exports = (app) ->

  # root
  app.get "/", (req, res) ->
    res.send "Hello World"
