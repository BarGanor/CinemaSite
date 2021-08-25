const setNewMoviesFormDiv = (cardForm, pageType)=> {
    const genreSelect = getSelect(['Action', 'Comedy']);
    const submitBtn = getSubmitBtn(pageType);
    cardForm.appendChild(genreSelect);
    cardForm.appendChild(submitBtn);

    submitBtn.addEventListener('click', ()=>{
        const moviePresentation = new MoviePresentation(this.container);
        moviePresentation.render();
    })
}