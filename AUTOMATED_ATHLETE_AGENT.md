# Automated Athlete Tracking Agent — Implementation Context

> Load this file at the start of a new session to pick up where we left off.
> Status: **Planned, not yet implemented.**

---

## What this feature does

A weekly automated agent that runs without any human intervention:
1. **Finds new achievements** by athletes already on the site (e.g. Zverev winning the French Open)
2. **Discovers new professional athletes with T1D** not yet on the site and generates their full profiles
3. **Auto-updates the Spotlight** section on the homepage to the most recent notable win
4. Commits the changes to GitHub → Vercel auto-deploys

---

## Current state of the codebase

- **Athlete data**: hardcoded TypeScript at `data/athletes.ts` (~23 athletes) and `data/spotlight.ts`
- **No database, no CMS, no API routes**
- **Deployed on Vercel**, auto-deploys from GitHub `main` branch
- **No GitHub Actions workflows exist yet** (`.github/` dir doesn't exist)
- **No `scripts/` directory exists yet**
- **`@anthropic-ai/sdk` is NOT installed**

---

## Architecture

```
GitHub Actions (every Monday, 7am UTC)
  → pnpm install
  → pnpm update-athletes   (runs tsx scripts/update-athletes.ts)
      → Exa API: search news for each athlete + discover new T1D athletes
      → Claude API (claude-sonnet-4-6): analyze results, output a JSON patch
      → Script merges patch → writes data/athletes.json + data/spotlight.json
  → git-auto-commit-action: commits changed JSON files
  → Vercel detects push → auto-deploys updated site
```

---

## Required secrets (to add in GitHub repo settings before first run)

| Secret | Where to get it |
|--------|----------------|
| `ANTHROPIC_API_KEY` | console.anthropic.com |
| `EXA_API_KEY` | exa.ai — free tier (1000 searches/month, ~25 per run) |

---

## All files to create or modify

### New files

**`data/athletes.json`**
Extract the athlete array from `data/athletes.ts` into pure JSON (no TypeScript syntax). This makes it machine-writable without TypeScript generation.

**`data/athlete-types.ts`**
Move the `Athlete` and `AthleteSpotlight` interfaces here so they can be imported by both the site and the script.

```typescript
export interface Athlete {
  id: string
  name: string
  sport: string
  image: string
  shortBio: string
  story: string
  quote?: string
  diagnosisAge?: string
  location?: string
  achievements?: string[]
  diabetesManagement?: string
  advice?: string
  featured?: boolean
  socialLinks?: { [key: string]: string }
}

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
```

**`data/spotlight.json`**
Extract the `currentSpotlight` object from `data/spotlight.ts` into pure JSON.

**`scripts/tsconfig.json`**
Separate TypeScript config for Node scripts (the root tsconfig is Next.js-oriented):
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "strict": true,
    "outDir": "dist/scripts"
  },
  "include": ["scripts/**/*", "data/athlete-types.ts"]
}
```

**`scripts/update-athletes.ts`**
The agent script. Full logic:
```
1. Read data/athletes.json and data/spotlight.json
2. For each existing athlete:
     exa.searchAndContents(`${name} diabetes achievement 2025 2026`, { numResults: 3 })
3. Discover new athletes:
     exa.searchAndContents("professional athlete type 1 diabetes T1D 2025 2026", { numResults: 10 })
4. Call Claude claude-sonnet-4-6 with:
     - Current athletes JSON (as context)
     - All Exa search results
     - Instructions to return a structured JSON patch ONLY (not the full array)
5. Validate Claude's response with Zod
6. Merge patch:
     - Existing athletes: append new items to achievements[], optionally update shortBio
     - New athletes: append full Athlete object to array
     - Spotlight: replace with Claude's recommended spotlight
7. Write data/athletes.json and data/spotlight.json
```

Claude's system prompt key rules:
- Output ONLY valid JSON matching the patch schema, no prose
- Never remove or edit existing achievements, story, advice, or diabetesManagement fields
- Only add achievements that are verifiably supported by the search results
- New athlete profiles must include all required fields; use "/placeholder.svg" for image
- Spotlight must reference an athlete that exists in the (updated) athletes array

Patch schema (validate with Zod):
```typescript
const PatchSchema = z.object({
  athleteUpdates: z.array(z.object({
    id: z.string(),
    addAchievements: z.array(z.string()).optional(),
    updateShortBio: z.string().optional(),
  })),
  newAthletes: z.array(AthleteSchema),  // full Athlete object
  spotlight: SpotlightSchema,
})
```

**`.github/workflows/update-athletes.yml`**
```yaml
name: Update Athletes

on:
  schedule:
    - cron: '0 7 * * 1'   # Every Monday at 7am UTC
  workflow_dispatch:        # Manual trigger from GitHub Actions UI

jobs:
  update:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - name: Run athlete update agent
        run: pnpm update-athletes
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          EXA_API_KEY: ${{ secrets.EXA_API_KEY }}

      - name: Commit changes
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: weekly athlete data sync [skip ci]"
          file_pattern: "data/athletes.json data/spotlight.json"
```

### Modified files

**`data/athletes.ts`** — becomes a thin re-export wrapper:
```typescript
import type { Athlete } from "./athlete-types"
import athletesData from "./athletes.json"
export type { Athlete }
export const athletes = athletesData as Athlete[]
```

**`data/spotlight.ts`** — becomes a thin re-export wrapper:
```typescript
import type { AthleteSpotlight } from "./athlete-types"
import spotlightData from "./spotlight.json"
export type { AthleteSpotlight }
export const currentSpotlight = spotlightData as AthleteSpotlight
```

**`package.json`**
Add to `devDependencies`:
```json
"@anthropic-ai/sdk": "^0.54.0",
"exa-js": "^1.7.0",
"tsx": "^4.19.0"
```
Add to `scripts`:
```json
"update-athletes": "tsx scripts/update-athletes.ts"
```

---

## Implementation order

1. Install deps: `pnpm add -D @anthropic-ai/sdk exa-js tsx`
2. Create `data/athlete-types.ts` (extract interfaces)
3. Create `data/athletes.json` (extract array from athletes.ts)
4. Create `data/spotlight.json` (extract object from spotlight.ts)
5. Slim down `data/athletes.ts` and `data/spotlight.ts` to wrappers
6. Verify `pnpm dev` still works
7. Write `scripts/tsconfig.json`
8. Write `scripts/update-athletes.ts`
9. Test locally: `ANTHROPIC_API_KEY=... EXA_API_KEY=... pnpm update-athletes`
10. Create `.github/workflows/update-athletes.yml`
11. Add `ANTHROPIC_API_KEY` and `EXA_API_KEY` to GitHub repo secrets
12. Trigger workflow manually via GitHub UI to confirm end-to-end

---

## What stays manual

- Athlete profile photos (agent adds new athletes with `/placeholder.svg`; you replace it)
- Removing an athlete (the agent only adds, never deletes)

---

## Notes

- `[skip ci]` in the commit message prevents the workflow from triggering itself in a loop
- Exa free tier: 1000 searches/month. At ~25 per weekly run, that's ~4 runs/month = fine
- Claude token cost per run: roughly 15–20K input tokens + 2K output. At Sonnet pricing, well under $0.10/run
- `stefanzweifel/git-auto-commit-action` only commits if files actually changed — no-op runs produce no commit
