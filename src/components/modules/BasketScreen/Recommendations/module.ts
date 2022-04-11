export function onScrollRecommendations(
    elementScroll,
    refLeftStub,
    refRightStub,
    activeClass,
    inactiveClass
) {
    const { offsetWidth, scrollWidth, scrollLeft } = elementScroll;

    //start
    if (scrollLeft === 0) {
        refLeftStub.classList.remove(activeClass);
        refLeftStub.classList.add(inactiveClass);
    }
    //finish
    else if (Math.ceil(offsetWidth + scrollLeft) >= scrollWidth) {
        refLeftStub.classList.remove(activeClass);
        refRightStub.classList.add(inactiveClass);
    }
    //scrolling
    else {
        refLeftStub.classList.add(activeClass);
        refRightStub.classList.add(activeClass);
        refLeftStub.classList.remove(inactiveClass);
        refRightStub.classList.remove(inactiveClass);
    }
}
