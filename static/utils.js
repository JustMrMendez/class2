// load 10 users from the API https://random-data-api.com/api/v2/users?size=10
// and display them in a table
async function load_posts() {
    const response = await fetch('https://random-data-api.com/api/v2/users?size=10');
    const data = await response.json();
    const table = document.getElementById('posts');
    // for (const post of data) {
    //     const row = table.insertRow();
    //     row.insertCell().innerText = post.first_name;
    //     row.insertCell().innerText = post.last_name;
    //     row.insertCell().innerText = post.email;
    // }
}

async function add_post() {
    const response = await fetch('https://random-data-api.com/api/v2/users?size=1');
    const data = await response.json();
    const table = document.getElementById('posts');

    const row = table.insertRow();
    row.insertCell().innerText = post.first_name;
    row.insertCell().innerText = post.last_name;

}

// // when button in the navbar is clicked, add a new post
// document.getElementById('add').addEventListener('click', add_post);

window.onscroll = () => {
    if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
        load_posts();
    }
};
