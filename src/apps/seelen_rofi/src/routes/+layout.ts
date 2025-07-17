// Tauri doesn't have a Node.js server to do proper SSR
// so we will use adapter-static to prerender the app (SSG)

import {  } from "@seelen-ui/lib";
import { declareDocumentAsLayeredHitbox } from "../lib/base/layered";

// See: https://v2.tauri.app/start/frontend/sveltekit/ for more info
export const prerender = true;
export const ssr = false;
