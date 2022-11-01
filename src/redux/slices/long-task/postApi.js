// A mock function to mimic making an async request for data
export async function fetchPost() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log("dat", data);
  return data;
}
