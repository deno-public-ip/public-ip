// @ts-ignore allowing typedoc to build
import fetchData from '../utils/fetch_data.ts';

export const v4 = async () => {
  const ENDPOINT_IPV4 = 'https://api.ipify.org';
  const response = await fetchData(ENDPOINT_IPV4);
  return response.ip;
}
