#predicts the age you'll live to

import math 

def predict_age(*ages):
    targetage = 0
    for age in ages:
        targetage += age**2
    return math.floor(math.sqrt(targetage)/2)

#test cases
#1 - should return: 86
print(predict_age(65, 60, 75, 55, 60, 63, 64, 45))

#2 - should return: 84
print(predict_age(89,40,60,51,54,74,43,48))
