function getMarkdown(url, outputid)
{
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			return response.text();
		})
		.then((text) => {
			document.getElementById(outputid).innerHTML =
				marked.parse(text);
		})
		.catch((error) => {
			alert(error);
		});
}

getMarkdown("https://raw.githubusercontent.com/Tobo-Makes-Things/Tobos-Tuber-Tools/refs/heads/master/README.md", "readme-tobo-tools")
