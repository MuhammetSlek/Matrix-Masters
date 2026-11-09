const homePage = (req, res) => {
    res.render("homePage")
}

const aboutPage = (req, res) => {
    res.send("<h1>About page</h1>")
}

module.exports = {
    homePage,
    aboutPage
}

