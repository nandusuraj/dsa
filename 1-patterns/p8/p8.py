n=int(input())
m=int(ord('A'))
for i in range(n):
    for j in range(i+1):
        print(chr(m+j),end=" ")
    print()