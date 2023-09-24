export type Trip = {
  start_location: string;
  end_location: string;
  duration: number;
  distance: string;
  origin: string;
  desition: string;
  savings: string;
  emissions: string;
  date: number;
  legs: Leg[];
};

export type Leg = {
  start_location: [number, number];
  end_location: [number, number];
  duration: number;
  distance: string;
  start_address: string;
  end_address: string;
  steps: Step[];
};
export type Step = {
  start_location: [number, number];
  end_location: [number, number];
  duration: number;
  distance: string;
  start_address: string;
  end_address: string;
  html_instructions: string;
  travel_mode: string;
};
