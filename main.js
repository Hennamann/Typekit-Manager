var menubar = require('menubar')

var mb = menubar({index:"https://typekit.com/fonts", tooltip:"Typekit Manager"})

mb.on('ready', function ready () {
  console.log('app is ready')
})
