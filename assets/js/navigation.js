gitbook.events.bind("page.change", function() {
	let navigationText = $("p:contains('Navigation:') a");
	let navigationBox = $("<a href='https://softuni.org/'>Start a Tech Job! <img class='logo' src='https://softuni.org/wp-content/uploads/2021/08/SoftUni_NO_Slogan_Horizontal.svg' alt='logo'></a>");
	for (let link of navigationText) {
		if (typeof(link.href) == "string" && link.href.startsWith("https://softuni.org/")) {
			let codeBox = $(link).parent().prev();
			if (codeBox.is("pre")) {
				codeBox.prepend(navigationBox);
				// Delete the original hyperlink from the DOM
				$(link).parent().remove();
			}
			break;
		}
	}
});
