#given i. array of numbers and ii. an integer 'number'
#return the last 'number' of even integers from the array


def even_numbers(arr,n):
    arr.reverse()
    newarr = []
    for num in arr:
        print(num)
        if num % 2 == 0:
            newarr.append(num)
    newarr.reverse()
    return newarr[-n:]
    

#test cases
#1 - should return: [4, 6, 8]
print(even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

#2 - should return: [-8, 26]
print(even_numbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
