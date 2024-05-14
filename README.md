# Google-Folder-Management-Script
# Folder Management Script

This project provides a script that automates the creation of folders and subfolders in Google Drive based on data from a Google Sheets spreadsheet. It also includes a script to move files to the respective subfolders based on certain criteria.

## Features

- Folder Creation: Automatically creates folders and subfolders based on data from a Google Sheets spreadsheet.
- File Management: Moves files to the corresponding subfolders based on predefined criteria.

## Usage

### Folder Creation

1. Open the Google Sheets spreadsheet that contains the data.
2. Go to "Tools" -> "Script Editor".
3. Copy and paste the `folder-creation` code into the script editor.
4. Modify the necessary variables such as `sheetName` and `parentFolderId` according to your requirements.
5. Save the script and close the script editor.
6. Run the `createFolderWithSubfolders` function from the Google Sheets interface or set up a trigger to run it automatically.

### File Management

1. Open the Google Apps Script project.
2. Go to "Tools" -> "Script Editor".
3. Copy and paste the `Scan Watch Daemon` code into the script editor.
4. Modify the necessary variables such as `sourceFolderId`, `parentFolderId`, `folderNames`, and `regexPatterns` according to your requirements.
5. Save the script and close the script editor.
6. Run the `checkForUpdates` function from the Google Apps Script interface or set up a trigger to run it automatically.

## Configuration

- `createFolderWithSubfolders`:
  - `sheetName`: The name of the Google Sheets spreadsheet containing the data.
  - `parentFolderId`: The ID of the parent folder where the subfolders will be created.

- `checkForUpdates`:
  - `sourceFolderId`: The ID of the folder to scan for files to be added to subfolders.
  - `parentFolderId`: The ID of the main folder hosting the subfolders.
  - `folderNames`: An array of subfolder names.
  - `regexPatterns`: An array of regular expressions to match the filenames for each subfolder.



