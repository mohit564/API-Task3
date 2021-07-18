function shortURL() {
  const url = document.getElementById("url").value.trim();
  console.log(url);
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((response) => response.json())
    .then((data) => {
      const target = document.getElementById("result");
      const result = data["result"]["full_short_link"];
      target.setAttribute("value", result);
    })
    .catch((error) => console.error(error));
}
