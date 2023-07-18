# translates a number into Turkish language

def get_turkish_number(num):
    digits = {
    0: "sıfır",
    1: "bir",
    2: "iki",
    3: "üç",
    4: "dört",
    5: "beş",
    6: "altı",
    7: "yedi",
    8: "sekiz",
    9: "dokuz"
    }

    tens = {
    10: "on",
    20: "yirmi",
    30: "otuz",
    40: "kırk",
    50: "elli",
    60: "altmış",
    70: "yetmiş",
    80: "seksen",
    90: "doksan"
    }

    if len(str(num)) == 1:
        return digits[num]
    elif len(str(num)) == 2 and str(num)[1]=='0':
        return tens[num]
    elif len(str(num)) == 2:
        return str(tens[int(str(num)[0]+'0')]) + ' ' + str(digits[int(str(num)[1])])


#test cases
#1. should return "on üç"
print(get_turkish_number(3))

#2. should return "yetmiş yedi"
print(get_turkish_number(77))

#3. should return "doksan dört"
print(get_turkish_number(94))
