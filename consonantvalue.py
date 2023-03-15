# return the highest-scoring substring of consonants
# (where a letter's 'score' is its place in the alphabet)
# from an string input containing consonants and vowels

import re

def solve(s):
    alphascores = {}
    for index, letter in enumerate([*"abcdefghijklmnopqrstuvwxyz"]):
        alphascores[letter]=index+1
    
    substrings = re.split('a|o|e|u|i', s)
    substringscores = []

    for substring in substrings:
        total=0
        for letter in substring:
            total += alphascores[letter]
        substringscores.append(total)

    return max(substringscores)
