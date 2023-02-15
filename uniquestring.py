#finds the unique string in an array of strings-- the ohters all composed of the same alpha characters

def find_uniq(arr):
    def find_key(arr):
        def find_letter(strg):
            return ''.join(sorted(strg.lower()))[0]
        
        #finds the alphabetical first letter of the first 3 strings of arr
        k1 = find_letter(arr[0])
        k2 = find_letter(arr[1])
        k3 = find_letter(arr[2])
        
        #from this we can infer a 'key' to check all items in arr against
        if k1 == k2: return k1
        if k1 == k3: return k1
        if k2 == k3: return k3


    key = find_key(arr)
    
    for strg in arr:
        if strg.find(key) == -1:
            return strg
