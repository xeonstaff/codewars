"""
given a total volume m, how many cubes tall is a pile of
cubes where the top cube has volume 1^3, the second 2^3, etc.?
if no such cube exists, return -1
"""

def find_nb(m):
    stacknum = 1
    while m > 0:
        m = m - (stacknum**3)
        stacknum += 1
    if m < 0:
        return -1
    if m == 0:
        return stacknum - 1
