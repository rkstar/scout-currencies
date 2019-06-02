const buildUrl = ({ slow, base }) => {
  const prefix = slow
    ? 'http://slowwly.robertomurray.co.uk/delay/1800/url/'
    : '';
  const params = base ? `?base=${base}` : '';
  const url = 'https://api.exchangeratesapi.io/latest';
  return `${prefix}${url}${params}`;
};

export const getData = async (__, { error, ...params }) => {
  if (error) throw new Error('an error happened.');
  const response = await fetch(buildUrl(params));
  const data = await response.json();
  return data;
};

export default {
  Query: {
    getData,
  },
};
