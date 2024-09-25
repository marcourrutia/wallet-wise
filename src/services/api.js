const baseUrl = "http://localhost:5050";

const handleFetch = async (endpoint, method, body) => {
  const url = `${baseUrl}${endpoint}`;

  const options = {
    method,
    headers: { "Content-Type": "application/json" },
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

export const get = (endpoint) => handleFetch(endpoint, "GET");
export const post = (endpoint, body) => handleFetch(endpoint, "POST", body);
export const put = (endpoint, body) => handleFetch(endpoint, "PUT", body);
export const del = (endpoint) => handleFetch(endpoint, "DELETE");
