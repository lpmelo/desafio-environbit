import { getDocs } from "firebase/firestore";

export const getMovies = async (dbcollection) => {
  let defaultData = [];
  let formattedData = [];
  try {
    const response = await getDocs(dbcollection);
    const responseDocs = response.docs;
    responseDocs.map((item) => {
      defaultData.push({ ...item._document.data.value.mapValue.fields });
    });

    if (defaultData.length) {
      let newItem = "";
      defaultData.map((item) => {
        newItem = {
          director: item.director.stringValue,
          country: item.country.stringValue,
          image: item.image.referenceValue,
          releaseDate: item.releaseDate.timestampValue,
          title: item.name.stringValue,
        };
        formattedData.push(newItem);
      });
    }

    return formattedData;
  } catch (err) {
    return err;
  }
};
