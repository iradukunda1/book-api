const albumList = require("express").Router();
const axios = require("axios");

albumList.get("/album/:albumId", async (req, res) => {
  const { albumId } = req.params;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );
  const formattedData = data.map((res) => {
    return {
      id: res.id,
      title: res.title,
      thumbnailUrl: res.thumbnailUrl,
    };
  });
  res.send(formattedData);
});
module.exports = albumList;
