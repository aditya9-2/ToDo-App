const inputField = document.querySelector('#inp');

inputField.addEventListener('input', function () {

    if (this.value !== '') {

        this.style.color = '#000'; // Change font color to black
        this.style.fontWeight = '400'; // Change font size to 20px

    } else {
        this.style.color = '#a4a1a1'; // Revert font color to default
        this.style.fontSize = '16px'; // Revert font size to default
    }
});