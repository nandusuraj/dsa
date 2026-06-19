import math
import sys
n=int(input())
if(n<=1):
    print("Not prime")
    sys.exit()

isprime=True
for i in range(2,int(math.isqrt(n))+1):
    if(n%i==0):
        isprime=False
        break

if(isprime):
    print("Prime")
else: 
    print("not prime")

