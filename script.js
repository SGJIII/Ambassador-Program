function onFormSubmit(e) {
  var sheet = e.range.getSheet();
  var row = e.range.getRow();
  
  // Check if column B and C are not empty
  var colB = 2; // Column B
  var bRange = sheet.getRange(row, colB);
  var colC = 3; // Column C
  var cRange = sheet.getRange(row, colC);
  
  if (bRange.getValue() != "" && cRange.getValue() != "") {
    // Check if column D is empty for this row
    var colD = 4; // Column D
    var dRange = sheet.getRange(row, colD);
    if (dRange.getValue() == "") {
      dRange.setValue("https://[YOUR_LANDING_PAGE].com/");
    }
    
    // Check if column E is empty for this row
    var colE = 5; // Column E
    var eRange = sheet.getRange(row, colE);
    if (eRange.getValue() == "") {
      eRange.setValue(Math.floor(Math.random() * 90000000) + 10000000);
    }
    
    // Check if column G is empty for this row
    var colG = 7; // Column G
    var gRange = sheet.getRange(row, colG);
    if (gRange.getValue() == "") {
      gRange.setValue(dRange.getValue() + "/?refid=" + eRange.getValue());
    }
    
    // Check if column F is empty for this row
    var colF = 6; // Column F
    var fRange = sheet.getRange(row, colF);
    if (fRange.getValue() == "") {
      fRange.setValue(eRange.getValue());
    }
  }
}
