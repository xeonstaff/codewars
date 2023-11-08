# pits a group of lower-case letters against each other in a 'war'

def alphabet_war(fight):
    left_letters = ['s','b','p','w']
    left_score = 0
    right_letters = ['z','d','q','m']
    right_score = 0
    for letter in list(fight):
        #left side letters
        if letter in left_letters:
            left_score += left_letters.index(letter)+1
        elif letter in right_letters:
            right_score += right_letters.index(letter)+1
    winner = "Right side wins!" if right_score > left_score else "Left side wins!" if right_score < left_score else "Let's fight again!"
    return winner

# should return: "Let's fight again!"
print(alphabet_war("zdqmwpbs"))

# should return: "Right side wins!"
print(alphabet_war("zzzzs"))

# should return: "Left side wins!"
print(alphabet_war("wwwwww"))
