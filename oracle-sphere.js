import random

print("Welcome! Here is a list of themes: Lucky and Romance")
theme = input("Insert the theme you choose: ")

# Fortune lists
Lucky = [
    "Luck is in your favor today.",
    "Too bad, luck is not on your side today."
]

Romance = [
    "A special encounter will occur today.",
    "You will meet your future spouse today."
]

# Determine response
if theme == "Lucky":
    print(random.choice(Lucky))
elif theme == "Romance":
    print(random.choice(Romance))
else:
    print("The Oracle Sphere does not recognize that theme. Try again.")
