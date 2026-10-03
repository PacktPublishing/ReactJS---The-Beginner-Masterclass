/** @format */

const BASE_URL = 'https://www.googleapis.com/books/v1';
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY; //Google Books API key loaded from Vite environment variables


async function fetchBooks(query, controller) {
  try {
    const response = await fetch(`${BASE_URL}/volumes?q=${query}&key=${API_KEY}`, {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Error fetching books:', error.message);
      throw error;
    }
  }
}
export default fetchBooks;
