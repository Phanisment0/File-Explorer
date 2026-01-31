// Example 
var fileData = [
    { name: "assets", type: FileType.DIRECTORY, size: 0 },
    { name: "src", type: FileType.DIRECTORY, size: 0 },
    { name: "index.html", type: FileType.FILE, size: 2345 },
    { name: "style.css", type: FileType.FILE, size: 1120 }
];
document.querySelector(".upload-btn").addEventListener("click", function (e) {
    console.log("Upload");
});
document.querySelector(".new_file-btn").addEventListener("click", function (e) {
    console.log("New File");
});
document.querySelector(".new_directory-btn").addEventListener("click", function (e) {
    console.log("New Directory");
});
var renderer = new FileRender(fileData, "explorer");
renderer.render();
var test = [
    { name: "minecraft", type: FileType.DIRECTORY, size: 0 }
];
