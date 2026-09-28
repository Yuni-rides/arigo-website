export interface DriverTool {
  id: string;
  title: string;
  description: string;
  icon: { src: string; width: number; height: number };
}

export interface DriverToolsContent {
  title: string;
  /** Second headline line, rendered in brand orange. */
  highlight: string;
  description: string;
  tools: DriverTool[];
}

export const driverToolsContent: DriverToolsContent = {
  title: "Spend less time on paperwork,",
  highlight: "more time on the road",
  description: "Arigo handles the admin, so drivers can focus on the road and the riders in their care.",
  tools: [
    {
      id: "workflows",
      title: "Optimize Workflows",
      description:
        "Guided, step-by-step task flows walk drivers through each part of their shift from clock-in through pre-ride safety checks.",
      icon: { src: "/images/workflows.png", width: 132, height: 132 },
    },
    {
      id: "stay-connected",
      title: "Stay Connected",
      description:
        "Real-time route updates, in-app dispatch messaging, and live ride notifications, straight from your driver device.",
      icon: { src: "/images/stay-connected.png", width: 220, height: 145 },
    },
    {
      id: "performance-feedback",
      title: "Get Performance Feedback",
      description:
        "Get paid for every completed ride, on a schedule that works around you not the other way around.",
      icon: { src: "/images/performance-feedback.png", width: 292, height: 194 },
    },
  ],
};
