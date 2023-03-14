#removes duplicate words from a space-separated string of words

def remove_duplicate_words(s):
    wordlist = []
    words = s.split(" ")
    print(words)
    for word in words:
        if word not in wordlist:
            wordlist.append(word)
    return " ".join(wordlist)
