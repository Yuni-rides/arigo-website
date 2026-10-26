import { bookingContent } from "../../booking/content/booking.content";

export interface DriverApplicationField {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "number" | "select" | "textarea";
  options?: string[];
  required?: boolean;
}

export const driverApplicationContent = {
  title: "Drive with Purpose",
  description:
    "Join Arigo and drive change with us! Earn great pay while making a meaningful impact in the lives of patients and families.",
  photo: bookingContent.photo,
  headerArt: bookingContent.headerArt,
  submitLabel: "Submit request",
};

export const driverApplicationFields: DriverApplicationField[] = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "joe@gmail.com",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Contact Number",
    placeholder: "Number",
    type: "tel",
    required: true,
  },
  {
    name: "city",
    label: "City",
    placeholder: "City name",
    type: "text",
    required: true,
  },
  {
    name: "state",
    label: "State",
    placeholder: "State name",
    type: "text",
    required: true,
  },
  {
    name: "vehicle",
    label: "What type of vehicle do you have?",
    placeholder: "e.g. Sedan, SUV, Minivan, WAV",
    type: "text",
    required: true,
  },
  {
    name: "drivingExperience",
    label: "Years of driving experience",
    placeholder: "Years",
    type: "number",
    required: true,
  },
  {
    name: "careExperience",
    label: "Experience assisting patients/seniors?",
    placeholder: "Yes / No",
    type: "select",
    options: ["Yes", "No"],
    required: true,
  },
  {
    name: "service",
    label: "Service interested in",
    placeholder: "NEMT Driver / Medication Delivery...",
    type: "text",
    required: true,
  },
  {
    name: "mobility",
    label: "Mobility Needs",
    placeholder: "Ambulatory / Wheelchair / Stretcher",
    type: "select",
    options: ["Ambulatory", "Wheelchair", "Stretcher"],
    required: true,
  },
  {
    name: "about",
    label: "Tell us about yourself (optional)",
    placeholder: "Details (e.g. prior caregiving, CNA, EMT, CPR training)",
    type: "textarea",
  },
];