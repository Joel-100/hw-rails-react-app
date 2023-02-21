export async function fetchRandomGreeting() {
  const response = await fetch('api/random-greeting');
  const data = await response.json();
  return data.message;
}