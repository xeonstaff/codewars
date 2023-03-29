#3 methods to output the factorial n! of a number n

from math import factorial



import functools

def factorial1(n):
    return functools.reduce(lambda x,y:x*y, list(range(1,n+1)))



def factorial2(n):
    rangelist = list(range(1,n+1))
    factorial = 1
    for x in rangelist:
        factorial *= x
    return factorial



factorial(10)
factorial1(10)
factorial2(10)
