async function load_posts() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10"
  );
  const data = await response.json();
}

async function addPost() {
    console.log("its working");
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=1"
  );
  const data = await response.json();
  const feed = document.querySelector(".feed");
  const newPost = document.createElement("feed-post");
  feed.insertBefore(newPost, feed.firstChild);
  l;
}
// const addPostBtn = document.querySelector("#add");
// addEventListener( "click", this.addDiv.bind( this ) )

window.onscroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    load_posts();
  }
};
