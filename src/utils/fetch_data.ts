const fetchData = async (endpoint: string) => {
  const data = await (await fetch(`${endpoint}?format=json`)).json();
  return data;
};

export default fetchData;
