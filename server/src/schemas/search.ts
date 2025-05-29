import { z } from "zod";

export const querySchema = z.string().min(3).max(256).trim();
