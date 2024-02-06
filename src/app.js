class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    let title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    title_card.innerHTML = this.title; // Set innerHTML directly
    document.getElementById('card-text').appendChild(title_card);
  }

  addDescription() {
    let description_card = document.createElement('p');
    description_card.setAttribute('id', 'blog-description');
    description_card.innerHTML = this.detail; // Set innerHTML directly
    document.getElementById('card-text').appendChild(description_card);
  }
}

// Progression 2: Setup an event listener - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
let toggle = 1;

function helperAddPost() {
  if (toggle == 1) {
    document.getElementById('popupContact').style.display = 'inline';
    toggle = 0;
  } else {
    document.getElementById('popupContact').style.display = 'none';
    toggle = 1;
  }
}

function helperPost() {
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;
  let blog = new Blog(title, detail);

  blog.addTitle();
  blog.addDescription();
}

document.addEventListener('DOMContentLoaded', function () {
  let addPostButton = document.getElementById('add-post');
  let postButton = document.getElementById('post');
  if (addPostButton) {
    addPostButton.addEventListener('click', helperAddPost);
  }

  if (postButton) {
    postButton.addEventListener('click', helperPost);
  }
});
