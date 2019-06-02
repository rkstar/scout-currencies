import { buildUrl, getData } from './resolvers';

const slowPrefix = 'http://slowwly.robertomurray.co.uk/delay/1800/url/';
const apiBaseUrl = 'https://api.exchangeratesapi.io/latest';

describe('test buildUrl functionality', () => {
  it('should return api url by itself', () => {
    const url = buildUrl();
    expect(url).toBe(apiBaseUrl);
  });

  it('should return api url with slow prefix', () => {
    const url = buildUrl({ slow: true });
    expect(url).toBe(slowPrefix + apiBaseUrl);
  });

  it('should return api url with ?base=CAD', () => {
    const url = buildUrl({ base: 'CAD' });
    expect(url).toBe(`${apiBaseUrl}?base=CAD`);
  });

  it('should return api url with slow prefix and ?base=CAD', () => {
    const url = buildUrl({ slow: true, base: 'CAD' });
    expect(url).toBe(`${slowPrefix}${apiBaseUrl}?base=CAD`);
  });
});

describe('test getData resolver', () => {
  it('should return an object', async () => {
    const data = await getData();
    expect(data).toBeInstanceOf(Object);
  });

  it('should have base of EUR', async () => {
    const { base } = await getData();
    expect(base).toBe('EUR');
  });

  it('should have base of CAD', async () => {
    // we have to pass null as the first param
    // to getData to mimic the shape of the graphql
    // input to this resolver function
    const { base } = await getData(null, { base: 'CAD' });
    expect(base).toBe('CAD');
  });

  it('should return default data, just slowly (approx 2000ms) ==>', async () => {
    const data = await getData(null, { slow: true });
    expect(data).toBeInstanceOf(Object);
  });
});
