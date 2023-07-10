// An API call call to get the 50 most recent launches
function getLaunchData(): Promise<Response> {
  return fetch(
    "https://api.spacexdata.com/v3/launches?limit=50&sort=launch_date_utc&order=desc"
  );
}

export async function getLaunchDataToJSON(): Promise<any> {
  return await (await getLaunchData()).json();
}
