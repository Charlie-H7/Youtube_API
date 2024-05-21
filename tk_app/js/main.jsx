import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Posts from "./posts"; MAKE IT THE COMMENTS FUNCTION

//Make root into id "reactEntry" this is what is rendered in place of the

root = createRoot(document.getElementById("reactEntry"));

root.render(
    <StrictMode>
        <Comment post_url="/api/v1/comments/" />
    </StrictMode>
)