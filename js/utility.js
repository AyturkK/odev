
function jumpToHeader() {
    //window.scroll({ top: 200, behavior: 'smooth' });
    let header = document.getElementById('main-header');
    if (header) {
        header.scrollIntoView({ behavior: 'smooth' });
    }
}

