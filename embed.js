export function mountWeijie(container, options = {}) {
 const host = typeof container === 'string' ? document.querySelector(container) : container;
 if (!host) throw new Error('Weijie container not found');
 const frame = document.createElement('iframe');
 frame.src = options.src || new URL('./app.html', import.meta.url).href;
 frame.title = '维界旅人'; frame.style.cssText = 'width:100%;height:760px;border:0;border-radius:12px';
 frame.allowFullscreen = true; host.appendChild(frame);
 return { element: frame, destroy() { frame.remove(); } };
}
