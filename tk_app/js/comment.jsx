// Loads singular comment to be called by "comments" component for each comment @ Or actually maybe not
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//MAKE FIELD AND TAKE A LINK!!
export default function Comment({ post_url }) { 
    // const [results, setResults] = useState([]); // Holds the "result" the 
    // Call API endpoint to get comments from video...

    //Make API request to fetch comments {json structure} -> ??
    fetch(post_url)
        .then(/* Makes a lambda function and runs it when done */
        (response) => {
            if(response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }    
    ) //".then" waits for fetch to finish and runs code in it
    .then(
        (data) => {
            print(data)
        }
    )

}