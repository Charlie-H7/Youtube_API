import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Posts from "./posts"; MAKE IT THE COMMENTS FUNCTION
import Comment from "./comment";

//Make root into id "reactEntry" this is what is rendered in place of the

// const root = createRoot(document.getElementById("reactEntry"));
console.log("Here ot")
const root = createRoot(document.getElementById("reactEntry"));

export function render_comments() {
    // const root = createRoot(document.getElementById("reactEntry"));
    console.log("Here")

    // root.render(
    //     <div>Test</div>
    // );

    root.render(
        <StrictMode>
            <Comment post_url="/api/v1/comments/" />
        </StrictMode>
    )
}

// Ensure the function is accessible in the global scope
window.render_comments = render_comments;