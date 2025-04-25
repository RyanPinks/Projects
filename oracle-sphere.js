// Fortune lists
const fortunes = {
    "Lucky": [
        "Luck is in your favor today.",
        "Too bad, luck is not on your side today."
    ],
    "Romance": [
        "A special encounter will occur today.",
        "You will meet your future spouse today."
    ]
};

// Function to generate a random fortune
function getFortune() {
    const theme = document.getElementById("theme-selector").value;
    const outputDiv = document.getElementById("oracle-output");

    if (fortunes[theme]) {
        const fortune = fortunes[theme][Math.floor(Math.random() * fortunes[theme].length)];
        outputDiv.innerHTML = `<strong>The Oracle Sphere whispers:</strong> "${fortune}"`;
    } else {
        outputDiv.innerHTML = "The Oracle Sphere does not recognize that theme. Try again.";
    }
}


# Determine response
if theme == "Lucky":
    print(random.choice(Lucky))
elif theme == "Romance":
    print(random.choice(Romance))
else:
    print("The Oracle Sphere does not recognize that theme. Try again.")
console.log("Oracle Sphere script is running!");
