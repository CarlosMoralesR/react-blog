const BASE_URL = "http://localhost:3001";

export const getEntries = async () => {
  const response = await fetch(`${BASE_URL}/entries`);
  return await response.json();
};

export const addEntry = async (newEntry) => {
  const response = await fetch(`${BASE_URL}/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  });
  return await response.json();
};

export const deleteEntry = async (entryId) => {
  const response = await fetch(`${BASE_URL}/entries/${entryId}`, {
    method: "DELETE",
  });
  return response.json();
};
