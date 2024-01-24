import { handleResponse, handleError } from "./apiUtil";
export function apiCaller(url, method, params) {
  // const dispatch = useDispatch();
  var options = {};
  options.method = method;
  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  var query = "";
  if (params && Object.keys(params).length > 0) {
    // params.languageId = configurations.languageId;
    // params.channelId = 1;
    // if(params.regionId){
    // params.regionId = configurations.regionId;
    // }
    if (method == "POST") {
      options.headers = headers;
      options.body = JSON.stringify(params);
    } else {
      query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
    }
  }
  return new Promise((resolve, reject) => {
    if (method === "POST") {
      fetch(url, options)
        .then((response) => {
          if (response.status === 200) {
            response.json().then((json) => {
              resolve(json);
            });
          }
          if (response.status === 500) {
            window.location.href = window.location.origin + "/error";
          }
          if (response.status === 404) {
            window.location.href = window.location.origin + "/error";
          }
        })
        .catch(handleError);
    } else {
      fetch(url + query)
        .then((response) => {
          if (response.status === 200) {
            response.json().then((json) => {
              resolve(json);
            });
          }
          if (response.status === 500) {
            window.location.href = window.location.origin + "/error";
          }
          if (response.status === 404) {
            window.location.href = window.location.origin + "/error";
          }
        })
        .catch(handleError);
    }
  });
}
