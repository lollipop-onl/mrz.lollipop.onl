import qs from 'qs';

export const replaceQuery = (query: Record<string, string | number>): void => {
  const sanitizedQuery = Object.fromEntries(Object.entries(query).map(([key, value]) => [key, `${value}`.slice(0, 50)]));
  const queryString = qs.stringify(sanitizedQuery);

  window.history.replaceState('', '', `?${queryString}`);
};

export const getQueries = (): Record<string, string | undefined> => {
  const query = qs.parse(location.search.replace(/^\?/, ''));

  return Object.fromEntries(Object.entries(query).map(([key, value]) => {
    let optimizedValue: string | undefined;

    if (Array.isArray(value)) {
      const v = value[0];

      if (typeof v !== 'object' && !Array.isArray(value[0])) {
        optimizedValue = v;
      }
    } else if (typeof value !== 'object') {
      optimizedValue = value;
    }

    return [`${key}`, optimizedValue];
  }));
}
