export function getUrl() {
  // dev and prod api moment
  if(process.env.REACT_APP_USE_DEV) {
    return "http://localhost:3002/"
  } else {
    return `https://api.saahild.com/api/hc-stickers-matchups/`
  }
}
export interface Sticker {
  name: string;
  picture: string;
  sku: string;
}
export interface Matchup {
  hash: string;
  sticker1: Sticker;
  sticker2: Sticker;
}
// yea this aint being exploted like high seas matchups (data is to the LOW)
export function getRequest(endpoint: string, method?: string, data?: any) {
  return fetch(getUrl() + endpoint, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
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
export const getMatchups = createFunctionForEndpoint("/matchups?id="+localStorage.getItem('username'));
