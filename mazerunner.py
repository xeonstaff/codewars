#navigates a maze using given instructions and returns resurt of navigation
#2 = starting point, 3 = ending point, 0 = safe path, 1 = wall (deadly)

def maze_runner(maze, directions):
    def find_starting_point(maze_array):
        for row in range(len(maze_array[0])):
            for column in range(len(maze_array)):
                if maze_array[row][column] == 2:
                    return [row,column] 
                
    loc = find_starting_point(maze)

    def move_point(dir):
        if dir=='N': loc[0]-=1
        if dir=='S': loc[0]+=1
        if dir=='E': loc[1]+=1
        if dir=='W': loc[1]-=1
    
    for x in range(len(directions)):
        move_point(directions[x])
        try:
            maze_num = maze[loc[0]][loc[1]]
        except IndexError:
            return 'Dead'
        if maze_num == 1 or loc[0]<0 or loc[1]<0: return 'Dead'  
        if maze_num == 3: return 'Finish'  
    return 'Lost'


#test maze
# test_maze = [[1,1,1,1,1,1,1],
#             [1,0,0,0,0,0,3],
#             [1,0,1,0,1,0,1],
#             [0,0,1,0,0,0,1],
#             [1,0,1,0,1,0,1],
#             [1,0,0,0,0,0,1],
#             [1,2,1,0,1,0,1]]

# #test cases
#1 - should return 'Finish'
# print(maze_runner(test_maze, ["N","N","N","N","N","E","E","E","E","E"]))
# print(maze_runner(test_maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))
# print(maze_runner(test_maze, ["N","N","N","N","N","E","E","E","E","E","W","W"]))

# #2 - should return 'Dead'
# print(maze_runner(test_maze, ["N","N","N","W","W"]))
# print(maze_runner(test_maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]))

#3 - should return 'Lost'
# print(maze_runner(test_maze, ["N","E","E","E","E"]))

