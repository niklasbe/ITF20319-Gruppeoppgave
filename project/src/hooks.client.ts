import { loadTours, loadBookedTours } from '$lib/Tour';


// Load the tours and booked tours from local storage.
// These functions retrieve the "tours" and "bookedTours" items from local storage, respectively.
// If these items exist, they parse the JSON strings into arrays of Tour objects.
loadTours();
loadBookedTours();