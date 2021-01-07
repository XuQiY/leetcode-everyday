/*
 * @lc app=leetcode.cn id=355 lang=typescript
 *
 * [355] 设计推特
 */


// @lc code=start
class Twitter {
    
    followList : Object={}
    tweets :Array<{uid:number,tid:number}>=[]
    constructor() {
    
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.push({uid:userId,tid:tweetId})
    }

    getNewsFeed(userId: number): number[] {
        const resultObj = this.tweets.filter(item=>this.followList[userId].includes(item.uid))
        return resultObj.map(item=>item.tid)
    }

    follow(followerId: number, followeeId: number): void {
        if(this.followList[followerId]){
            this.followList[followerId].push(followeeId)
        }else{
            this.followList[followerId] = [followerId,followeeId]
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        const deletIndex=this.followList[followerId].findIndex(item=>item===followeeId)
        if(deletIndex){
        this.followList[followerId].splice(deletIndex,1)
        }else{
            return
        }
    }
}

const t1 = new Twitter()
t1.postTweet(100238,1)
t1.postTweet(100232,2)
t1.postTweet(100237,3)


t1.follow(100232,100238)
t1.follow(100232,100237)

console.log(t1.getNewsFeed(100232))
t1.unfollow(100232,100237)
console.log(t1.getNewsFeed(100232))






/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

