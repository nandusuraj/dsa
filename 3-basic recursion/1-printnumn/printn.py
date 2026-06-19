def printn(i,n):
    if(i>n):
        return
    print(i,end=" ")
    printn(i+1,n)

n=int(input())
printn(1,n)