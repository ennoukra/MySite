function dateModification(page) {
  if (document.getElementById("time")) {
    fetch("https://api.github.com/repos/ennoukrA/MySite/commits?path=" + page)
      .then((response) => {
        return response.json();
      })
      .then((commits) => {
        document.getElementById(
          "time"
        ).textContent = commits[0].commit.committer.date
          .slice(0, 16)
          .split("T")
          .reverse()
          .join("/");
      });
  }
}

function update(page) {
  document.getElementById("time").textContent = "2021/11/22";
}

dateModification("index.html");
