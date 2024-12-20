export const getGifts = async (category) => {
  const apiKey = `FwjmXE7B9d6KP7xzo2OfGPyk1pa9i4ZH`;
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifts;
};
