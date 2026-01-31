class FileRender {
	private fileData: FileData[];
	private divFileRender: HTMLElement;
	
	constructor(fileData: FileData[], divName: string) {
		this.fileData = fileData;
		
		const el = document.getElementById(divName);
		if (!el) throw new Error("Element not found");
		this.divFileRender = el;
	}
	
	private formatBytes(bytes: number): string {
		if (bytes === 0) return "Directory";
		
		const units = ["B", "KB", "MB", "GB", "TB"];
		let i = 0;
		
		while (bytes >= 1024 && i < units.length - 1) {
			bytes /= 1024;
			i++;
		}
		return bytes.toFixed(1) + " " + units[i];
	}
	
	public newRender(fileData: FileData): void {
		this.fileData = fileData;
		this.render();
	}
	
	public render(): void {
		this.divFileRender.innerHTML = "";
		
		this.fileData.forEach(item => {
			const div = document.createElement("div");
			div.className = "item";
			
			const icon = item.type === FileType.DIRECTORY ? "icons/file-directory-fill-16.svg" : "icons/file-16.svg";
			
			div.innerHTML = `
				<img class="icon" src="${icon}">
				<div class="item-text">
					<div class="item-name">${item.name}</div>
					<div class="item-size">${this.formatBytes(item.size)}</div>
				</div>
				<button class="edit-btn">⋮</button>
			`;
			
			div.addEventListener("click", () => {
				this.onClick(item);
			});
			
			const editBtn = div.querySelector(".edit-btn") as HTMLButtonElement;
			editBtn.addEventListener("click", (e) => {
				e.stopPropagation();
				this.onEdit(item);
			});
			this.divFileRender.appendChild(div);
		});
	}
	
	private onClick(item: FileData): void {
		console.log("Open:", item.name);
	}

	private onEdit(item: FileData): void {
		console.log("Edit:", item.name);
		// rename
		// delete
		// open context menu
	}
}

enum FileType {
	FILE,
	DIRECTORY
}

interface FileData {
	path: string;
	type: FileType;
	size: number
}