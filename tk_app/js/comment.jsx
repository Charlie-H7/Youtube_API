// Loads singular comment to be called by "comments" component for each comment @ Or actually maybe not
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//MAKE FIELD AND TAKE A LINK!!
export default function Comment({ post_url }) { 
    // const [results, setResults] = useState([]); // Holds the "result" the 
    // Call API endpoint to get comments from video...
    console.log("fetch comments entered");

    const [link, setLink] = useState("");
    const [commentsData, setCommentsData] = useState(null);
    useEffect( () => {
        // let ignoreStaleRequest = false;
        //Make API request to fetch comments {json structure} -> ??
        fetch(post_url)
            .then(/* Makes a lambda function and runs it when done */
            (response) => {
              console.log("data1");
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            }    
        ) //".then" waits for fetch to finish and runs code in it
        .then((data) => {
          console.log("Fetched comments:", data);
          setCommentsData(data);
        })
        // .then(
        //     (data) => {
        //       console.log("data2");
        //         console.log(data);
        //     }
        // )

        console.log("Im in Comment component")
        // return () => {
        //     // This is a cleanup function that runs whenever the Post component
        //     // unmounts or re-renders. If a Post is about to unmount or re-render, we
        //     // should avoid updating state.
        //     ignoreStaleRequest = true;
        //   };
    }, []);

    const Reply = ( {reply} ) => {
        <div>{reply.username}: {reply.reply}</div>
    }

    const Comment = ({ comment }) => (
        <div className="comment">
          <p><strong>{comment.comment.username}:</strong> {comment.comment.comment}</p>
          {comment.replies && comment.replies.map((reply, index) => (
            <Reply key={index} reply={reply} />
          ))}
        </div>
      );

    const CommentList = ({ comments }) => (
        <div className="comment-list">
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
      );
      
      console.log("End of comments b4 render");
    return (
        <div className="App">
      <h1>Comments</h1>
      {commentsData ? (
        <CommentList comments={commentsData.comments} />
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
        // <!-- Make a flask templated comment for each file -->
        
        //     {% for comment in comments %}
        //     <div style="border: 5px solid black;"></div>
        //         {#comment.comment is a top level comment#}
        //         <div>{{comment.comment}}</div>
        //         <br> <!--Line break-->

        //         {% for replies in comment.replies %}
        //             <br>
        //             <div>{{replies}}</div>
        //         {% endfor %}
        //         <br>
        //         <br>
        //         </div>
        //     {% endfor %}




    );

}