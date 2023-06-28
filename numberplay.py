#sorts a string of numbers by the letters they contain, 
#and removes those letters, then does some arithmetic
#to arrive at a final number. Numberplay.

import re

def do_math(s):
    mathdict = {}
    #makes dictionary of values & removes letters from each chunk
    for chunk in s.split(' '):
        for char in list(chunk):
            if char.isalpha():
                filteredchunk = re.sub('[a-zA-Z]', '', chunk)
                chardefined = True
                try:
                    mathdict[char]
                except:
                    chardefined=False

                if chardefined:
                    mathdict[char].append(filteredchunk)
                else:
                    mathdict[char]=[filteredchunk]

    #sort dict by alpha order of keys
    sorted_dict = dict(sorted(mathdict.items()))
    sorted_array = []
    #flattens the dict keys into sorted_array
    for values in sorted_dict.values():
        sorted_array.extend(values)


    #does the math
    operators = ['+','-','*','/']
    operator_index = 0
    final_answer = sorted_array[0]
    if len(sorted_array)>=1:
        for item in sorted_array[1:]:
            op = operators[operator_index%len(operators)]
            final_answer = eval(str(final_answer) + op + str(item))
            operator_index+=1

    return round((float(final_answer)))


#test cases
#1 - should return 1414
# print(do_math("24z6 1z23 y369 89z 900b"))

#2- should return 1299
# print(do_math("24z6 1x23 y369 89a 900b"))

#2- should return 8
# print(do_math("1z 2t 3q 5x 6u 8a 7b"))
