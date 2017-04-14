const addComment = (author, body) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const jsonBody = JSON.stringify({ author, body });

  const options = {
    method: 'POST',
    headers,
    body: jsonBody
  };

  return fetch('/api/comments', options)
    .then(response => response.json())
    .then(data => data.id)
  ;
};

const getComments = () => {
  return fetch('/api/comments')
    .then(response => response.json())
  ;
};

export { addComment, getComments };
