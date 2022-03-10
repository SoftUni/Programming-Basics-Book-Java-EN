gitbook.events.bind("page.change", function() {
		if (typeof(link.href) == "string" && link.href.startsWith("https://repl.it/")) {
			let codeBox = $(link).parent().prev();
			if (codeBox.is("pre")) {
				let runButton = $("<a target='_blank' href='https://softuni.org/'>Navigation</a>");
				codeBox.prepend(runButton);
				$(link).parent().remove();
			}
		}
});