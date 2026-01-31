// Example 
const fileData: FileData[] = [
	{ name: "assets", type: FileType.DIRECTORY, size: 0 },
	{ name: "src", type: FileType.DIRECTORY, size: 0 },
	{ name: "index.html", type: FileType.FILE, size: 2345 },
	{ name: "style.css", type: FileType.FILE, size: 1120 }
];

document.querySelector(".upload-btn").addEventListener("click", (e) => {
	console.log("Upload");
});

document.querySelector(".new_file-btn").addEventListener("click", (e) => {
	console.log("New File");
});

document.querySelector(".new_directory-btn").addEventListener("click", (e) => {
	console.log("New Directory");
});

const renderer = new FileRender(fileData, "explorer");
renderer.render();

const test: FileData[] = [
	{ name: "minecraft", type: FileType.DIRECTORY, size: 0 }
];