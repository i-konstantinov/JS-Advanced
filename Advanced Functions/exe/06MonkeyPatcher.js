function solution(arg, n) {
    if (!n) {
        n = 1;
    }
    
    if (arg === 'upvote') {
        this.upvotes += n;
    } else if (arg === 'downvote') {
        this.downvotes += n;
    } else {
        let result = [];

        let totalVotes = this.upvotes + this.downvotes;
        
        let obfuscateNum = 0;
        if (totalVotes > 50) {
            let greaterNum = this.upvotes > this.downvotes ? this.upvotes : this.downvotes;
            obfuscateNum = Math.ceil(greaterNum * 0.25);
        }
        
        let balance = this.upvotes - this.downvotes;
        
        let rating = 'new';
        if (this.upvotes > totalVotes * 0.66 && totalVotes > 9) {
            rating = 'hot';
        } else if (balance > -1 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0 && totalVotes > 100) {
            rating = 'unpopular';
        }

        result.push(this.upvotes + obfuscateNum, this.downvotes + obfuscateNum, balance, rating);
        console.log(result);
        return result;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0,
};
solution.call(post, 'upvote', 57);

solution.call(post, 'downvote', 64);

let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'upvote', 5);         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']