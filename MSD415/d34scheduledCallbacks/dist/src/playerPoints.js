/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
function calculateTotalPoints(player) {
    const totalPoints = player.stats.reduce((acc, stat) => acc + stat.points, 0);
    return { jersey: player.jersey, total: totalPoints };
}
// Function to find the player with the highest total points
function findHighestScorer(players) {
    if (players.length === 0) {
        return null;
    }
    const jerseyPointsList = players.map(calculateTotalPoints);
    // Using reduce to find the player with the highest total points
    const highestScorer = jerseyPointsList.reduce((max, current) => current.total > max.total ? current : max);
    return highestScorer;
}
// Test
const highestScorer = findHighestScorer(teamStats);
console.log("Highest Scorer:", highestScorer);
