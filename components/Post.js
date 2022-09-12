const template = document.createElement("template");
template.innerHTML = `
<style>
    .post-wrapper {
        margin-top: 2rem;
        margin-bottom: 2.5rem; 
        background-color: #ffffff; 
        border-radius: 0.375rem; 
        border-color: #D1D5DB;
    }
    .post-header {
        display: flex; 
        padding: 0.75rem; 
        justify-content: space-between; 
        align-items: center; 
    }
    .post-header > div {
        display: flex; 
        align-items: center; 
    }
    .post-header > div img {
        width: 2.5rem; 
        height: 2.5rem; 
        border-radius: 9999px;  
    }
    .post-header > div h1 {
        margin-left: 0.5rem;
        color: #374151; 
        font-weight: 700;
        font-size: unset;
    }
    .post-header p {
        color: #6B7280; 
        font-size: 0.875rem;
        line-height: 1.25rem; 
    }
    .post-wrapper img {
        width: 100%;
    }
    
    .post-wrapper p {
        padding: 0.75rem;
        color: #374151; 
    }

</style>
<div class="post-wrapper">
    <div class="post-header">
        <div>
            <img src="static/img/profile1.jpg" alt=""/>
            <h1>John Doe</h1>
        </div>
        <p>1 hours ago</p>
    </div>
    <img src="/static/img/post1.jpg" alt="" />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quae.
    </p>
</div>
`;

class Post extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("feed-post", Post);
