import axios from "axios";

export const getHello = async (path: string) => {
	const { data } = await axios.get(path);
  return data;
};
