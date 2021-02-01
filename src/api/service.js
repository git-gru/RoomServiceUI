// const SERVICE_URL = "http://192.168.100.171:44397/api/Services";
import SERVICE_URL from '../config.js'

export const getAllServices = async () => {
  console.log("calling getAllService...");
  try {
    let response = await fetch(SERVICE_URL, {
      headers: {
        "Accept": "application/json; charset=utf-8",
        // "Accept": "	text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Content-Type": "application/json; charset=utf-8",
        "mode": "no-cors"
      },
      method: "GET",
    });
    let res = await response.json();
    // console.log("result",res);
    return res;
  } catch (error) {
    console.log("error", error);
    return error;
  }

}

export const activateService = async (serviceId, service) => {
  console.log("calling ActivateService...");
  try {
    let response = await fetch(SERVICE_URL + "/" + serviceId, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service),
      method: "PUT",
    });
    return response
  } catch (error) {
    console.log("error", error);
    return error;
  }
}