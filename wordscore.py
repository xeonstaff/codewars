#if a=1, b=2, etc. calculate the sum valued of a word

def words_to_marks(s):
    letterdict = {}
    for x, y in zip(list(range(1,27)), [*"abcdefghijklmnopqrstuvwxyz"]):
            letterdict[y] = x

    wordscore = 0
    for letter in [*s]:
          wordscore+=letterdict[letter]

    return wordscore
