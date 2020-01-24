const messages = [
  `Your smile could make someone's day, don't forget to wear it.`,
  `If you're feeling tired or anxious, a pint of water will almost always make you feel better.`,
  `Fail. Fail again. Fail better.`,
  `Walking is a perfectly valid solution to traffic congestion problems.`,
  `The most delicious cocktails often have the highest alcohol content. Always pace yourself to preserve your dignity.`,
  `If it still itches after a week, go to the doctors.`
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages, length)];
  console.log(message);
};

module.exports = { randomMsg };
