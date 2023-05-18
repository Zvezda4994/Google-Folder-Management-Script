function convertIteratorToArray(iterator) {
  const array = [];
  while (iterator.hasNext()) {
    array.push(iterator.next());
  }
  return array;
}

function checkForUpdates() {
  const SOURCE_FOLDER_ID = "YOUR_SOURCE_FOLDER_ID"; // Replace with the ID of the folder you want it to look through for files to add to your destination folders.
  const PARENT_FOLDER_ID = "YOUR_PARENT_FOLDER_ID"; // Replace with the ID of the main folder that hosts where all the other folders are.
  const FOLDER_NAMES = ["SUBFOLDER_1", "SUBFOLDER_2", "SUBFOLDER_3", "SUBFOLDER_4", "SUBFOLDER_5", "SUBFOLDER_6"];
  const REGEX_PATTERNS = [              
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i,    // You need to know some regular expressions for this, but the words in between the forward slash are what you are searching for to add to the respective folders. Make sure to include the file extension.
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i,
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i,
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i,
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i,
    /WORD_PATTERN_TO_SEARCH_FOR\.pdf/i
  ];

  console.log("Checking folder...");
  const SOURCE_FOLDER = DriveApp.getFolderById(SOURCE_FOLDER_ID);
  const PARENT_FOLDER = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const sourceFiles = convertIteratorToArray(SOURCE_FOLDER.getFiles());

  for (const file of sourceFiles) {
    for (let i = 0; i < FOLDER_NAMES.length; i++) {
      const match = file.getName().match(REGEX_PATTERNS[i]);
      if (match !== null) {
        const itemIdentifier = match[1]; // Change the variable name to whatever is relevant.
        const [itemFolder] = convertIteratorToArray(PARENT_FOLDER.getFoldersByName(`Unit #${itemIdentifier}`));
        const [subfolder] = convertIteratorToArray(itemFolder.getFoldersByName(FOLDER_NAMES[i]));
        
        // Move the file to the subfolder
        subfolder.addFile(file);
        SOURCE_FOLDER.removeFile(file);
        break;
      }
    }
  }
}



//Please make sure to replace the placeholders: YOUR_SOURCE_FOLDER_ID with the actual ID of the folder you want to search for files. YOUR_PARENT_FOLDER_ID with the actual ID of the main folder hosting the subfolders. WORD_PATTERN_TO_SEARCH_FOR\.pdf with the appropriate regex patterns to match the filenames you want to add to the subfolders.
