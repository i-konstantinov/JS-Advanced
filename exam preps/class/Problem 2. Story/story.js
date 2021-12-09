class Story {
    constructor(t, c) {
        this.title = t;
        this.creator = c;
        this._comments = [];
        this._likes = [];
        this.commentId = 0;
        this.replyId = 0;
    }

    get likes() {
        const likesLen = this._likes.length;
        if (likesLen == 0) {
            return `${this.title} has 0 likes`;
        } else if (likesLen == 1) {
            return `${this._likes[0].Username} likes this story!`;
        } else {
            return `${this._likes[0].Username} and ${likesLen - 1} others like this story!`;
        }
    }


    like(username) {
        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        for (let l of this._likes) {
            if (l.Username == username) {
                throw new Error("You can't like the same story twice!");
            }
        }

        this._likes.push({ Username: username });
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let toBeDeleted = undefined;

        for (let l of this._likes) {
            if (l.Username == username) {
                toBeDeleted = l;
                break;
            }
        }

        if (toBeDeleted != undefined) {
            const index = this._likes.indexOf(toBeDeleted);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;

        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {
        let comment = undefined;
        for (let c of this._comments) {
            if (c.Id == id) {
                comment = c;
                break;
            }
        }

        if (id == undefined || comment == undefined) {
            this.commentId += 1;
            this._comments.push({
                Id: this.commentId,
                Username: username,
                Content: content,
                Replies: []
            });

            return `${username} commented on ${this.title}`;
        }

        if (comment != undefined) {
            this.replyId += 1;
            comment.Replies.push({
                Id: `${comment.Id}.${this.replyId}`,
                Username: username,
                Content: content
            });

            return "You replied successfully";
        }

    }

    toString(sortingType) {
        const result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            "Comments:"
        ]

        if (this._comments.length > 0) {

            let sortedComments = undefined;
            if (sortingType == 'asc') {
                sortedComments = this._comments.sort((a, b) => a.Id - b.Id);
                for (let com of sortedComments) {
                    result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
                    if (com.Replies.length > 0) {
                        com.Replies.sort((a, b) => a.Id - b.Id).forEach(rep => result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`));
                    }
                }
            } else if (sortingType == 'desc') {
                sortedComments = this._comments.sort((a, b) => b.Id - a.Id);
                for (let com of sortedComments) {
                    result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
                    if (com.Replies.length > 0) {
                        com.Replies.sort((a, b) => b.Id - a.Id).forEach(rep => result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`));
                    }
                }
            } else if (sortingType == 'username') {
                sortedComments = this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
                for (let com of sortedComments) {
                    result.push(`-- ${com.Id}. ${com.Username}: ${com.Content}`);
                    if (com.Replies.length > 0) {
                        com.Replies.sort((a, b) => a.Username.localeCompare(b.Username)).forEach(rep => result.push(`--- ${rep.Id}. ${rep.Username}: ${rep.Content}`));
                    }
                }
            }
        }

        return result.join('\n');
    }
}



let art = new Story("My Story", "Anny");
art.like("John");
// console.log(art.like("John"));
console.log(art.likes);
console.log(art.toString('username'));
// art.dislike("John");
art.like('Maya');
// console.log(art.dislike("John"));
console.log(art.likes);
art.comment("Sammy", "Some Content");
// console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
// console.log(art.comment("Zane", "Reply", 1));
art.comment("Jessy", "Nice :)");
console.log(art.comment("Sammy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));