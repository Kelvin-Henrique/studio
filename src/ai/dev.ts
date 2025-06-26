import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-changelog.ts';
import '@/ai/flows/suggest-release-title.ts';