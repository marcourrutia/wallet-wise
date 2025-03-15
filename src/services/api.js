const baseUrl = process.env.REACT_APP_BASE_URL;

const handleFetch = async (endpoint, method, body, token) => {
  const url = `${baseUrl}${endpoint}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const status = response.status;

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { data, status, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, status: null, error: error };
  }
};

export const get = (endpoint, token) => handleFetch(endpoint, "GET", "", token);
export const post = (endpoint, body, token) =>
  handleFetch(endpoint, "POST", body, token);
export const put = (endpoint, body) => handleFetch(endpoint, "PUT", body);
export const del = (endpoint) => handleFetch(endpoint, "DELETE");
