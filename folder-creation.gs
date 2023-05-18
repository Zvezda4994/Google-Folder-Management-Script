function createFolderWithSubfolders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SHEET_NAME"); //Replace the sheet name with the name of the sheet you are on (not the spreadsheet you are working in)
  var data = sheet.getDataRange().getValues();

  // Skip header row
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var folderName = "FOLDER_NUMBER " + row[0]; //Replace folder number with whatever you want the folder prefix to be. For example, if the cell value in my spreadsheet is "79", i would want the folder created to be "Unit #79"
    var parentFolderId = "YOUR_PARENT_FOLDER_ID"; // Replace with the ID of the parent folder where you want to create the subfolders

    var parentFolder = DriveApp.getFolderById(parentFolderId);
    var newFolder = parentFolder.createFolder(folderName);
    Logger.log("Folder created: " + newFolder.getName());

    // Create six subfolders within the newly created folder
    var subfolderNames = ["SUBFOLDER_1", "SUBFOLDER_2", "SUBFOLDER_3", "SUBFOLDER_4", "SUBFOLDER_5", "SUBFOLDER_6"]; //input whatever names you want the subfolders to have.
    for (var j = 0; j < subfolderNames.length; j++) {
      newFolder.createFolder(subfolderNames[j]);
    }
    Logger.log("Subfolders created within " + newFolder.getName()); //This just inputs in the console whatever folder it is working in currently for clarity's sake.
  }
}
