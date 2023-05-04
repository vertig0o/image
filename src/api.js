import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID TflarXie64pEaw4TBSQyzh6-HDh2EXN4i49h-PsJzdM",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
