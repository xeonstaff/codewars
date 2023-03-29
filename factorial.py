#two methods to output the factorial n! of a number n

import functools

def funfactorial(n):
    return functools.reduce(lambda x,y:x*y, list(range(1,n+1)))


def factorial(n):
    rangelist = list(range(1,n+1))
    factorial = 1
    for x in rangelist:
        factorial *= x
    return factorial
