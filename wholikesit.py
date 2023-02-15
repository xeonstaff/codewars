#displays text of people who 'liked' a post on, for example, Facebook

def likes(names):
    x = " likes this"
    x2= " like this"
    y=len(names)
    if not names:
        return("no one likes this")
    if y == 1:
        return(str(names[0]) + x)
    if y == 2:
        return(str(names[0]) + " and " + str(names[1]) + x2)
    if y == 3:
        return(str(names[0]) + ", " + str(names[1]) + " and " + str(names[2]) + x2)
    if y >=4:
        return(str(names[0]) + ", " + str(names[1]) + " and " + str(y-2) + " others like this")
