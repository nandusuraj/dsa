import math
n=int(input())
res=[]
for i in range(1,int(math.isqrt(n))+1):
    if(n%i==0):
        res.append(i)
        if(n//i!=i):
            res.append(int(n//i))
res.sort()
print(*res)
