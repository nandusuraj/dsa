#include <bits/stdc++.h>
using namespace std;

//here i have taken armstrong number to be a number wherein a number is equal to the sum of its digits to the power of the number of digits 

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >>n;
    int temp=n;
    int sum=0;
    int count=0;
    while(n){
        count++;
        n/=10;

    }
    n=temp;
    while(n){
        int digit=n%10;
        sum+=round(pow(digit,count));
        n/=10;
    }
    if(sum==temp) cout<<"Is armstrong";
    else cout<<"Is not armstrong";

    return 0;
}