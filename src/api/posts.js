export default {
  getPosts() {
    return Promise.resolve([
      {
        id: 1,
        title: "Post 1",
        body: "Sample body"
      },
      {
        id: 2,
        title: "Post 2",
        body: "Sample body"
      },
      {
        id: 3,
        title: "Post 3",
        body: "Sample body"
      },
      {
        id: 4,
        title: "Post 4",
        body: "Sample body"
      }
    ]);
  }
};
