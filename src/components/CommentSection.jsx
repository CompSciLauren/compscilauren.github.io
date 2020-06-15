import React from "react";

let disqus_config = function () {
  this.page.url = "https://compscilauren.com"; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier =
    "blog/improve-your-git-workflow-and-save-time-with-git-hooks"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () {
  let d = document,
    s = d.createElement("script");
  s.src = "https://compscilauren.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

const CommentSection = () => {
  return (
    <>
      <div id="disqus_thread"></div>
    </>
  );
};

export default CommentSection;
