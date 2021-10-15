myText = "I love coding"

def encrypt(text):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    new = []
    last = []
    for i in alphabet:
        new.append(i)

    def split(word):
        return [char for char in word]

    text = text.replace(" ", "")
    text = split(text)
    # for i in text

    for i in new:
        if i == text[i]:
            text[i] = new[i+5]
            
        

    print(text)
    print(new)

encrypt(myText)


