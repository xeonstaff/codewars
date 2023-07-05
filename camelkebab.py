#takes a camelCase string and returns a kabob-case version

import re

def kebabize(st):
    #remove numbers from string
    st = re.sub(r'\d', '', st)
    #split into words
    words = [re.findall(r'[a-z]*',st)[0]] + re.findall(r'[A-Z][a-z]*',st)
    #kebabize
    kebabstring = "".join([word.lower() + '-' for word in words if word])
    #remove final dash and return
    return kebabstring[:-1]

#test cases
#1 - should return 'my-camel-cased-string'
# print(kebabize('myCamelCasedString'))

#2 - should return 'camels-have-humps'
# print(kebabize('camelsHave3Humps'))

#3 - should return 'c-a-m-e-l'
# print(kebabize('CAMEL'))

#4- should return 'fakm-wtglwq-z-m'
# print(kebabize('F2akmWtglw5qZM'))
