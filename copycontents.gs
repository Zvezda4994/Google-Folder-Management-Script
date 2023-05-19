function copyContentsToNewFolders() {
  const SOURCE_PARENT_FOLDER_ID = "10E18V2gTwty_k-DXEUyd8o6N6odjKreK"; // Replace with the ID of the previous vehicles folder parent.
  const DESTINATION_PARENT_FOLDER_ID = "1fuzJFjQKDCUqRKKv2oILoFt1pP6iSxZI"; // Replace with the ID of the newly created folders parent.

  const sourceParentFolder = DriveApp.getFolderById(SOURCE_PARENT_FOLDER_ID);
  const destinationParentFolder = DriveApp.getFolderById(DESTINATION_PARENT_FOLDER_ID);

  const subfolders = sourceParentFolder.getFolders();
  while (subfolders.hasNext()) {
    const subfolder = subfolders.next();  
    const folderName = subfolder.getName();
    console.log(folderName);
    const destinationIterator = destinationParentFolder.getFoldersByName(folderName);
    if (destinationIterator.hasNext()) {
      const destinationSubfolder = destinationIterator.next();
      const files = subfolder.getFiles();
      while (files.hasNext()) {
        const file = files.next();
        destinationSubfolder.createFile(file.getBlob());
      }
    }
  }
}
