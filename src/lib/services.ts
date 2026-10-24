import { Car, ShoppingBasket, HeartHandshake, Users, Pill, type LucideIcon } from "lucide-react";
import { photos, type Photo } from "@/lib/photos";

// Full class strings so Tailwind picks them up
const accents = {
  amber: {
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    icon: "text-amber-600",
    headline: "text-amber-800 decoration-amber-300",
    panelLabel: "text-amber-400",
    number: "bg-amber-50 text-amber-700",
  },
  sky: {
    badge: "bg-sky-50 text-sky-700 border-sky-100",
    icon: "text-sky-600",
    headline: "text-sky-800 decoration-sky-300",
    panelLabel: "text-sky-400",
    number: "bg-sky-50 text-sky-700",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 border-rose-100",
    icon: "text-rose-600",
    headline: "text-rose-800 decoration-rose-300",
    panelLabel: "text-rose-400",
    number: "bg-rose-50 text-rose-700",
  },
  emerald: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: "text-emerald-600",
    headline: "text-emerald-800 decoration-emerald-300",
    panelLabel: "text-emerald-400",
    number: "bg-emerald-50 text-emerald-700",
  },
  indigo: {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-100",
    icon: "text-indigo-600",
    headline: "text-indigo-800 decoration-indigo-300",
    panelLabel: "text-indigo-400",
    number: "bg-indigo-50 text-indigo-700",
  },
};

export type Service = {
  slug: string;
  title: string;
  navDesc: string;
  icon: LucideIcon;
  photo: Photo;
  badge: string;
  accent: (typeof accents)[keyof typeof accents];
  summary: string;
  highlights: string[];
  page: {
    metaDescription: string;
    headline: [lead: string, accent: string];
    intro: string;
    storyTitle: string;
    story: string[];
    checks: string[];
    panel: { label: string; title: string; text: string; points: string[] };
    listTitle: string;
    listIntro: string;
    list: { title: string; desc: string }[];
  };
};

// Same five services, in the same order, as the client's flyer
export const services: Service[] = [
  {
    slug: "appointments",
    title: "Transport to Appointments",
    navDesc: "GP, hospital, dentist and optician visits",
    icon: Car,
    photo: photos.transport,
    badge: "Health & Appointments",
    accent: accents.amber,
    summary:
      "Door-to-door lifts to GP, hospital, dentist and optician appointments, with company in the waiting room.",
    highlights: [
      "Door-to-door in an insured car",
      "QMC, City Hospital & local GPs",
      "Company in the waiting room",
      "Notes taken for the family",
    ],
    page: {
      metaDescription:
        "Door-to-door transport and company for GP, hospital, dentist and optician appointments across Nottingham and surrounding areas.",
      headline: ["A calm lift to ", "every appointment"],
      intro:
        "Getting to a clinic shouldn't mean a stressful bus ride or a long wait alone. We pick up from the front door, stay through the appointment and see them safely home.",
      storyTitle: "From the front door to the doctor's room and home again",
      story: [
        "Car parks at QMC and City Hospital are busy and the corridors are long. We arrive early, help gather letters, glasses and hearing aids, drop off at the right entrance and stay alongside the whole time.",
        "If the family would like it, we sit in on the consultation, jot down what the doctor says and send a short update the same day.",
      ],
      checks: [
        "Door-to-door in a business-insured car",
        "Company in the waiting room",
        "Consultation notes for the family",
        "Prescription pick-up on the way home",
      ],
      panel: {
        label: "Family updates",
        title: "Clear notes for busy families",
        text: "Families often worry about missed details. Did the doctor change the tablets? When is the next scan?",
        points: [
          "Follow-up dates and instructions written down",
          "A message once they're safely home",
          "Prescriptions checked before leaving the pharmacy",
        ],
      },
      listTitle: "Appointments we regularly help with",
      listIntro: "We know the routes, parking and entrances at Nottingham's main hospitals and clinics.",
      list: [
        { title: "Hospital outpatient clinics", desc: "Queen's Medical Centre, Nottingham City Hospital and the Treatment Centre." },
        { title: "GP surgeries & health checks", desc: "Checking in at reception and calm company while they wait to be called." },
        { title: "Dentist & podiatry", desc: "Regular dental checks and foot care without the worry of getting there." },
        { title: "Optician & hearing clinics", desc: "Eye tests, fitting new glasses and hearing aid appointments." },
        { title: "Blood tests & jabs", desc: "Early-morning blood tests and seasonal flu or COVID vaccinations." },
        { title: "Hairdresser & barber", desc: "A regular trim at their favourite salon in West Bridgford, Beeston or Arnold." },
      ],
    },
  },
  {
    slug: "shopping",
    title: "Shopping & Errands",
    navDesc: "Supermarket trips, post office and bank",
    icon: ShoppingBasket,
    photo: photos.shopping,
    badge: "Everyday Errands",
    accent: accents.sky,
    summary:
      "The weekly food shop, post office, bank and library, done together or picked up for them.",
    highlights: [
      "Weekly supermarket shop",
      "Post office & bank visits",
      "Bags carried in and unpacked",
      "Shop with them or for them",
    ],
    page: {
      metaDescription:
        "Help with the weekly shop and everyday errands across Nottingham: supermarket trips, post office, bank, library and more.",
      headline: ["Help with the shopping and ", "everyday errands"],
      intro:
        "The weekly shop can be the hardest job of the week once carrying bags or standing in queues gets difficult. We go with them, or go for them, and put everything away at home.",
      storyTitle: "The weekly shop, without the heavy bags",
      story: [
        "Most people want to keep choosing their own food. We drive to the supermarket or town centre, push the trolley, reach the top shelf and carry the bags in at home.",
        "On days when going out is too much, we take a list, do the shop for them and bring back the receipt and the change.",
      ],
      checks: [
        "Supermarket trips with a familiar face",
        "Bags carried in and unpacked",
        "Shopping from a list when they can't go out",
        "Receipts and change always returned",
      ],
      panel: {
        label: "Little jobs add up",
        title: "Errands that keep life running",
        text: "Small errands pile up quickly when getting out is hard. One visit can tick off several.",
        points: [
          "Post office parcels and pension queries",
          "Bank visits and paying bills",
          "Library books returned and new ones picked up",
        ],
      },
      listTitle: "Errands we often help with",
      listIntro: "Around Nottingham city centre, local high streets and retail parks.",
      list: [
        { title: "Weekly food shop", desc: "Supermarket trips at a quiet time of day, at their own pace." },
        { title: "Local high streets", desc: "Beeston, West Bridgford, Arnold and Hucknall town centres." },
        { title: "Post office & bank", desc: "Parcels, bill payments and a hand in the queue." },
        { title: "Library & charity shops", desc: "Returning books and a browse for something new." },
        { title: "Cards & gifts", desc: "Birthday cards and presents for the grandchildren, wrapped and posted." },
        { title: "Collections & returns", desc: "Click-and-collect orders, dry cleaning and repairs." },
      ],
    },
  },
  {
    slug: "outings",
    title: "Companionship & Outings",
    navDesc: "A chat at home, cafés and days out",
    icon: HeartHandshake,
    photo: photos.outings,
    badge: "Company & Days Out",
    accent: accents.rose,
    summary:
      "A friendly face for a chat at home, a coffee out, a walk in the park or a day trip somewhere special.",
    highlights: [
      "Unhurried chats at home",
      "Cafés, parks & garden centres",
      "Days out around Nottinghamshire",
      "The same friendly face",
    ],
    page: {
      metaDescription:
        "Companionship visits and outings across Nottingham: chats at home, coffee trips, park walks and days out around Nottinghamshire.",
      headline: ["Good company at home ", "and out and about"],
      intro:
        "Sometimes the hardest part of the day is having no one to talk to. A regular visit means someone to chat with, share a pot of tea with and look forward to seeing.",
      storyTitle: "Something to look forward to each week",
      story: [
        "Visits are built around what they enjoy: old photos, a crossword, baking, a favourite quiz show or simply a good natter over tea.",
        "When they feel like getting out, we head to a café, a garden centre or a gentle walk round Wollaton Park, Highfields or the Arboretum.",
      ],
      checks: [
        "The same companion every visit",
        "Chats, hobbies and games at home",
        "Cafés, parks and garden centres",
        "Days out at their own pace",
      ],
      panel: {
        label: "Why it matters",
        title: "Loneliness affects health too",
        text: "Feeling cut off can affect sleep, appetite and mood. A familiar face each week makes a real difference.",
        points: [
          "Visits on the same day each week",
          "A short update for family after each visit",
          "Help keeping in touch by phone or video call",
        ],
      },
      listTitle: "Favourite outings around Nottingham",
      listIntro: "A short trip or a whole afternoon, always at a comfortable pace.",
      list: [
        { title: "Parks & gardens", desc: "Wollaton Park, Highfields, the Arboretum and Colwick Country Park." },
        { title: "Cafés & lunch out", desc: "Coffee and cake in town or a pub lunch in a nearby village." },
        { title: "Garden centres", desc: "A wander round the plants and a cup of tea in the café." },
        { title: "Days out", desc: "Newstead Abbey, Southwell Minster or a drive through Sherwood Forest." },
        { title: "Seeing friends & family", desc: "Lifts to visit old friends and relatives, or to lay flowers." },
        { title: "Riverside walks", desc: "A gentle stroll along the Trent at Victoria Embankment." },
      ],
    },
  },
  {
    slug: "community",
    title: "Community Activities",
    navDesc: "Lunch clubs, classes and coffee mornings",
    icon: Users,
    photo: photos.community,
    badge: "Clubs & Groups",
    accent: accents.emerald,
    summary:
      "Getting to lunch clubs, coffee mornings, classes and church, with a friendly face beside them.",
    highlights: [
      "Lunch clubs & coffee mornings",
      "Exercise & hobby classes",
      "Church & faith groups",
      "Company until they settle in",
    ],
    page: {
      metaDescription:
        "Support to join community activities across Nottingham: lunch clubs, coffee mornings, exercise classes, hobby groups and church.",
      headline: ["Staying part of ", "the local community"],
      intro:
        "Clubs and groups are a lifeline, but walking into a room full of new faces can be daunting. We take them along, stay while they settle in and bring them home afterwards.",
      storyTitle: "Small connections make a big difference",
      story: [
        "We help find groups that suit them, from lunch clubs and coffee mornings to chair exercise, singing or crafts at the local library or community centre.",
        "For the first few weeks we stay alongside. Once they feel at home, we simply drop off and pick up.",
      ],
      checks: [
        "Help finding the right group",
        "Transport there and back",
        "Company until they feel settled",
        "Reminders so they never miss a week",
      ],
      panel: {
        label: "Friendships",
        title: "New friends, old interests",
        text: "Many people rediscover hobbies they loved years ago and make new friends along the way.",
        points: [
          "Groups matched to their interests",
          "A regular slot in the diary",
          "Family kept in the loop",
        ],
      },
      listTitle: "Activities we help people get to",
      listIntro: "At community centres, libraries, churches and leisure centres across Nottingham.",
      list: [
        { title: "Lunch clubs", desc: "A hot meal and good company once or twice a week." },
        { title: "Coffee mornings", desc: "Church halls and community cafés across the city." },
        { title: "Gentle exercise", desc: "Chair yoga, seated exercise classes and walking groups." },
        { title: "Hobby & craft groups", desc: "Knitting, art, gardening clubs and book groups." },
        { title: "Singing & music", desc: "Community choirs and memory cafés with music." },
        { title: "Faith & worship", desc: "Sunday services or visits to the mosque, temple or gurdwara." },
      ],
    },
  },
  {
    slug: "prescriptions",
    title: "Prescription Collection",
    navDesc: "Repeat prescriptions collected and brought home",
    icon: Pill,
    photo: photos.prescriptions,
    badge: "Health Errands",
    accent: accents.indigo,
    summary:
      "Repeat prescriptions ordered, collected from the pharmacy and brought home, so medication never runs out.",
    highlights: [
      "Repeat prescriptions collected",
      "Pharmacy queues handled",
      "Medicines put in their usual place",
      "Reminders before they run low",
    ],
    page: {
      metaDescription:
        "Repeat prescription ordering and collection across Nottingham, with medicines brought home and put away safely.",
      headline: ["Prescriptions collected, ", "never missed"],
      intro:
        "Running out of tablets is a real worry. We keep an eye on repeat dates, collect from their usual pharmacy and bring everything home.",
      storyTitle: "One less thing to worry about",
      story: [
        "We help order repeat prescriptions through the GP surgery or the NHS App, then collect from their usual local pharmacy once they're ready.",
        "At home, medicines go back where they always keep them. We don't give medication, but we make sure it's there and nothing is missing.",
      ],
      checks: [
        "Repeat orders placed on time",
        "Collection from their usual pharmacy",
        "Bag checked against the label",
        "Family told if anything changes",
      ],
      panel: {
        label: "Peace of mind",
        title: "No more running low",
        text: "A missed collection can mean days without important medication. A simple routine prevents that.",
        points: [
          "A reminder a week before supplies run low",
          "Questions passed on to the pharmacist",
          "Old or unused medicines returned safely",
        ],
      },
      listTitle: "What prescription support covers",
      listIntro: "Simple, regular help that fits around their GP and pharmacy.",
      list: [
        { title: "Ordering repeats", desc: "Through the GP surgery or the NHS App, on time each month." },
        { title: "Pharmacy collection", desc: "From their usual local pharmacy, queue included." },
        { title: "Combined with a visit", desc: "Picked up on the way to a regular companionship visit." },
        { title: "Checking the bag", desc: "Names and items checked before we leave the counter." },
        { title: "Putting it away", desc: "Back in the usual cupboard or dosette box." },
        { title: "Returning old medicines", desc: "Out-of-date or unused medicines taken back to the pharmacy." },
      ],
    },
  },
];

export const getService = (slug: string) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
};

export const serviceHref = (s: Service) => `/types-of-support/${s.slug}`;
