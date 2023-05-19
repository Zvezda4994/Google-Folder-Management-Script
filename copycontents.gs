function copyContentsToNewFolders() {
  const SOURCE_PARENT_FOLDER_ID = "YOUR_SOURCE_PARENT_FOLDER_ID"; // Replace with the ID of the previous vehicles folder parent.
  const DESTINATION_PARENT_FOLDER_ID = "YOUR_DESTINATION_PARENT_FOLDER_ID"; // Replace with the ID of the newly created folders parent.

  const sourceParentFolder = DriveApp.getFolderById(SOURCE_PARENT_FOLDER_ID);
  const destinationParentFolder = DriveApp.getFolderById(DESTINATION_PARENT_FOLDER_ID);

  const subfolders = sourceParentFolder.getFolders();
  while (subfolders.hasNext()) {
    const subfolder = subfolders.next();  
    const folderName = subfolder.getName();
    const destinationSubfolder = destinationParentFolder.getFoldersByName(folderName).next();

    const files = subfolder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      destinationSubfolder.createFile(file.getBlob());
    }
  }
}
