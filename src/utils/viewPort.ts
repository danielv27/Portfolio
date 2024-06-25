export function isInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight)
    );
}