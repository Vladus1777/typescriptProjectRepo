import { TCollection, TCollectionItem } from "../types/collectionType";
// add img for the meantime
const DUMMY_COLLECTION_ITEMS: TCollectionItem[] = [
  {
    name: "Chi0",
    id: "id0",
    img: "https://via.placeholder.com/800x600",
  },
  {
    name: "Chi1",
    id: "id1",
    img: "https://via.placeholder.com/800x600",
  },
];
// Collections 😀
const DUMMY_COLLECTIONS: TCollection[] = [
  {
    name: "Collection 1",
    id: "id1",
    items: DUMMY_COLLECTION_ITEMS,
    img: "https://via.placeholder.com/400x450",
  },
  {
    name: "Collection 2",
    id: "id2",
    items: DUMMY_COLLECTION_ITEMS,
    img: "https://via.placeholder.com/500x600",
  },
  {
    name: "Collection 3",
    id: "id3",
    items: DUMMY_COLLECTION_ITEMS,
    img: "https://via.placeholder.com/400x600",
  },
  {
    name: "Collection 4",
    id: "id4",
    items: DUMMY_COLLECTION_ITEMS,
    img: "https://via.placeholder.com/350x200",
  },
  {
    name: "Collection 5",
    id: "id5",
    items: DUMMY_COLLECTION_ITEMS,
    img: "https://via.placeholder.com/500x450",
  },
];

export const getCollections = async (): Promise<TCollection[]> =>
  new Promise((resolve) => {
    console.log("getCollections()");
    setTimeout(() => {
      resolve(DUMMY_COLLECTIONS);
    }, 1000);
  });

export const getCollectionById = async (id: string): Promise<TCollection[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const filterCollection = DUMMY_COLLECTIONS.filter(
        (collection) => collection.id === id
      );
      console.log("getCollection()", filterCollection);
      resolve(filterCollection);
    }, 1000);
  });
