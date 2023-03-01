#ensure list of numbers is in ascending order

def in_asc_order(arr):
    if len(arr) == 1 or len(arr) == 0:
        return True
    for idx, x in enumerate(arr):
        print(idx)
        if(idx>0 and x < arr[idx-1]):
            return False
    return True
