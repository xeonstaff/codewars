#order a string according to digits 1-9
#inserted into individual words

def order(sentence):
    if not sentence:
        return ""
    else:
        x=sentence.split()
        listy=[]
        counter=1
        while len(listy) != len(x):
            for word in x:
                if str(counter) in word:
                    listy.append(word)
                    counter += 1       
    return(" ".join(listy))
