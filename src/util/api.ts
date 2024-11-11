// yea this aint being exploted like high seas matchups (data is to the LOW)
export function getRequest(endpoint: string, method?: string, data?: any) {
  return fetch(`https://api.saahild.com/hc-stickers-matchups` + endpoint, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_SAAHILD_API_KEY}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
export function createFunctionForEndpoint(
  endpoint: string,
  method?: string,
  data?: any,
) {
  return async function () {
    return await getRequest(endpoint, method, data);
  };
}
export const getLeaderboard = createFunctionForEndpoint("/leaderboard");
// export async function getLeaderboard() {
// const data = await getRequest("/leaderboard")
// return data
// }
