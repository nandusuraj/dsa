#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int new_num=0;
    int n;
    cin>>n;
    while(n){
        int digit=n%10;
        new_num=new_num*10+digit;
        n=n/10;



    }
    cout<<new_num;

    return 0;
}