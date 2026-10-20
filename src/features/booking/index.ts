/**
 * Public API of the booking feature.
 * Routes and other features import ONLY from here.
 */
export { BookingSection } from "./components/booking-section";
export { bookingContent } from "./content/booking.content";
export { submitBooking } from "./services/submit-booking";
export type { BookingContent, BookingField, ServiceId } from "./types";
