export type ServiceId = "medical-ride" | "medication-delivery";

export type FieldType = "text" | "email" | "tel" | "datetime-local" | "select" | "radio";

export interface BookingField {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  /** Half-width on desktop by default; `full` spans the row. */
  width?: "half" | "full";
  required?: boolean;
  options?: string[];
  /** Which services show this field. Omit to show it for every service. */
  services?: ServiceId[];
}

export interface BookingContent {
  title: string;
  description: string;
  submitLabel: string;
  serviceField: {
    name: string;
    label: string;
    placeholder: string;
    options: { id: ServiceId; label: string }[];
  };
  fields: BookingField[];
  photo: { src: string; alt: string; width: number; height: number };
  headerArt: { src: string; alt: string; width: number; height: number };
}
