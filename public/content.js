    if (!window.__FONT_FINDER_TOOLTIP__) {
        window.__FONT_FINDER_TOOLTIP__ = document.createElement("div");
        window.__FONT_FINDER_TOOLTIP__.classList.add("tooltip");
        document.body.appendChild(window.__FONT_FINDER_TOOLTIP__);
    }
    
    const tooltip = window.__FONT_FINDER_TOOLTIP__;
    Object.assign(tooltip.style, {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "8px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "none",
        zIndex: "10000",
    });
    
    document.addEventListener("mouseover", (event) => {
        const element = event.target;
        if (element && element !== tooltip) {
        const computedStyle = window.getComputedStyle(element);
        tooltip.innerHTML = `
            <div>
            <p><strong>Font:</strong> ${computedStyle.fontFamily}</p>
            <p><strong>Size:</strong> ${computedStyle.fontSize}</p>
            <p><strong>Color:</strong> ${computedStyle.color}</p>
            <p><strong>Weight:</strong> ${computedStyle.fontWeight}</p>
            </div>
        `;
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.style.display = "block";
        }
    });
    
    document.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
    