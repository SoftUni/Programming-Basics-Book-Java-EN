gitbook.events.bind("page.change", function() {
    let navigationText = $("p:contains('Read the online version of the book:') a");
    let navigationBox = $(`
    <p class="topnav">
        <a class="logo" target="_blank" href="https://softuni.org"><img src="https://softuni.org/wp-content/uploads/2021/08/SoftUni_NO_Slogan_Horizontal.svg" alt="logo"></a>
        <a target="_blank" href="https://softuni.org">Learn Programming</a>
        <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
    </p>
    `);
    for (let link of navigationText) {
        if (typeof(link.href) == "string" && link.href.startsWith("https://js-book.softuni.org/")) {
            let codeBox = $(link).parent().prev();
            if (codeBox.is("pre")) {
                codeBox.prepend(navigationBox);
                // Delete the original hyperlink from the DOM
                $(link).parent().remove();
            }
        }
    }
});

// change "" with ``
