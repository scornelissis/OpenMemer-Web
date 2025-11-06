
document.getElementById('exportBtn').addEventListener('click', () => {
    let canvasURL = canvas.todataURL('image/png');  // get the data URL of the canvas content
    /* 
    TODO: this shit doesn't work!!!!!!!!
    WHY? WHY WON'T IT WORK?
    */
    const createEl = document.createElement('a'); // create a temporary anchor element
    createEl.href = canvasURL;

    createEl.download = 'meme.png'; // set the download filename

    createEl.click(); // trigger the download
    createEl.remove(); // clean up the temporary element
});