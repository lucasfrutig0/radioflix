import config from "../config";

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObj) {
  console.log(videoObj);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(videoObj),
  }).then(async (res) => {
    if (res.ok) {
      const result = await res.json();
      console.log(result);
      return result;
    }

    throw new Error("Não foi possível pegar os dados :( ");
  });
}

export default {
  create,
};
