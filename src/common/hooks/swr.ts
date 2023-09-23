import useSWR, { mutate, SWRConfiguration } from "swr";

const fetcher = (url: string, token: string) =>
  fetch(url, { headers: { Authorization: "Bearer " + token } }).then((res) =>
    res.json()
  );

export const useRoutes = (token: string | null) => {
  const { data, error, mutate } = useSWR(
    () => (token ? ["/api/user/routes", token] : null),
    fetcher
  );
  return {};
};
