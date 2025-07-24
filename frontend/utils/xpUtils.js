/**
 * Calculate XP awarded for a dream based on its properties.
 * This function demonstrates how various modifiers could influence XP gains.
 */
export function calculateXPFromDream(dream) {
  let baseXP = 50;
  // Lucidity level multiplier
  const lucidityMultiplier = {
    Low: 1,
    Medium: 1.5,
    High: 2
  };
  baseXP *= lucidityMultiplier[dream.lucidity_level] || 1;

  // Emotions modifier
  const emotionsCount = dream.emotions ? dream.emotions.split(',').length : 0;
  baseXP += emotionsCount * 10;

  // Favorite bonus
  if (dream.favorite) {
    baseXP += 20;
  }

  // Quest completion bonus
  if (dream.quest) {
    baseXP += 30;
  }

  return Math.round(baseXP);
}