#two groups are standing in a line (1D array), alternating teams: A B A B, etc.
#return an array of two numbers: the combined weights of team 1 and team 2

def row_weights(array):
    # use 0 for even and 1 for odd
    def total_weight(array, evenorodd):
        return sum([array[i] for i in range(len(array)) if i%2 == evenorodd])

    return(total_weight(array, 0), total_weight(array, 1))
