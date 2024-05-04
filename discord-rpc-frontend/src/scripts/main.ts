import axios from "axios";

export const fetchAssets = async (appId: string) => {
  const response = await axios.get(`https://discord.com/api/oauth2/applications/${appId}/assets`);
  return response.data;
};
