// Data-driven reviews. Add more here — they render on /reviews + home.
export type Review = {
  name: string;
  role: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Binod Maharjan",
    role: "Owner, Muscle Mania Fitness Center",
    quote:
      "Null Peak built our entire digital presence from scratch. Since launching the website and getting optimized on Google Search, we've seen a noticeable increase in new members walk through our doors.",
  },
  // TODO: add more real testimonials here (no fake reviews).
];
