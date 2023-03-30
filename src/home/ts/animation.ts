import { makeSpanWith } from "./utils/dom";
import { ITitle } from "./interfaces/ITitle";
import { titleInfo,
        subtitleInfo } from "./script";

export function animateHeader(button: HTMLButtonElement, title: ITitle = titleInfo): void {
    let curIndex = 0

    let currentSpan: HTMLSpanElement
    const animationInterval = setInterval(() => {
        if (currentSpan != undefined) currentSpan.classList.remove(title.showModeName)

        currentSpan = makeSpanWith(title.letterArray[curIndex], title.showModeName)
        title.wrapper.appendChild(currentSpan)

        if (curIndex == title.lineBreakIndex) title.wrapper.appendChild(document.createElement('br'))
        if (curIndex == title.letterArray.length - 1)  {
            stopAnimationInterval()
            if (!title.isLast) animateHeader(button, subtitleInfo)
            else {
                currentSpan.classList.remove(title.showModeName)
                button.style.opacity = "1"
            }
        }

        curIndex += 1
    }, title.displaySpeed)

    function stopAnimationInterval(): void {
        clearInterval(animationInterval)
    }
}