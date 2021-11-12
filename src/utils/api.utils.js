const API_ENDPOINT = 'https://api.jungledevs.com/api/v1/';

const fetchServer = ({
  path,
  method = 'POST',
  headers = { 'Content-Type': 'application/json' },
  body,
}) =>
  fetch(`${API_ENDPOINT}${path}`, {
    method,
    headers,
    body: JSON.stringify({ ...body }),
  });

export default {
  subscribeToNewsletter: ({ name, email }) =>
    fetchServer({ path: 'challenge-newsletter/', body: { name, email } }).then(
      (response) => response.json()
    ),
};
