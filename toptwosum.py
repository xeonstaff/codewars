#returns a sum of the largest two numbers in a list

def largest_pair_sum(numbers): 
    return(sorted(numbers)[-1]+sorted(numbers)[-2])
