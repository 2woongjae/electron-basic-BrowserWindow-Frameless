const {app, BrowserWindow} = require('electron');

let first = null;
let second = null;
let third = null;

app.on('ready', () => {
   first = new BrowserWindow({
       width: 600,
       height: 600,
       frame: false
   });

   first.loadURL(`file://${__dirname}/index.html`);

    second = new BrowserWindow({
        width: 600,
        height: 600,
        titleBarStyle: 'hidden'
    });

    second.loadURL(`file://${__dirname}/index.html`);

    third = new BrowserWindow({
        width: 600,
        height: 600,
        titleBarStyle: 'hidden-inset'
    });

    third.loadURL(`file://${__dirname}/index.html`);
});