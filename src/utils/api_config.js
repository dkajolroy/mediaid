// CSR Hooks fetch request methods
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
