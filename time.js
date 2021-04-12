function dateModification(page) {
  if (document.getElementById("date")) {
    fetch("https://api.github.com/repos/ennoukrA/MySite/commits?path=" + page)
      .then((response) => {
        return response.json();
      })
      .then((commits) => {
        document.getElementById(
          "date"
        ).textContent = commits[0].commit.committer.date
          .slice(0, 16)
          .split("T")
          .reverse()
          .join("/");
      });
  }
}

dateModification("index.html");
