class Scorecard{
    constructor(){
        this.score = [];
        this.frameNumber = 0;
    }

    calculateScore(){
        let totalScore = 0;
        this.score.forEach((frame, index) => {
            //adds the score of roll 1 from the next frame if current frame is a spare
            if (frame.roll_1 + frame.roll_2 === 10 && frame.frame != 10 && frame.roll_1 != 10){
                if(index < this.score.length-1){
                    frame.bonus = this.score[index + 1].roll_1}
            } else if (frame.roll_1 === 10 && frame.frame != 10) {
                if(index < this.score.length-1 && this.score[index + 1].roll_1 != 10){
                    frame.bonus = this.score[index + 1].roll_1 + this.score[index + 1].roll_2
                } else if(index < this.score.length-2 && frame.frame < 9) {
                    frame.bonus = this.score[index + 1].roll_1 + this.score[index + 2].roll_1
                } else if (index < this.score.length - 1 && frame.frame === 9){
                    frame.bonus = this.score[index+1].roll_1 + this.score[index+1].roll_2
                } else if (index < this.score.length-1) {
                    frame.bonus = this.score[index + 1].roll_1
                }
            }
            totalScore += frame.roll_1;
            totalScore += frame.roll_2;
            totalScore += frame.bonus;
            if (frame.frame === 10) {
                totalScore += frame.roll_3
            }
        })
        
        console.log(this.score);
        return totalScore;
    }

    addFrame(a, b = 0, c = 0){
        this.frameNumber ++
        this.score = this.score.concat({
            frame: this.frameNumber,
            roll_1: a,
            roll_2: b,
            roll_3: c,
            bonus: 0
        });
    }
}

module.exports = Scorecard;