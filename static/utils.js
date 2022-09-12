async function load_posts() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10"
  );
  const data = await response.json();
}

async function add_post() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=1"
  );
  const data = await response.json();
  const table = document.getElementById("posts");

  const row = table.insertRow();
  row.insertCell().innerText = post.first_name;
  row.insertCell().innerText = post.last_name;
}

window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    load_posts();
  }
};
