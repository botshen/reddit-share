// 添加新按钮
export function addButton(onClickCallback: () => void) {
    // 查找所有包含 Shadow DOM 的元素
    const elements = document.querySelectorAll('shreddit-post');
     elements.forEach(element => {
      // 访问 Shadow DOM
      const shadowRoot = element.shadowRoot;
      if (shadowRoot) {
        // console.log('shadowRoot',shadowRoot)
        // 在 Shadow DOM 中查找按钮
        const container = shadowRoot.querySelectorAll('.shreddit-post-container');
         // 找到的 xxx[0] 的 name 为 share-button 的元素
        const shareButton = container[0].querySelector('[name="share-button"]');
         // 找到的 shareButton 里 shreddit-post-share-button的元素
        const shareButton2 = shareButton.querySelector('shreddit-post-share-button');
         // 在 shareButton2 后面添加一个按钮
        const newButton = document.createElement('button');
        newButton.innerHTML = '分享帖子';
        newButton.className = 'button border-md flex flex-row justify-center items-center h-xl font-semibold relative text-12 button-secondary inline-flex items-center px-sm';
        newButton.style.cssText = 'height: var(--size-button-sm-h); font: var(--font-button-sm)';
        newButton.onclick = onClickCallback;
        shareButton2.parentNode.insertBefore(newButton, shareButton2.nextSibling);
      }
    });
  }

export function getPost() {
  const post = document.querySelector('shreddit-post');
  if (!post) return null;
  // console.log('post',post)
// post 里找slot="credit-bar"的元素
const creditBar = post.querySelector('[slot="credit-bar"]');
 // 找 slot="authorName"的元素
const authorName = post.querySelector('[slot="authorName"]'); 
  const authorElement = authorName.querySelector('[class*="author-name"]');
  const author = authorElement ? authorElement.textContent.trim() : '';
   // 获取标题
  const titleElement = post.querySelector('h1');
  const title = titleElement ? titleElement.textContent.trim() : '';

  // 获取内容
  const contentElement = post.querySelector('.md');
  
  const postData = {
    author,
    title,
    content:contentElement?contentElement.innerHTML:''
  };

   return postData;
}