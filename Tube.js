// let error = false;
// const promiseExample = new Promise((resolve, reject) => {
//   // lots of code which will take time
//   if (error) {
//     reject({ message: "oh no i got error please help" });
//   } else {
//     resolve({ name: "aroz" });
//   }
// });

// promiseExample
//   .then((value) => {
//     console.log("here is the value", value);
//   })
//   .catch((e) => {
//     console.log("here is the error", e);
//   })
//   .finally(() => {
//     console.log("im done running");
//   });

// exampleurl: https://jsonplaceholder.typicode.com/guide/

// async function main() {
//   try {
//     const value = await promiseExample;
//     console.log({ value });
//   } catch (err) {
//     console.log({ err });
//   } finally {
//     console.log("all done");
//   }
// }

// document.body.onload = addElement;

// function createPosts(Data) {
//   for (let i = 0; i < Data.length; i++) {
//     idOfUser = Data[i].userId;
//     objectId = Data[i].id;
//     titleText = Data[i].title;
//     bodyText = Data[i].body;
//     const newDiv = document.createElement("div", {
//       class: idOfUser,
//       id: objectId,
//     });
//     const newP1 = document.createElement("p");
//     const newP2 = document.createElement("p");

//     newDiv.classList.add("postBox");
//     newP1.classList.add("smallTitle");
//     newP2.classList.add("smallText");

//     const newElement1 = document.createTextNode(titleText);
//     const newElement2 = document.createTextNode(bodyText);

//     newP1.appendChild(newElement1);
//     newP2.appendChild(newElement2);

//     newDiv.appendChild(newP1);
//     newDiv.appendChild(newP2);

//     const currentBody = document.getElementById("Body");
//     currentBody.appendChild(newDiv);
//   }
// }

// async function getPosts() {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log({ data });
//     createPosts(data);
//   } catch (e) {
//     console.log({ message: "error recieved", e });
//   }
// }

// getPosts();

// //Task: use fetch and new js codes to create ui in html files.

// class Post {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//   }

//   create() {
//     console.log(this.title, this.description);
//   }
// }

import { Post } from "./post.js";

const post1 = new Post();

// async function main() {
//   const Data = await post1.getPosts();
//   post1.log();
//   post1.createPosts(Data);
// }

// Tests what is fetched from a website
async function main() {
  const Data = await post1.getPosts();
  post1.log();
}

main();
