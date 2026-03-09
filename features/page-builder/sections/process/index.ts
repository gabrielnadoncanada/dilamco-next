import { processHorizontalStepsCards } from "./variants/horizontal-cards";
import { splitCards } from "./variants/split-cards";

export const processDefs = [processHorizontalStepsCards, splitCards] as const;
