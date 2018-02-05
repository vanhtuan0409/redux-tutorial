export default {
  getPosts() {
    return Promise.resolve([
      {
        id: 1,
        title: "Post 1",
        body: "Sample body 1"
      },
      {
        id: 2,
        title: "Post 2",
        body: "Sample body 2"
      },
      {
        id: 3,
        title: "Post 3",
        body: "Sample body 3"
      },
      {
        id: 4,
        title: "Post 4",
        body: "Sample body 4"
      }
    ]);
  }
};
