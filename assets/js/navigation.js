gitbook.events.bind("page.change", function() {
	let runCodeLinks = $("p:contains('Navigation:') a");
	for (let link of runCodeLinks) {
		if (typeof(link.href) == "string" && link.href.startsWith("https://softuni.org/")) {
			// A repl.it link is found --> check for code box above it
			let codeBox = $(link).parent().prev();
			if (codeBox.is("pre")) {
				// A code box is found just before the code link --> inject the [Run] button
				let runButton = $("<a href='https://softuni.org/'>Start a Tech Job! <img class='logo' src='https://softuni.org/wp-content/uploads/2021/08/SoftUni_NO_Slogan_Horizontal.svg' alt='logo'></a>");
				codeBox.prepend(runButton);
				// Delete the original REPL hyperlink from the DOM
				$(link).parent().remove();
			}
			break;
		}
	}
});
