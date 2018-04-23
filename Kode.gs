var app = SpreadsheetApp;
var activess = app.getActiveSpreadsheet();
var actives = activess.getActiveSheet();

function onOpen(){
  var ui = app.getUi();
    var rb = ui.createMenu(Rumberegner);
    rb.addItem('Start', 'start')
}

function start(){

}