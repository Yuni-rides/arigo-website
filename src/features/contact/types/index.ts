export type ContactFieldType = "text" | "email" | "tel" | "textarea";

export type ContactField = {
  name: string;
  label: string;
  placeholder: string;
  type: ContactFieldType;
  required?: boolean;
  width?: "half" | "full";
};

export type ContactSupportContent = {
  title: string;
  description: string;
  headerArt: { src: string; alt: string; width: number; height: number };
  office: {
    city: string;
    suffix: string;
    notice: string;
    art: { src: string; width: number; height: number; alt: string };
  };
  fields: ContactField[];
  submitLabel: string;
};