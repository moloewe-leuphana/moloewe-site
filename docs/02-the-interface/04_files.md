# Files

Once you select a project, you can visit the Files page of the project by clicking on "Files" on the left panel of the user interface.

The files page displays the files associated with a selected project. Additionally, this page allows users to upload files that they need for their project.

<img src="./assets/front-end/06_files_page.jpg" alt="files_page"
	title="Files page of a MoLöWe Project" id="responsive-image-small" />

## 1 Supported Files

Files that are uploaded to MoLöWe are placed in a certain project directory based on the extension of the uploaded file.

Below are the files that can be uploaded and the directories in the project that they will be placed in.

| File Extension | Project Dir. Location | Description |
| ----------- | ----------- | ----------- |
| `.PNG`        | text        | Image       |
| `.JPG` or `.jpg`        | text        | Image       |
| `.JPEG` or `.jpeg`        | text        | Image       |
| `.MP4` or `.mp4`        | `/video`        | Video file       |
| `.txt`        | `/text`        | Text file       |
| `.md`        | `/text`        | Markdown file       |
| `.html` or `.HTML`        | `/text`        | HTML file       |

:::info

Accessing files via the Project Notebook is discussed in the chapter on [Template Notebook](template_notebook).

:::

## 2 Upload a new File

A new file can be uploaded to a project by clicking on the "Import File" button.

<img src="./assets/front-end/25_import_file.jpg" alt="import_files"
	title="Import Files to a MoLöWe Project" width="auto" />

This will open a new page that allows users to upload a new file by clicking on "Click here to import file ..." button (shown below).

<img src="./assets/front-end/26_select_file_import.jpg" alt="select_import_files"
	title="Select Files to Import to a MoLöWe Project" width="auto" />

Users can also add descriptions to the files if they need.

The uploaded file can be saved to the system by clicking on the "Save" button on the bottom right of the page.

:::caution

Not all file types are supported. Please read the information from [Section 1](front_end_files_page#1-supported-files) of this page before uploading a file.

:::


## 3 Edit File Details

Files can be given custom descriptions. This can be done by clicking on the "**i**" icon on the right hand side of the name of the file.

<img src="./assets/front-end/27_change_file_details.jpg" alt="change_file_details_button"
	title="Change File Details" width='auto' />

When that button is pressed, the interface changes into a page that allows for the file details to be changed.

<img src="./assets/front-end/28_change_file_details_interface.jpg" alt="change_file_details_interface"
	title="Interface to change File Details" width='auto' />

Once a description text has been typed in to the description box, the changes can be saved by clicking on the "Save" button on the bottom right.

## 4 Delete a File

To delete a file, enter the interface that allows users to change file details by following [Section 3 outlined above](front_end_files_page#3-edit-file-details). This should take users to the following page.

<img src="./assets/front-end/28_change_file_details_interface.jpg" alt="change_file_details_interface"
	title="Interface to change File Details" width='auto' />

To delete the file, click on the "Delete File" button on the bottom left.
