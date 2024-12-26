function skillsMember() {
  return fetch('https://api.github.com/users/Member')
    .then(response => response.json())
    .then(data => data);
}