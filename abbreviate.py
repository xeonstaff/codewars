# splits string into its component words, and if the word
# is longer than 4 characters, 'i18n'-s the word by retaining
# only the first and last characters and replacing the rest with their count

import re

def abbreviate(s):
    split = re.split(r'([^A-Za-z])',s)
    for i in range(len(split)):
        if len(split[i])>=4:
            sw = list(split[i])
            split[i] = sw[0]+str(len(sw)-2)+sw[-1]
    return ''.join(split)


#test cases
#1. should return '1i8n'
print(abbreviate('internationalization'))

#2. should return 'e6t-r2e'
print(abbreviate('elephant-ride'))
