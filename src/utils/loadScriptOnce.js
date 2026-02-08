const scriptPromises = new Map();

const loadScriptOnce = (src) => {
  if (scriptPromises.has(src)) {
    return scriptPromises.get(src);
  }

  if (document.querySelector(`script[src="${src}"]`)) {
    const resolved = Promise.resolve();
    scriptPromises.set(src, resolved);
    return resolved;
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.defer = false;
    script.setAttribute("data-load-once", src);
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", (event) => reject(event));
    document.body.appendChild(script);
  });

  scriptPromises.set(src, promise);
  return promise;
};

export default loadScriptOnce;
