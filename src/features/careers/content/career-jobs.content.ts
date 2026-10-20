import type { CareerJob } from "../types";

export const careerJobsContent = {
  banner: {
    src: "/images/careerBanner.png",
    alt: "Arigo transportation team",
  },
  description:
    "Explore opportunities to help patients and families through thoughtful, dependable transportation.",
  pageSize: 9,
};

export const careerJobs: CareerJob[] = [
  {
    slug: "nemt-driver-california",
    title: "NEMT Driver (Ambulatory & Wheelchair)",
    city: "Sacramento",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Transportation",
    description:
      "Help passengers reach medical appointments through safe driving and thoughtful assistance. This role supports ambulatory passengers and wheelchair users according to assigned trip requirements.",
    responsibilities: [
      "Review trip details and passenger assistance instructions.",
      "Complete vehicle and applicable accessibility-equipment checks.",
      "Assist passengers with boarding and exiting within your training.",
      "Follow wheelchair securement procedures when assigned.",
      "Report delays, incidents and trip updates to dispatch.",
    ],
    qualifications: [
      "Valid driver’s license appropriate for the assigned vehicle.",
      "Ability to meet applicable screening and driving-record requirements.",
      "Completion of required passenger-assistance and safety training.",
    ],
    preferred: [
      "Previous NEMT or accessible transportation experience.",
      "Familiarity with Sacramento medical facilities.",
    ],
    benefits: [
      "Meaningful work supporting access to healthcare.",
      "Experience in accessible passenger transportation.",
    ],
  },
  {
    slug: "nemt-driver-washington",
    title: "Medical Appointment Driver",
    city: "Seattle",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Transportation",
    description:
      "Provide dependable transportation for passengers attending scheduled medical appointments throughout the Seattle area.",
    responsibilities: [
      "Check pickup locations and appointment instructions before departure.",
      "Plan routes with consideration for traffic and arrival times.",
      "Maintain a clean, comfortable passenger environment.",
      "Communicate arrival updates and delays to dispatch.",
      "Follow the agreed passenger handoff instructions.",
    ],
    qualifications: [
      "Valid driver’s license appropriate for the vehicle.",
      "Ability to navigate safely in urban traffic.",
      "Respectful communication and reliable time management.",
    ],
    preferred: [
      "Professional passenger driving experience.",
      "Knowledge of Seattle streets and medical campuses.",
    ],
    benefits: [
      "Purposeful work helping passengers attend appointments.",
      "Opportunities to strengthen professional driving skills.",
    ],
  },
  {
    slug: "wheelchair-transport-driver-oakland",
    title: "Wheelchair Transportation Driver",
    city: "Oakland",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Accessible Transportation",
    description:
      "Support wheelchair users with safe, respectful transportation using an appropriately equipped vehicle and approved assistance procedures.",
    responsibilities: [
      "Inspect the ramp or lift before assigned trips.",
      "Follow approved wheelchair loading and securement procedures.",
      "Explain assistance steps clearly to passengers.",
      "Check accessibility instructions at pickup and destination.",
      "Report equipment concerns before operating the vehicle.",
    ],
    qualifications: [
      "Valid license appropriate for the assigned vehicle.",
      "Ability to complete accessibility-equipment training.",
      "Careful attention to safety procedures and passenger dignity.",
    ],
    preferred: ["Experience operating accessible vehicles.", "Previous wheelchair securement training."],
    benefits: [
      "Specialized experience in accessible transportation.",
      "Work that supports passenger independence.",
    ],
  },
  {
    slug: "patient-transport-driver-san-francisco",
    title: "Patient Transportation Driver",
    city: "San Francisco",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Transportation",
    description:
      "Help passengers travel between their pickup locations and healthcare facilities while providing a calm and professional ride experience.",
    responsibilities: [
      "Identify safe and permitted pickup locations.",
      "Confirm trip instructions with dispatch when necessary.",
      "Assist passengers within approved role boundaries.",
      "Drive carefully on busy streets and steep roads.",
      "Maintain accurate trip records.",
    ],
    qualifications: [
      "Valid driver’s license and required screening clearance.",
      "Confidence driving safely in dense city environments.",
      "Clear communication and attention to detail.",
    ],
    preferred: [
      "Knowledge of San Francisco healthcare locations.",
      "Previous customer-facing transportation work.",
    ],
    benefits: [
      "Community-focused work in passenger transportation.",
      "Experience coordinating complex urban pickups.",
    ],
  },
  {
    slug: "recurring-rides-driver-san-jose",
    title: "Recurring Medical Rides Driver",
    city: "San Jose",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Transportation",
    description:
      "Support passengers who rely on recurring transportation to scheduled treatments and appointments, following the assigned trip plan.",
    responsibilities: [
      "Review recurring trip schedules and updated instructions.",
      "Maintain professional, respectful passenger relationships.",
      "Notify dispatch promptly about cancellations or delays.",
      "Follow assigned pickup and return-trip arrangements.",
      "Document trip completion accurately.",
    ],
    qualifications: [
      "Valid license appropriate for the assigned vehicle.",
      "Reliable attendance and schedule management.",
      "Ability to follow updated trip instructions.",
    ],
    preferred: [
      "Experience with recurring passenger routes.",
      "Familiarity with San Jose and nearby healthcare facilities.",
    ],
    benefits: [
      "Meaningful involvement in passengers’ ongoing access to care.",
      "Experience managing recurring transportation schedules.",
    ],
  },
  {
    slug: "fleet-safety-coordinator-richmond",
    title: "Fleet Safety Coordinator",
    city: "Richmond",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Fleet Operations",
    description:
      "Help the operations team maintain organized vehicle records, track inspections and follow up on reported fleet safety concerns.",
    responsibilities: [
      "Track vehicle inspection and maintenance due dates.",
      "Review submitted vehicle checklists for missing information.",
      "Coordinate follow-up on reported equipment concerns.",
      "Maintain organized fleet documentation.",
      "Share vehicle availability updates with operations.",
    ],
    qualifications: [
      "Strong organizational and recordkeeping skills.",
      "Comfort using spreadsheets and digital tracking tools.",
      "Ability to communicate safety concerns clearly.",
    ],
    preferred: [
      "Fleet administration or maintenance coordination experience.",
      "Familiarity with passenger transportation operations.",
    ],
    benefits: [
      "Hands-on experience in fleet coordination.",
      "Work that supports safer transportation operations.",
    ],
  },
  {
    slug: "ride-dispatcher-tacoma",
    title: "Ride Dispatcher",
    city: "Tacoma",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Dispatch",
    description:
      "Coordinate assigned rides, communicate with drivers and help the team respond to schedule changes throughout the operating day.",
    responsibilities: [
      "Monitor assigned trips and driver status updates.",
      "Communicate changes to the relevant drivers.",
      "Record delays, cancellations and operational concerns.",
      "Escalate urgent issues through established procedures.",
      "Maintain clear shift handover notes.",
    ],
    qualifications: [
      "Clear verbal and written communication.",
      "Ability to prioritize several time-sensitive tasks.",
      "Accurate data entry and attention to detail.",
    ],
    preferred: [
      "Dispatch or transportation coordination experience.",
      "Familiarity with Tacoma and surrounding areas.",
    ],
    benefits: [
      "Experience in daily transportation coordination.",
      "A collaborative role supporting drivers and passengers.",
    ],
  },
  {
    slug: "patient-support-representative-kent",
    title: "Patient Support Representative",
    city: "Kent",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Customer Support",
    description:
      "Help passengers and family members understand transportation arrangements, share relevant information and connect with the appropriate team.",
    responsibilities: [
      "Respond professionally to ride-related questions.",
      "Confirm contact and trip details accurately.",
      "Document requests and follow-up actions.",
      "Refer scheduling changes to the appropriate team.",
      "Handle personal information according to company procedures.",
    ],
    qualifications: [
      "Patient, respectful customer communication.",
      "Accurate recordkeeping and computer skills.",
      "Ability to follow privacy and escalation procedures.",
    ],
    preferred: [
      "Customer support or appointment coordination experience.",
      "Experience assisting seniors or caregivers.",
    ],
    benefits: [
      "People-focused work supporting access to transportation.",
      "Opportunities to develop service coordination skills.",
    ],
  },
  {
    slug: "trip-scheduler-federal-way",
    title: "Medical Trip Scheduler",
    city: "Federal Way",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Scheduling",
    description:
      "Help organize transportation requests by collecting accurate trip information and coordinating schedules with the operations team.",
    responsibilities: [
      "Record requested pickup times and destination details.",
      "Check requests for incomplete or conflicting information.",
      "Coordinate scheduling questions with dispatch.",
      "Update trip records when arrangements change.",
      "Communicate confirmed arrangements through approved channels.",
    ],
    qualifications: [
      "Strong scheduling and organizational skills.",
      "Attention to detail when entering trip information.",
      "Professional telephone and written communication.",
    ],
    preferred: [
      "Transportation or medical appointment scheduling experience.",
      "Familiarity with scheduling software.",
    ],
    benefits: [
      "Experience planning essential transportation services.",
      "A role focused on organization and passenger support.",
    ],
  },
  {
    slug: "driver-recruitment-specialist-fremont",
    title: "Driver Recruitment Specialist",
    city: "Fremont",
    state: "California",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Recruitment",
    description:
      "Support driver recruitment by communicating with applicants, organizing candidate records and coordinating the next steps in the hiring process.",
    responsibilities: [
      "Respond to driver applicant inquiries.",
      "Explain confirmed role requirements and application steps.",
      "Schedule candidate conversations with the relevant team.",
      "Maintain accurate recruitment status records.",
      "Coordinate candidate handoffs to onboarding.",
    ],
    qualifications: [
      "Professional applicant communication.",
      "Strong follow-up and organizational skills.",
      "Ability to maintain confidential candidate records.",
    ],
    preferred: [
      "Recruitment or applicant coordination experience.",
      "Familiarity with transportation recruitment.",
    ],
    benefits: [
      "Experience developing a driver recruitment pipeline.",
      "Collaboration with recruitment and operations teams.",
    ],
  },
  {
    slug: "driver-onboarding-coordinator-auburn",
    title: "Driver Onboarding Coordinator",
    city: "Auburn",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Onboarding",
    description:
      "Guide prospective drivers through documentation and training steps, helping the team maintain clear and accurate onboarding records.",
    responsibilities: [
      "Explain onboarding steps using approved guidance.",
      "Track submitted documents and outstanding items.",
      "Send reminders about required training and documentation.",
      "Escalate eligibility questions to the authorized reviewer.",
      "Coordinate readiness updates with operations.",
    ],
    qualifications: [
      "Careful document handling and recordkeeping.",
      "Clear written communication and consistent follow-up.",
      "Ability to follow established review procedures.",
    ],
    preferred: [
      "Onboarding or compliance administration experience.",
      "Experience maintaining digital document trackers.",
    ],
    benefits: [
      "Experience coordinating structured onboarding processes.",
      "A role supporting driver readiness and team organization.",
    ],
  },
  {
    slug: "transportation-operations-coordinator-puyallup",
    title: "Transportation Operations Coordinator",
    city: "Puyallup",
    state: "Washington",
    employmentType: "To be confirmed",
    workMode: "On-site",
    department: "Operations",
    description:
      "Support daily transportation operations by keeping trip information organized and helping teams coordinate operational changes.",
    responsibilities: [
      "Review daily trip updates with dispatch and scheduling.",
      "Track unresolved operational requests.",
      "Coordinate follow-up between relevant departments.",
      "Prepare accurate daily activity summaries.",
      "Identify recurring issues for supervisor review.",
    ],
    qualifications: [
      "Strong coordination and task-prioritization skills.",
      "Accurate reporting and spreadsheet skills.",
      "Ability to communicate clearly across teams.",
    ],
    preferred: ["Transportation operations experience.", "Experience preparing daily operational reports."],
    benefits: [
      "Exposure to several areas of transportation operations.",
      "Opportunities to strengthen coordination and reporting skills.",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return careerJobs.find((job) => job.slug === slug);
}

export function getJobSlugs() {
  return careerJobs.map((job) => job.slug);
}
