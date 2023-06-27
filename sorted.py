# checks if an array of numbers is sorted, and if so, ascending or descending

def is_sorted_and_how(arr):
    def ascending(a1):
        target = a1[0]
        for number in a1:
            if number >= target:
                target = number
            else:
                return False
        return True
            
    def descending(a2):
        target = a2[0]
        for number in a2:
            if number <= target:
                target = number
            else:
                return False
        return True

    if ascending(arr): return 'yes, ascending'
    if descending(arr): return 'yes, descending'
    else: return 'no'

#test cases
#1 - should return 'yes, ascending'
print(is_sorted_and_how([1, 2]))

#2 - should return 'yes, descending'
print(is_sorted_and_how([15, 7, 3, -8]))

#3 - should return 'no'
print(is_sorted_and_how([4, 2, 30]))
