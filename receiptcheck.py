#checks receipt number and expiration date against an existing entry

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    monthtable = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    }
    current = current_date.split()
    expiration = expiration_date.split()
    month = current[0]

    #check coupon number
    if(entered_code == correct_code):
        #check year
        if(int(current[2])<int(expiration[2])):
            return True
        if(int(current[2])==int(expiration[2])):
            #check month 
            if(monthtable[current[0]]<monthtable[expiration[0]]):
                return True
            if(monthtable[current[0]]==monthtable[expiration[0]]):
                #check day 
                if(int(current[1][:-1])<=int(expiration[1][:-1])):
                    return True
    return False
