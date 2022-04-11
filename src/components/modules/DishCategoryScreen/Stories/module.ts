import scroll from "scroll";

export function nextStoryMin(
    refBlock,
    classStoryMin,
    isRight,
    refLeftButton,
    refRightButton
) {
    if (!refBlock) return;

    const arrayStoryMin = document.getElementsByClassName(classStoryMin);
    const firstRefMinStory = arrayStoryMin[0];
    const computedStyle = getComputedStyle(firstRefMinStory);
    const width = computedStyle.width;
    const marginRight = computedStyle.marginRight;
    const widthWithMargin =
        Number(substringPx(width)) + Number(substringPx(marginRight));

    if (isRight) {
        scroll.left(refBlock, refBlock.scrollLeft + widthWithMargin, () => {
            if (
                Math.ceil(refBlock.scrollLeft) +
                    Math.ceil(refBlock.offsetWidth) >=
                refBlock.scrollWidth
            ) {
                refRightButton.current.style.display = "none";
            }
            refLeftButton.current.style.display = "block";
        });
    } else {
        scroll.left(refBlock, refBlock.scrollLeft - widthWithMargin, () => {
            if (refBlock.scrollLeft === 0) {
                refLeftButton.current.style.display = "none";
            }
            refRightButton.current.style.display = "block";
        });
    }
}

function substringPx(str) {
    return str.substring(0, str.length - 2);
}
