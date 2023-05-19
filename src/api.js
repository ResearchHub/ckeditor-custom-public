function getApiRoot({ PRODUCTION_SITE, STAGING_SITE, LOCALHOST }) {
  if (process.env.REACT_APP_API_ROOT) {
    return process.env.REACT_APP_API_ROOT;
  } else if (process.env.REACT_APP_ENV === "staging") {
    return "https://" + STAGING_SITE + "/api/";
  } else if (process.env.NODE_ENV === "production") {
    return "https://" + PRODUCTION_SITE + "/api/";
  } else {
    return "http://" + LOCALHOST + "/api/";
  }
}

const authTokenName = "researchhub.auth.token";

const apiRoot = {
  PRODUCTION_SITE: "backend.researchhub.com",
  STAGING_SITE: "staging-backend.researchhub.com",
  LOCALHOST: "localhost:8000",
};

function setupRequestHeaders(noContentType, authTokenName, overrideToken) {
  const token = window.localStorage[authTokenName];

  if (overrideToken) {
    token = overrideToken;
  }

  var headers = {
    "Content-Type": "application/json",
  };

  if (noContentType) {
    headers = {};
  }

  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }

  return headers;
}

export function POST_FILE_CONFIG(data, overrideToken) {
  // authorization token
  const headers = setupRequestHeaders(true, authTokenName, overrideToken);
  return {
    method: "post",
    body: data,
    headers: headers,
  };
}

export function generateApiUrl(url) {
  return getApiRoot(apiRoot) + url;
}
