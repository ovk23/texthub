/**
 * No perfect:
 *  - tradeoffs
 * Keep Shallow
 * Repeat Data is Okay
 */

/**
 * Pages:
 * - user
 *      -   posts
 *      -   charts
 *      -   book
 * 
 * - homePage
 *      -   user's posts
 *      -   charts
 *      -   subscribed notebooks
 * 
 * - Topics
 *      -   Topic list
 * - Topic's Page
 *      -   repo uid
 *      -   repo info
 *          -   repoName
 *          -   repoUsers
 *          -   popularity
 *          -   related Topics etc.
 *      -   repo
 * - repo
 *      -   notes
 */

 /**
  * Endpoints:
  * /usersPosts
  *   uid
  *     posts
  *     -  postId    
  *       - replies
  *           replyId
  *             uid
  *             name
  *             comment etc
  *       - info
  *           uid
  *           avatar
  *           text
  *           numberOfLikes
  *           etc  
  * 
  * 
  * /posts
  *     postId
  *         replies
  *             replyId
  *                 name
  *                 comment
  *                 etc
  * 
  * /Topics
  *   topicId
  *     info
  *   repo
  *     topicId
  *       notes
  *         noteId
  *           info    
  *   users
  *     userId
  *       userInfo 
  *       repo
  *         topicId
  *           notes
  * 
  * /repo
  *     repoId
  *         notes
  *             noteId
  *                 noteInfo
  *         
  */