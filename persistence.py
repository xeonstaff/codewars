"""
return number of times a number's digits have to be 
multiplied by each other to get to a single digit
"""

from functools import reduce

def persistence(n):
    thecountvariableweregoingtoreturn = 0

    def multiply(m):
        list_of_digits = [int(i) for i in str(m)]
        return reduce(lambda a, b: a*b, list_of_digits)

    while len(str(n)) != 1:
        n = multiply(n)
        thecountvariableweregoingtoreturn += 1

    return thecountvariableweregoingtoreturn
