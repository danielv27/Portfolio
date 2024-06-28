export function isInViewport(element?: Element) {
    if(! element){
        return false;
    }
    const top = element.firstElementChild?.getBoundingClientRect().top ?? element.getBoundingClientRect().top;
    const bottom = element.lastElementChild?.getBoundingClientRect().bottom ?? element.getBoundingClientRect().bottom;
    const html = document.documentElement;
    return (
        top >= 0 &&
        bottom <= (window.innerHeight || html.clientHeight)
    );
}