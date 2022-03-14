gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let topMenu = $(`
        <p class="topnav">
            <a class="logo" target="_blank" href="https://softuni.org"><img src="https://softuni.org/wp-content/uploads/2021/08/SoftUni_NO_Slogan_Horizontal.svg" alt="logo"></a>
            <a target="_blank" href="https://softuni.org">Learn Programming</a>
            <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
            <a target="_blank" href="https://introprogramming.info">Nakov's Books</a>
        </p>
    `);

    doc.prepend(topMenu);
});
