export interface AthleteSpotlight {
  athleteId: string
  name: string
  sport: string
  image: string
  badgeText: string
  headline: string
  description: string
  date: string
}

export const currentSpotlight: AthleteSpotlight = {
  athleteId: "alexander-zverev",
  name: "Alexander Zverev",
  sport: "Tennis",
  image: "/AlexanderZverevFinale.avif",
  badgeText: "Just In",
  headline: "Zverev Claims His First Grand Slam at the 2026 French Open",
  description:
    "Alexander Zverev defeated Italy's Flavio Cobolli in five sets at Roland Garros, becoming the first German man to win a Grand Slam singles title since Boris Becker in 1996 — and he did it while managing Type 1 diabetes every step of the way.",
  date: "June 2026",
}
