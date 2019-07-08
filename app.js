/* 
    Main syntax:
    document.getElementById("myDiv").style.animation = "[animation_name] [Duration] [TimingFunction] [Delay] [IterationCount] [Direction] [fillMode] [playState]";

    https://developer.mozilla.org/en-US/docs/Web/CSS/animation
*/

const cssAnimation = window.document.styleSheets[0];
const yinYang = document.querySelector(".yin-yang");

cssAnimation.insertRule(`
@keyframes zoomAnimation {
    0%, 
    100% { transform: scale(.5) rotate(90deg) }
    50% { transform: scale(1.5) rotate(-90deg) }
}`, cssAnimation.cssRules.length);

yinYang.style.animation = "zoomAnimation 10s infinite";
