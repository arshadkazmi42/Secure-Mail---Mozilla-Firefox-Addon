const panels = require('sdk/panel');
const widgets = require('sdk/widget');
const data = require('sdk/self').data;
const cm = require('sdk/context-menu');

// Create a panel.
let panel = panels.Panel({
  width: 350,
  height: 170,
  contentURL: data.url('auth.html'),
  contentScriptFile: data.url('auth.js')
});

// Create a widget with panel attached.
let widget = widgets.Widget({
  id: 'secure-mail',
  label: 'secure-mail',
  contentURL: data.url('security.png'),
  panel: panel
});

// Create a contextmenu item.
let alphaMenuItem = cm.Item({
  label: 'Encrypt',
  context: cm.SelectorContext('textarea, input'),
  contentScriptFile: data.url('secureMenuItem.js')
});
