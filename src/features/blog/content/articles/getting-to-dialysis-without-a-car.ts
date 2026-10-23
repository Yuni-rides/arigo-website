import type { BlogArticle } from "../../types";

export const gettingToDialysisWithoutACar: BlogArticle = {
  slug: "getting-to-dialysis-without-a-car",
  title: "Getting to dialysis without a car",
  category: "Patients & Families",
  date: "Oct 23, 2026",
  author: "Arigo",
  metaTitle: "Getting to Dialysis Without a Car: Your Ride Options",
  metaDescription:
    "No car and dialysis three times a week? Here are your ride options, from Medicaid transportation to paratransit, and how to set them up.",
  keywords: [
    "dialysis transportation",
    "rides to dialysis",
    "dialysis transport options",
    "how to get to dialysis appointments",
  ],
  banner: {
    src: "/images/getting-to-dialysis-without-a-car.png",
    alt: "A dialysis patient being helped into a wheelchair-accessible vehicle outside a treatment center",
  },
  intro:
    "Most people need to visit the dialysis center almost three times a week. It can take roughly three to four hours a session. The trip each way along with the waiting, and one ride that falls through is a real problem.",
  introParagraphs: ["You have more options than it feels like:"],
  sections: [
    {
      id: "start-with-the-social-worker",
      heading: "Start with the clinic's social worker",
      paragraphs: [
        "Dialysis centers have a social worker on staff, and transportation is one of the first things patients bring to them. They'll know what's available locally, which services run on time, and how other patients on your shift get there. Ask before you go searching anywhere else. It's the shortest route to a real answer.",
      ],
    },
    {
      id: "medicaid-transportation",
      heading: "Medicaid transportation",
      paragraphs: [
        "If you have Medicaid, rides to dialysis are exactly what its transportation benefit is for. Federal rules require state programs to make sure members can get to covered medical care, and dialysis is predictable, which makes it easy to schedule.",
      ],
    },
    {
      id: "medicare-advantage-and-other-plans",
      heading: "Medicare Advantage and other plans",
      paragraphs: [
        "Original Medicare usually doesn't pay for routine rides. Some Medicare Advantage plans include a set number of trips a year. Read your plan's benefits and ask what the cap is.",
      ],
    },
    {
      id: "paratransit",
      heading: "Paratransit",
      paragraphs: [
        "Most public transit systems run a paratransit service for people who can't use regular buses because of a disability. You apply, often with a form your doctor completes, and approval can take a few weeks. It generally runs near regular bus routes and often needs booking a day ahead.",
        "It can work well for dialysis.",
      ],
    },
    {
      id: "volunteer-and-community-drivers",
      heading: "Volunteer and community drivers",
      paragraphs: [
        "Area agencies on aging, faith groups and local charities sometimes run volunteer driver programs. Availability varies a lot, and most volunteers can't take a wheelchair. Good as one piece of the plan. Risky as the whole plan.",
      ],
    },
    {
      id: "private-medical-transportation",
      heading: "Private medical transportation",
      paragraphs: [
        "When nothing else fits, a private company can run a standing schedule. You pay out of pocket, so ask for the price of a full week, not one ride, and get it in writing.",
      ],
    },
    {
      id: "set-it-up-before-you-need-it",
      heading: "Set it up before you need it",
      paragraphs: [
        "Some of these take weeks. Paratransit approval, Medicaid ride set-up and doctor's forms don't happen overnight. If you're starting dialysis soon, begin the paperwork the day you get your schedule, and have a short-term plan, such as a private ride or a friend on call, until the longer one is approved.",
      ],
    },
    {
      id: "what-to-ask",
      heading: "What to ask, whichever way you go",
      bullets: [
        { text: "Can the ride be a standing booking, not one I make each time?" },
        { text: "What's the pickup window, and who do I call when it's missed?" },
        { text: "Does the driver wait for me after treatment, or is the ride home a separate pickup?" },
        {
          text: "Can the driver help me from the door, and does the vehicle suit my chair if I use one?",
        },
      ],
      outro: [
        "After a session, many people are drained, lightheaded or cold. A bus transfer and a long walk is a bad way to end the day. Pick something that gets you from door to door.",
      ],
    },
    {
      id: "dont-rely-on-one-favor",
      heading: "Don't rely on one favor",
      paragraphs: [
        "For a lot of people the plan is a neighbor, a sibling or a friend. It works until their car breaks down, their shift changes, or they get tired. That's not a character flaw, it's just the way it goes with favors.",
        "Build a second option even if you mostly use the first. And tell the clinic if your ride situation is shaky. They would rather shift your time slot than watch you miss a session.",
      ],
    },
    {
      id: "ride-to-dialysis-with-arigo",
      heading: "Ride to dialysis with Arigo",
      paragraphs: [
        "Arigo is preparing to offer non-emergency medical transportation in Washington and California. Tell us you need rides to dialysis when you request a trip, and we'll confirm what's available in your state.",
      ],
      cta: { label: "Request a ride", href: "/#request" },
    },
    {
      id: "frequently-asked-questions",
      heading: "Frequently asked questions",
      faqs: [
        {
          question: "Does Medicare pay for rides to dialysis?",
          answer:
            "Original Medicare usually doesn't cover routine rides to treatment. It covers an ambulance only when it's medically necessary. Some Medicare Advantage plans include rides, often with a yearly limit, so check yours.",
        },
        {
          question: "Can I get a standing ride so I don't rebook every week?",
          answer:
            "Often, yes. Many Medicaid transportation programs and private companies can set up a standing schedule. Ask when you call, because it isn't always offered by default.",
        },
        {
          question: "What if I use a wheelchair?",
          answer:
            "Say so when you book. You'll need a wheelchair accessible vehicle, and the provider should know your chair's size and whether it's powered. Ask whether the lift or ramp handles it.",
        },
        {
          question: "How do I apply for paratransit?",
          answer:
            "Contact your local transit agency. You'll usually fill out an application with a section your doctor completes. Approval can take a few weeks, so start as early as you can.",
        },
      ],
    },
  ],
};
