n=int(input())
reverse=0
temp=n
while(n!=0):
    digit=n%10
    reverse=reverse*10+digit
    n//=10
if(reverse==temp):
    print("Is Palindrome")    
else:
    print("Is not palindrome")