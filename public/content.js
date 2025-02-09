let isFontDetailsActive = false;
let currentTooltip = null;

function showFontDetails(event) {
    if (isFontDetailsActive) {
        if (currentTooltip) {
            document.body.removeChild(currentTooltip);
        }

        const fontDetails = document.createElement('div');
        fontDetails.style.position = 'absolute';
        fontDetails.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        fontDetails.style.color = '#fff';
        fontDetails.style.borderRadius = '5px';
        fontDetails.style.padding = '8px';
        fontDetails.style.zIndex = '1000';
        fontDetails.style.pointerEvents = 'none';
        const computedStyle = getComputedStyle(event.target);
        fontDetails.innerText = `Font: ${computedStyle.fontFamily}, Size: ${computedStyle.fontSize}, Color: ${computedStyle.color}`;
        document.body.appendChild(fontDetails);
        
        fontDetails.style.left = `${event.pageX + 10}px`;
        fontDetails.style.top = `${event.pageY + 10}px`;

        currentTooltip = fontDetails;

        event.target.addEventListener('mouseleave', () => {
            if (currentTooltip) {
                document.body.removeChild(currentTooltip);
                currentTooltip = null;
            }
        }, { once: true });
    }
}

function activateFontDetails() {
    if (!isFontDetailsActive) {
        document.addEventListener('mouseover', showFontDetails);
        isFontDetailsActive = true;
    }
}

function deactivateFontDetails() {
    if (isFontDetailsActive) {
        document.removeEventListener('mouseover', showFontDetails);
        if (currentTooltip) {
            document.body.removeChild(currentTooltip);
            currentTooltip = null;
        }
        isFontDetailsActive = false;
    }
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'activateFontDetails') {
        activateFontDetails();
    } else if (request.action === 'deactivateFontDetails') {
        deactivateFontDetails();
    }
});