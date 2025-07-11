from os import listdir


def isFile(file):
    return len(file.split(".")) >= 2


def getArch(path, space=0, offset=3):
    content = listdir(path)

    for i in content:
        if isFile(i):
            print(space * " " + f"{i}")
        else:
            print(space * " " + f"{i}/")
            getArch(path + i + '/', space + offset)


if __name__ == "__main__":
    getArch("./")
