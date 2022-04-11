import React from "react";

export function animateHeaderText(ref: React.MutableRefObject<any>) {
    const animate = () => {
        if (!ref.current) return;

        ref.current.scrollLeft += 1;
        setTimeout(() => requestAnimationFrame(animate), 10);
    };

    animate();
}

export function observeText(
    ref: React.MutableRefObject<any>,
    rootMargin: number
) {
    const header: Element = ref.current;
    const firstElem = header.firstChild;
    const options = {
        root: header,
        rootMargin: `${rootMargin}px`,
        threshold: 0,
    };
    const callback = (entries, observer) => {
        const entry = entries[0];

        if (entry.isIntersecting) return;

        const currentElem = entry.target;
        const cloneElem = currentElem.cloneNode(true);

        observer.unobserve(currentElem);
        currentElem.remove();
        header.scrollLeft = rootMargin;
        header.appendChild(cloneElem);
        observer.observe(header.firstChild);
    };
    const observer = new IntersectionObserver(callback, options);

    // @ts-ignore
    observer.observe(firstElem);
}
