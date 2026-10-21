const sampleText = document.getElementById("sampleText");
const textArea = document.getElementById("textArea");

// Save the original text
const originalText = sampleText.textContent;

// Change text color
function changeColor(color) {
    sampleText.style.color = color;
}

// Increase or decrease font size
function changeSize(amount) {
    let currentSize = parseFloat(
        window.getComputedStyle(sampleText).fontSize
    );

    let newSize = currentSize + amount;

    if (newSize >= 10 && newSize <= 60) {
        sampleText.style.fontSize = newSize + "px";
    }
}

// Change font family
function changeFont(font) {
    sampleText.style.fontFamily = font;
}

// Add or remove text decoration
function toggleDecoration(decoration) {
    let decorations = sampleText.style.textDecoration
        .split(" ")
        .filter(Boolean);

    if (decorations.includes(decoration)) {
        decorations = decorations.filter(
            item => item !== decoration
        );
    } else {
        decorations.push(decoration);
    }

    sampleText.style.textDecoration =
        decorations.join(" ");
}

// Toggle bold
function toggleBold() {
    if (sampleText.style.fontWeight === "bold") {
        sampleText.style.fontWeight = "normal";
    } else {
        sampleText.style.fontWeight = "bold";
    }
}

// Toggle italic
function toggleItalic() {
    if (sampleText.style.fontStyle === "italic") {
        sampleText.style.fontStyle = "normal";
    } else {
        sampleText.style.fontStyle = "italic";
    }
}

// Change text alignment
function alignText(alignment) {
    sampleText.style.textAlign = alignment;
}

// Change uppercase and lowercase
function changeCase(letterCase) {
    if (letterCase === "uppercase") {
        sampleText.style.textTransform = "uppercase";
    } else if (letterCase === "lowercase") {
        sampleText.style.textTransform = "lowercase";
    } else {
        sampleText.style.textTransform = "none";
    }
}

// Change text area background color
function changeBackground(color) {
    textArea.style.backgroundColor = color;
}

// Toggle dark and light mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Reset all styling to original
function resetStyles() {
    sampleText.textContent = originalText;
    sampleText.removeAttribute("style");
    textArea.removeAttribute("style");
    document.body.classList.remove("dark-mode");
}