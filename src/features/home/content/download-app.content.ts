import type { DownloadAppContent } from "../types";

const stores = {
  googlePlay: "https://play.google.com/store/apps",
  appStore: "https://apps.apple.com",
};

export const downloadAppContent: DownloadAppContent = {
  titlePrefix: "Download",
  downloadHeading: "Download now",
  downloadText: "Scan the QR code with your smartphone camera",
  apps: [
    {
      id: "driver",
      name: "Arigo Driver app",
      steps: [
        { title: "Download the app", description: "Available on Google Play and the App store" },
        { title: "Sign up in a few steps", description: "Using your Basic Details" },
        { title: "Enjoy Arigo", description: "Perform trip and earn handsome amount" },
      ],
      image: { src: "/images/driverApp.png", alt: "Arigo Driver app login screen" },
      downloadUrl: "https://arigo.com/download/driver",
      stores,
    },
    {
      // TODO: swap image + copy when the user-app design arrives.
      id: "user",
      name: "Arigo User app",
      steps: [
        { title: "Download the app", description: "Available on Google Play and the App store" },
        { title: "Create your account", description: "Add your child and pickup details" },
        { title: "Book a ride", description: "Track every trip live and ride with peace of mind" },
      ],
      image: { src: "/images/driverApp.png", alt: "Arigo User app login screen" },
      downloadUrl: "https://arigo.com/download/user",
      stores,
    },
  ],
};
