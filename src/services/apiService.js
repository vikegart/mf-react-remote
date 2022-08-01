export const userDataService = {
  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 0, name: "Tom" },
          { id: 1, name: "Don Pedro" },
          { id: 2, name: "Sir El Camino" },
          { id: 3, name: "aaaaaaaaaaaaaaaaaaaaa" },
        ]);
      }, 5000);
    });
  },
};
