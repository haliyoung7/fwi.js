import { Template, Region } from './index.js';

const flashCard = new Region('FlashCard', 'Main', [710, 390], [500, 300]);

const sleep = (ms, callback) => {
    window.setTimeout(callback, ms);
}

const animateFlashCardOut = () => {
    flashCard.resize([0, 300], 2000, 'easeOutBounce');
};

const animateFlashCardIn = () => {
    flashCard.resize([500, 300], 2000, 'easeOutBounce');
};

const fadeTextIn = () => {
    Template.PlayContent('Text', 'FlashCard');
};

const fadeTextOut = () => {
    Template.PlayContent('Blank', 'FlashCard');
};

animateFlashCardOut();
// sleep(5000, animateFlashCardIn);
// sleep(6500, fadeTextIn);
// sleep(11000, fadeTextOut);
// sleep(12000, animateFlashCardOut);
