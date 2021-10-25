import { $fetch } from "ohmyfetch";

const apiUrl = "https://my.api.mockaroo.com/tasks.json?key=c1eb9230";

export default async (req, res) => {
  const data = await $fetch(apiUrl);
  // console.log(data);
  return {
    data,
  };
};
