class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("News more!");
  }
}

module.exports = new NewsController();
