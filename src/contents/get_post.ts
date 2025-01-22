import type { PlasmoCSConfig } from "plasmo"
import { addButton, getPost } from "~contents/fetch-reddit-util";

export const config: PlasmoCSConfig = {
  matches: ["*://*.reddit.com/*"],
  all_frames: true,
  run_at: "document_end"
}
   
addButton(() => {
   const post = getPost()
  console.log('post',post)
  const currentPageUrl = window.location.href
  chrome.runtime.sendMessage({
    action: "openNewTab",
    data: {
      postContent:post.content,
      title:post.title,
      author:post.author,
      url: currentPageUrl
    }
  })
});
  
 