var FileListRender = /** @class */ (function () {
    function FileListRender(fileData, divName) {
        this.fileData = fileData;
        var el = document.getElementById(divName);
        if (!el)
            throw new Error("Element not found");
        this.divFileRender = el;
    }
    FileListRender.prototype.formatBytes = function (bytes) {
        if (bytes === 0)
            return "Directory";
        var units = ["B", "KB", "MB", "GB", "TB"];
        var i = 0;
        while (bytes >= 1024 && i < units.length - 1) {
            bytes /= 1024;
            i++;
        }
        return bytes.toFixed(1) + " " + units[i];
    };
    FileListRender.prototype.newRender = function (fileData) {
        this.fileData = fileData;
        this.render();
    };
    FileListRender.prototype.render = function () {
        var _this = this;
        this.divFileRender.innerHTML = "";
        this.fileData.forEach(function (item) {
            var div = document.createElement("div");
            div.className = "item";
            var icon = item.type === FileType.DIRECTORY ? "icons/file-directory-16.svg" : "icons/file-16.svg";
            div.innerHTML = "\n\t\t\t\t<img src=\"".concat(icon, "\">\n\t\t\t\t<div class=\"item-text\">\n\t\t\t\t\t<div class=\"item-name\">").concat(item.name, "</div>\n\t\t\t\t\t<div class=\"item-size\">").concat(_this.formatBytes(item.size), "</div>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"edit-btn\">\u22EE</button>\n\t\t\t");
            div.addEventListener("click", function () {
                _this.onClick(item);
            });
            var editBtn = div.querySelector(".edit-btn");
            editBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                _this.onEdit(item);
            });
            _this.divFileRender.appendChild(div);
        });
    };
    FileListRender.prototype.onClick = function (item) {
        console.log("Open:", item.name);
    };
    FileListRender.prototype.onEdit = function (item) {
        console.log("Edit:", item.name);
        // rename
        // delete
        // open context menu
    };
    return FileListRender;
}());
var FileType;
(function (FileType) {
    FileType[FileType["FILE"] = 0] = "FILE";
    FileType[FileType["DIRECTORY"] = 1] = "DIRECTORY";
})(FileType || (FileType = {}));
var fileData = [
    { name: "assets", type: FileType.DIRECTORY, size: 0 },
    { name: "src", type: FileType.DIRECTORY, size: 0 },
    { name: "index.html", type: FileType.FILE, size: 2345 },
    { name: "style.css", type: FileType.FILE, size: 1120 }
];
var renderer = new FileListRender(fileData, "explorer");
renderer.render();
var test = [
    { name: "minecraft", type: FileType.DIRECTORY, size: 0 }
];
