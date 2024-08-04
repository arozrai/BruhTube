class Post {
  constructor() {
    this.posts = [];
    this.title = "";
    this.description = "";
    this.id = "";
  }

  log() {
    console.log(this.posts);
  }

  createPosts(Data) {
    for (let i = 0; i < Data.length; i++) {
      this.id = Data[i].id;
      this.title = Data[i].title;
      this.description = Data[i].body;
      const newDiv = document.createElement("div", {
        class: this,
        id: this.id,
      });
      const newP1 = document.createElement("p");
      const newP2 = document.createElement("p");

      newDiv.classList.add("postBox");
      newP1.classList.add("smallTitle");
      newP2.classList.add("smallText");

      const newElement1 = document.createTextNode(this.title);
      const newElement2 = document.createTextNode(this.description);

      newP1.appendChild(newElement1);
      newP2.appendChild(newElement2);

      newDiv.appendChild(newP1);
      newDiv.appendChild(newP2);

      const currentBody = document.getElementById("Body");
      currentBody.appendChild(newDiv);
    }
  }

  async getPosts() {
    // const url = "https://jsonplaceholder.typicode.com/posts";
    const url = "";

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.posts = data;
      return this.posts;
    } catch (e) {
      console.log({ message: "error recieved", e });
    }
  }
}

export { Post };
