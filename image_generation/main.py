from mnemonic import Mnemonic
import hashlib


def hash(address):
    return hashlib.sha256(address).hexdigest()


def generating_words(hashed):
    mnemo = Mnemonic("english")
    words = mnemo.generate(strength=256)
    print("words are : \n" + words)
    seed = mnemo.to_seed(words, passphrase=hashed)
    return seed

def main():
    address = "A12QmeXz41G4AgzpundxgsbYMSXsnyreXAB17hrgmEwZcenRhKG4"
    print("Original address is: " + address)
    encoded_address = str.encode(address)
    hashed_address = hash(encoded_address)
    print("Hashed address is : " + hashed_address)
    word_list = generating_words(hashed_address)
    print("word list is :" + word_list)
    return


if __name__ == "__main__":
    main()