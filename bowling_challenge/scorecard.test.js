const Scorecard = require('./scorecard');
const scorecard = new Scorecard();

describe('unit tests for scorecard', () => {
    it('adds the combined total to the score when adding a frame', () => {
        scorecard.addFrame(2,5);
        expect(scorecard.calculateScore()).toEqual(7);
    });
    it('only adds the score of the next roll once it\'s been taken (where frame is a spare)', () => {
        scorecard.addFrame(3,7);
        expect(scorecard.calculateScore()).toEqual(17);
    });
    it('adds the score of the next roll if the frame is a spare', () => {
        scorecard.addFrame(3,4);
        expect(scorecard.calculateScore()).toEqual(27);
    });
    it('allows you to add just one score if it\'s a strike', () => {
        scorecard.addFrame(10);
        expect(scorecard.calculateScore()).toEqual(37);
    });
    it('adds the next two rolls once taken if the frame is a strike, where the next roll is not a strike', () => {
        scorecard.addFrame(1,1);
        expect(scorecard.calculateScore()).toEqual(41);
    });
    it('adds only the next roll if the next roll is a strike and a second turn has not yet been taken', () => {
        scorecard.addFrame(10);
        scorecard.addFrame(10);
        expect(scorecard.calculateScore()).toEqual(71);
    });
    it('adds the next two rolls if the next roll is a strike', () => {
        scorecard.addFrame(1,1);
        expect(scorecard.calculateScore()).toEqual(76)
    });
    it('adds both rolls from frame 10 if you get a strike on frame 9', () => {
        scorecard.addFrame(10);
        scorecard.addFrame(3,7,4);
        expect(scorecard.calculateScore()).toEqual(110)
    });
    it('returns a score of 300 for a perfect game', () => {
        const perfectScorecard = new Scorecard();
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10);
        perfectScorecard.addFrame(10,10,10);
        expect(perfectScorecard.calculateScore()).toEqual(300)    
    });
    test('complete game', () => {
        const scorecard2 = new Scorecard();
        scorecard2.addFrame(1,4);
        scorecard2.addFrame(4,5);
        scorecard2.addFrame(6,4);
        scorecard2.addFrame(5,5);
        scorecard2.addFrame(10);
        scorecard2.addFrame(0,1);
        scorecard2.addFrame(7,3);
        scorecard2.addFrame(6,4);
        scorecard2.addFrame(10);
        scorecard2.addFrame(2,8,6);
        expect(scorecard2.calculateScore()).toEqual(133)
    })
});