// massage the approved comments data into the shape we'd like
// embelish the data with gravatars
const gravatar = require('gravatar');
const submissions = require('./approved-comments_submissions.json');
module.exports = () => {
 let comments = {};
 for(var i = 0; i < submissions.length; i++) {
 let entry = submissions[i]
 let comment = {
 name: entry.data.name,
 avatar: gravatar.url(entry.data.email, {s: '100', r: 'x', d: 'retro'}, true),
 comment: entry.data.comment.trim(),
 date: entry.data.received
 };
 // Add it to an existing array or create a new one in the comments object
 if(comments[entry.data.path]){
 comments[entry.data.path].push(comment);
 } else {
 comments[entry.data.path] = [comment];
 }
 }
 return comments;
};