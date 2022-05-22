const fetcher = (url) => fetch(`${process.env.REACT_APP_BASE_API_URL}${url}`).then((res) => res.json());

export {
  fetcher,
};
