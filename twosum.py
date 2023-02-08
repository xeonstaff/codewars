'''
for array 'numbers', find two numbers that sum to integer target
and return their indeces 
'''

def two_sum(numbers, target):
     for indx1, x in enumerate(numbers):
        for indx2, y in enumerate(numbers):
            if (x + y == target) & (indx1 !=indx2):
                return[indx1, indx2]
