import { Region } from "./src/region";

const flashCard = new Region('FlashCard', 'Main', [710, 390], [500, 300]);

flashCard.resize([0, 300], 2000, 'easeOutBounce')
    .then(() => { return flashCard.resize([500, 300], 2000, 'easeOutBounce') })
    .then(() => { return flashCard.resize([0, 300], 2000, 'easeOutBounce') })
    .then(() => { flashCard.resize([500, 300], 2000, 'easeOutBounce') })
